import { classNames } from "@/utils/classNames";

// Using tailwind here because this component is lifted from the main TechEd website

export const Paths = {
  dotted: [
    "M40 0H33.4228C14.9641 0 0 14.8409 0 33.1493C0 44.1918 5.44688 53.9742 13.8173 59.9982C5.44688 66.0222 0 75.8038 0 86.8472C0 105.155 14.9641 119.996 33.4228 119.996H40V0Z",
    "M0 0H6.57719C25.0359 0 40 14.8409 40 33.1493C40 44.1918 34.5531 53.9742 26.1827 59.9982C34.5531 66.0222 40 75.8038 40 86.8472C40 105.155 25.0359 119.996 6.57719 119.996H0V0Z",
  ],
  pointed: [
    "M40 29.8254V119.997L0 71.2402V46.156L40 0V29.8254Z",
    "M-1.69419e-06 29.8254V119.997L40 71.2402V46.156L-1.69419e-06 0V29.8254Z",
  ],
  fancy: [
    "M27.5982 0.0112032C27.5196 0.0112032 27.4411 0.0112032 27.3625 0.0112032C13.1987 0.0112032 7.9798 6.05307 7.9798 18.4058C7.9798 25.266 9.34905 33.7851 9.34905 40.096C9.34905 47.2364 7.01459 52.5945 0 52.5945V67.6935C7.01459 67.6935 9.34905 72.7714 9.34905 80.5955C9.34905 87.3211 7.8339 94.7418 7.8339 101.736C7.8339 114.638 13.7486 119.997 26.8013 119.997C26.936 119.997 27.0932 119.997 27.2391 119.997H40V0H27.587L27.5982 0.0112032Z",
    "M12.4018 0.0112032C12.4804 0.0112032 12.5589 0.0112032 12.6375 0.0112032C26.8013 0.0112032 32.0202 6.05307 32.0202 18.4058C32.0202 25.266 30.651 33.7851 30.651 40.096C30.651 47.2364 32.9854 52.5945 40 52.5945V67.6935C32.9854 67.6935 30.651 72.7714 30.651 80.5955C30.651 87.3211 32.1661 94.7418 32.1661 101.736C32.1661 114.638 26.2514 119.997 13.1987 119.997C13.064 119.997 12.9068 119.997 12.7609 119.997H-1.92362e-07V0H12.413L12.4018 0.0112032Z",
  ],
  rounded: [
    "M0 60.1384C0 39.3001 7.18205 17.8902 18.9285 0H40V119.997H19.0715C7.6 102.678 0 80.9766 0 60.1384Z",
    "M21.0715 0H0V119.997H20.9285C32.4 102.678 40 80.9766 40 60.1384C40 39.3001 32.8179 17.8902 21.0715 0Z",
  ],
  slashed: [
    "M40 0.600098H37.2709L0 120.597H17.557H23.8377H40V0.600098Z",
    "M0 0.600098H2.7291L40 120.597H22.443H16.1623H0V0.600098Z",
  ],
  squared: [
    "M11.9959 0.0112203C8.4599 0.0112203 5.58485 1.14338 3.34871 3.41888C1.11256 5.69439 0 8.63122 0 12.2182V107.789C0 111.388 1.11256 114.313 3.34871 116.589C5.58485 118.864 8.47091 119.997 11.9959 119.997H32H40V0.0112203L32 0H11.9959V0.0112203Z",
    "M28.0041 119.985C31.5401 119.985 34.4151 118.853 36.6513 116.578C38.8874 114.302 40 111.365 40 107.778L40 12.207C40 8.60882 38.8874 5.68316 36.6513 3.40765C34.4151 1.13215 31.5291 -7.62939e-06 28.0041 -7.62939e-06H0L0 119.997H28.0041V119.985Z",
  ],
};

export type PillTypes = keyof typeof Paths;

export default function Pill({
  type,
  className,
  children,
  ...props
}: {
  type: PillTypes;
} & React.ComponentProps<"div">) {
  return (
    <div
      className={classNames("pill relative inline-block max-w-full", className)}
      {...props}
    >
      <Cap
        type={type}
        position="start"
        className="absolute bottom-0 right-full top-0 h-full text-[var(--color-teched-midnight)]"
        style={{ aspectRatio: "1 / 3" }}
      />
      <div className="-mx-px flex items-center truncate text-ellipsis bg-[var(--color-teched-midnight)] px-1">
        {children}
      </div>
      <Cap
        type={type}
        position="end"
        className="absolute bottom-0 left-full top-0 h-full text-[var(--color-teched-midnight)]"
        style={{ aspectRatio: "1 / 3" }}
      />
    </div>
  );
}

function Cap({
  type,
  position,
  ...props
}: {
  type: PillTypes;
  position: "start" | "end";
} & React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 40 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d={Paths[type][+(position === "end")]} fill="currentColor" />
    </svg>
  );
}
