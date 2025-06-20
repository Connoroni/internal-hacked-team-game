import Image from "next/image";
import headerStyles from "../modules/Header.module.css";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

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
      <div className={headerStyles.rightdiv}>
        <div>
          <button className={headerStyles.clerkbutton}>
            <SignedIn>
              <UserButton>
                <p className={headerStyles.clerktext}>My Profile</p>
              </UserButton>
              <div className={headerStyles.vertical}></div>
              <SignOutButton>
                <p className={headerStyles.clerktext}>Sign Out</p>
              </SignOutButton>
            </SignedIn>
            <SignedOut>
              <SignUpButton>
                <p className={headerStyles.clerktext}>Sign Up</p>
              </SignUpButton>
              <div className={headerStyles.vertical}></div>
              <SignInButton>
                <p className={headerStyles.clerktext}>Sign In</p>
              </SignInButton>
            </SignedOut>
          </button>
        </div>
        <Link href="/">
          <Image
            src="/images/TE_GD_Logo_Negative_Green_Large_.png"
            alt=""
            width={350}
            height={85}
          />
        </Link>
      </div>

    </header>
  );
}
