import Image from "next/image";
import headerStyles from "../modules/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <Link href="/">
        <h1 className={headerStyles.h1}>GameEd</h1>
        <p className={headerStyles.p}>Created for Tech Educators</p>
      </Link>
      <Link href="/">
        <Image
          src="/images/TE_GD_Logo_Negative_Green_Large_.png"
          alt=""
          width={350}
          height={350}
        />
      </Link>
    </header>
  );
}
