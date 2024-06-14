import MyHeader from "./MyHeader";
import MyParagraph from "./MyParagraph";

//Inconsistent Component!!!

export default function PageHeading({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) {
  return (
    <div className="flex flex-col md:w-1/2 justify-center items-center">
      <MyHeader
        headerType={4}
        className="text-center border border-transparent border-b-shadow w-1/2"
      >
        {heading}
      </MyHeader>
      <MyParagraph className=" text-center justify-center">
        {subHeading}
      </MyParagraph>
    </div>
  );
}
