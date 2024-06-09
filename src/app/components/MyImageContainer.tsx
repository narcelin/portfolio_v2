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
    <div className={`${classNames} ${responsiveClass} `}>
      <Image src={source} alt={alternateTxt} height={size} width={size} />
    </div>
  );
}
