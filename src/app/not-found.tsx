import Hero from "@/components/notfound/Hero";
import Button from "@/components/notfound/Button";
import Pill from "@/components/notfound/Pill";
import Link from "next/link";

// Using tailwind here because this page is lifted from the main TechEd website

export default function NotFoundPage() {
  return (
    <main>
      <Hero className="flex min-h-screen flex-col justify-center bg-[var(--color-teched-yellow)]">
        <div>
          <h1 className="text-5xl lg:text-6xl mb-10 lg:mb-20">
            Oh. Well this is
            <br />
            <Pill
              type="fancy"
              className="typography-h2 lg:typograph-h1 block rotate-2 text-[var(--color-teched-yellow)] bg-[var(--color-teched-midnight)] mb-2.5 mt-2.5"
            >
              embarrassing
            </Pill>
            <br />
            but we can&apos;t find that page, or it doesn&apos;t exist...
          </h1>
          <Button
            className="border-[var(--color-teched-midnight)] bg-[var(--color-teched-midnight)] text-white"
            as={Link}
            href="/"
          >
            Get me out of here
          </Button>
        </div>
      </Hero>
    </main>
  );
}
