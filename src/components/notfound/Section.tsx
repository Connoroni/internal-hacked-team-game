// Using tailwind here because this component is lifted from the main TechEd website

export default function Section({
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section {...props}>
      <div className="mx-auto grid w-full max-w-desktop grid-cols-6 gap-4 gap-y-10 px-4 lg:grid-cols-12 lg:gap-6 lg:px-20">
        {children}
      </div>
    </section>
  );
}
