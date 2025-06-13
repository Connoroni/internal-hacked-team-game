import { leaderBoardResultsType } from "@/types/leaderBoardType";
import leaderboardStyles from "../modules/Leaderboard.module.css";
export default function Leaderboard({
  displayPodium = false,
  title,
  results,
  limit,
}: {
  displayPodium: boolean;
  title: string;
  results: leaderBoardResultsType;
  limit: number;
}) {
  const minWidth = { minWidth: `${title.length * 2.5}rem` };
  //take an array of objects and loop through adding the contents of the object(array of arrays might be better) to the table row by row
  const resultsToPage = () => {
    const arr = [];
    for (let i = 0; i < limit; i++) {
      arr[i] = Array.isArray(results[i]) ? (
        <tr key={i} className={leaderboardStyles.rows}>
          {results[i].map((item: string | number, j: number) => (
            <td key={"" + i + "" + j + ""} className={leaderboardStyles.td}>
              {item}
            </td>
          ))}
        </tr>
      ) : (
        <tr key={i} className={leaderboardStyles.rows}>
          <td className={leaderboardStyles.td} colSpan={results[0].length}>
            No data yet get playing
          </td>
        </tr>
      );
    }

    return arr;
  };
  //NEED TO LIMIT THE RESULTS BEFORE THEY COME THROUGH
  return (
    <div className={leaderboardStyles.leaderBoard} style={minWidth}>
      <h1 className={leaderboardStyles.h1}>{title}</h1>
      {displayPodium && <p>1st,2nd,3rd</p>}
      <table className={leaderboardStyles.table}>
        <tbody>{resultsToPage()}</tbody>
      </table>
    </div>
  );
}
