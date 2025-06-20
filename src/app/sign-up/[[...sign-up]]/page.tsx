import { SignUp, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import styles from "@/modules/sign-up-in.module.css";

export default function SignUpPage() {
  return (
    <main className={styles.main}>
      <SignedOut>
        <p className={styles.large}>
          Welcome to GameEd, a game hosting site for use by Tech Educators.
        </p>
        <p className={styles.large}>Sign up below to create an account:</p>
        <p className={styles.small}>
          Or{" "}
          <SignInButton>
            <span className={styles.underline}>sign in</span>
          </SignInButton>{" "}
          if you already have an account.
        </p>
        <SignUp />
      </SignedOut>
      <SignedIn>
        <p>You are already signed in.</p>
        <Link href={"/"}>Click here to go home</Link>
      </SignedIn>
    </main>
  );
}
