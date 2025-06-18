import Leaderboard from "@/components/Leaderboard";
import profileStyles from "@/modules/Profile.module.css";
import { db } from "@/utils/dbConnectionString";

export default async function ProfilePage() {
  const userId = 1;
  async function topGames() {
    const response = await db.query(
      "SELECT game_name FROM scores LEFT JOIN games ON scores.game_id = games.id WHERE user_id = $1 ORDER BY score LIMIT 5",
      [userId]
    );
    let data = await response.rows;
    //data is an array of objects!!!!
    data = data.map((data: { game_name?: string }, i: number) => {
      return [i + 1, ...Object.values(data)];
    });
    return data;
  }
  async function recentGames() {
    const response = await db.query(
      " SELECT game_name, score FROM scores LEFT JOIN games ON scores.game_id = games.id WHERE user_id = $1 ORDER BY last_updated LIMIT 5",
      [userId]
    );
    let data = await response.rows;
    //data is an array of objects!!!!
    data = data.map(
      (data: { game_name?: string; score?: number }, i: number) => {
        return [i + 1, ...Object.values(data)];
      }
    );
    return data;
  }
  return (
    <>
      <div className={profileStyles.details}>
        {/* profile pic 
        username
        edit button*/}
        <div className={profileStyles.circle}></div>
        <p className={profileStyles.name}>NAmE</p>
        <button className={profileStyles.editBtn}>Edit Profile</button>
      </div>
      <div className={profileStyles.stats}>
        <Leaderboard
          displayPodium={false}
          title={"Recent Games"}
          limit={5}
          results={await recentGames()}
        />
        <Leaderboard
          displayPodium={false}
          title={"Top 5 Games"}
          limit={5}
          results={await topGames()}
        />
      </div>
    </>
  );
}
