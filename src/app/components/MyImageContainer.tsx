import Image from "next/image";

export default function MyImageContainer({
  classNames,
  device,
  source,
  alternateTxt,
  size,
}: {
  classNames?: string;
  device?: string;
  source: string;
  alternateTxt: string;
  size: number;
}) {
  let responsiveClass;
  if (device == "phone") {
    responsiveClass = "flex md:hidden";
  } else if (device == "ipad") {
    responsiveClass = "hidden md:flex";
  } else if (device == "laptop") {
    responsiveClass = "hidden xl:flex";
  } else {
    responsiveClass = "flex";
  }
  return (
    <div
      className={`${classNames} ${responsiveClass} flex-row justify-center items-center text-9xl w-1/2 border border-red-500 2lg:border-blue-500 `}
    >
      <Image src={source} alt={alternateTxt} height={size} width={size} />
    </div>
  );
}
