import leaderboardStyles from "../modules/Leaderboard.module.css";
export default function Leaderboard({
  displayPodium = false,
  title,
  results,
}: {
  displayPodium: boolean;
  title: string;
  results: Array<Array<string | number>>;
}) {
  //take an array of objects and loop through adding the contents of the object(array of arrays might be better) to the table row by row

  //NEED TO LIMIT THE RESULTS BEFORE THEY COME THROUGH
  return (
    <div className={leaderboardStyles.leaderBoard}>
      <h1>{title}</h1>
      {displayPodium && <p>1st,2nd,3rd</p>}
      <table>
        <tbody>
          {results.map((result: Array<string | number>, i: number) => (
            <tr key={i} className={leaderboardStyles.rows}>
              {result.map((item: string | number, j: number) => (
                <td key={"" + i + "" + j + ""}>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
