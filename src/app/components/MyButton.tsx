import Image from "next/image";

export default function MyButton({
  children,
  fancy,
  withArrow,
}: {
  children: string;
  fancy: boolean;
  withArrow: boolean;
}) {
  const buttonClass = fancy
    ? "text-red-500"
    : "text-[#303030] border border-[#757575] rounded-full w-36 h-12 flex flex-row justify-center items-center";

  return (
    <button className={`flex flex-row gap-2 ${buttonClass}`}>
      <div>{children}</div>
      {withArrow ? (
        <Image
          src="/assets/arrow-narrow-right.svg"
          width={25} //ADJUST TO DYNAMIC
          height={25}
          alt="arrow"
        />
      ) : null}
    </button>
  );
}
