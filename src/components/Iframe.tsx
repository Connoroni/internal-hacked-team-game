"use client";
import { useState } from "react";
import styles from "@/modules/games.module.css";

type propType = {
  game_url: string;
};

export default function Iframe(props: propType) {
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  return (
    <>
      {fullscreen ? (
        <>
          <div className={`${styles.top_box} ${styles.top_box_full}`}>
            <button
              onClick={() => {
                setFullscreen(!fullscreen);
              }}
            >
              Toggle Theater Mode
            </button>
          </div>
          <iframe
            className={`${styles.game_frame} ${styles.frame_full}`}
            src={props.game_url}
            allowFullScreen
          ></iframe>
        </>
      ) : (
        <>
          <div className={`${styles.top_box} ${styles.top_box_small}`}>
            <button
              onClick={() => {
                setFullscreen(!fullscreen);
              }}
            >
              Toggle Theater Mode
            </button>
          </div>
          <iframe
            className={`${styles.game_frame} ${styles.frame_small}`}
            src={props.game_url}
            allowFullScreen
          ></iframe>
        </>
      )}
    </>
  );
}
