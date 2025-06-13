import { db } from "@/utils/dbConnectionString";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "@/modules/games.module.css";
import IFrame from "@/components/Iframe";

type paramType = {
  params: Promise<{
    gameId: number;
  }>;
};

export default async function GameIdPage({ params }: paramType) {
  const gameParams = await params;
  const pageDataArray = (
    await db.query(`SELECT * FROM games WHERE id= $1`, [gameParams.gameId])
  ).rows;
  const pageData = pageDataArray[0];
  console.log("pageData:", pageData);

  if (pageDataArray.length === 0) {
    notFound();
  }

  return (
    <>
      <h1 className={styles.title}>{pageData.game_name}</h1>
      <section className={styles.bottomDiv}>
        {pageData.iframe ? (
          <IFrame game_url={pageData.game_url} />
        ) : (
          <h2>
            Find the game here:
            <Link href={pageData.game_url}>{pageData.game_name}</Link>
          </h2>
        )}
        <p className={styles.description}>{pageData.game_description}</p>
        <Link href="/" className={styles.buttonLink}>
          <button className={styles.homeButton}>Go Home</button>
        </Link>
      </section>
    </>
  );
}
