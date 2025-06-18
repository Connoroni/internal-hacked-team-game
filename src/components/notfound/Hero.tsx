import Section from "./Section";
import { classNames } from "@/utils/classNames";

// Using tailwind here because this component is lifted from the main TechEd website

export default function Hero({
  children,
  className,
  ...props
}: {
  align?: "left" | "right";
} & React.ComponentProps<"section">) {
  return (
    <Section
      className={classNames("bg-primary py-10 xl:py-20 ", className)}
      {...props}
    >
      <div className="col-span-12">
        <div className=" mx-auto max-w-3xl text-center">{children}</div>
      </div>
    </Section>
  );
}
