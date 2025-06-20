import Image from "next/image";
import headerStyles from "../modules/Header.module.css";
import Link from "next/link";
import GamesList from "./GamesList";

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <Link href="/" className={headerStyles.gamEd}>
        <Image
          src="/images/Definitely_not_AI_Generated.png"
          alt=""
          width={250}
          height={50}
        />
        <p className={headerStyles.p}>Created for Tech Educators</p>
      </Link>
      <GamesList />
      <Link href="/">
        <Image
          src="/images/TE_GD_Logo_Negative_Green_Large_.png"
          alt=""
          width={350}
          height={85}
        />
      </Link>
    </header>
  );
}
