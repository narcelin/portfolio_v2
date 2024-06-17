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
      className={`${classNames} ${responsiveClass} w-full border border-yellow-500 relative h-96`}
    >
      <Image
        src={source}
        alt={alternateTxt}
        // height={size}
        // width={size}
        // style={{ maxWidth: "100%", height: "auto" }}
        fill
        objectFit="cover"
      />
    </div>
  );
}
