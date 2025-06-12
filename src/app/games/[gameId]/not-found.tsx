import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Oops, it seems we can&apos;t find that page.</h1>
      <h2>Return to the home page to try finding a different game</h2>
      <Link href="/">
        <button>Go Home</button>
      </Link>
    </>
  );
}
