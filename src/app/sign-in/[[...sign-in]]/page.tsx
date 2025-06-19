import { SignIn, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import styles from "@/modules/sign-up-in.module.css";

export default function SignInPage() {
  return (
    <main className={styles.main}>
      <SignedOut>
        <p className={styles.large}>Welcome back to GameEd!</p>
        <p className={styles.large}>Sign into your account below:</p>
        <p className={styles.small}>
          Or{" "}
          <SignUpButton>
            <span className={styles.underline}>sign up</span>
          </SignUpButton>{" "}
          if you don&apos;t have an account.
        </p>
        <SignIn />
      </SignedOut>
      <SignedIn>
        <p className={styles.large}>You are already signed in.</p>
        <Link href={"/"}>Click here to go home</Link>
      </SignedIn>
    </main>
  );
}
