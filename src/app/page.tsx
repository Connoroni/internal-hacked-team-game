import ScoresForm from "@/components/ScoresForm";
import Leaderboard from "@/components/Leaderboard";
import { db } from "../utils/dbConnectionString.js";

export default async function HomePage() {
  const results = async () => {
    const response = await db.query(
      "SELECT user_name, SUM(score) as score  FROM scores LEFT JOIN users ON scores.user_id = users.id GROUP BY users.user_name ORDER BY score DESC limit 10 "
    );
    let data = await response.rows;
    //data is an array of objects!!!!
    data = data.map((data: { score?: number }, i: number) => {
      return [i + 1, ...Object.values(data)];
    });
    return data;
  };
  const leaderBoardResults = await results();

  return (
    <>
      <h1>Home Page</h1>
      {leaderBoardResults ? (
        <Leaderboard
          title="LEADERBOARD"
          results={leaderBoardResults}
          limit={10}
          displayPodium
        />
      ) : (
        <div>This is undefined</div>
      )}
      <ScoresForm />
    </>
  );
}
