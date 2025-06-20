import Link from "next/link";
import { db } from "@/utils/dbConnectionString";
import styles from "@/modules/gamelist.module.css";

type gameType = {
  id: number;
  game_name: string;
};

export default async function GamesList() {
  const gamesArray = (await db.query(`SELECT id, game_name FROM games`)).rows;
  console.log(gamesArray);

  return (
    <>
      <div className={styles.dropdiv}>
        <button className={styles.dropbutton}>Games</button>
        <div className={styles.droplist}>
          {gamesArray.map((game: gameType) => (
            <Link
              key={game.id}
              href={`/games/${game.id}`}
              className={styles.dropitem}
            >
              {game.game_name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
