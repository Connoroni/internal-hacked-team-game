import podiumStyles from "@/modules/Podium.module.css";
import { leaderBoardResultsType } from "@/types/leaderBoardType";
import Image from "next/image";

export default function Podium({
  results,
}: {
  results: leaderBoardResultsType;
}) {
  console.log(results);
  return (
    <div className={podiumStyles.container}>
      {results.map((result, i) => (
        <div key={i} className={podiumStyles.podium}>
          {result && (
            <>
              <div className={podiumStyles.icon}>
                <div className={podiumStyles.circle}>
                  <div className={podiumStyles.stars}>
                    {Array(3 - i)
                      .fill("1")
                      .map((i, j) => (
                        <Image
                          key={`${i + j}`}
                          alt=""
                          width={30}
                          height={30}
                          src="/icons/star.png"
                        />
                      ))}
                  </div>
                </div>
              </div>

              <p>{result[1]}</p>
              <div className={podiumStyles.plynth}>{i + 1}</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
