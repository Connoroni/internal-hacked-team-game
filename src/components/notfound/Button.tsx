import { classNames } from "@/utils/classNames";
import { ElementType } from "react";

export default function Button({
  as,
  children,
  className,
  ...props
}: { as?: ElementType } & React.ComponentProps<"a"> &
  React.ComponentProps<"button">) {
  const Component = as || DefaultButton;

  return (
    <Component
      className={classNames(
        className,
        "inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 font-medium hover:opacity-80 disabled:opacity-20"
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

function DefaultButton({ children, ...props }: React.ComponentProps<"a">) {
  return <a {...props}>{children}</a>;
}
