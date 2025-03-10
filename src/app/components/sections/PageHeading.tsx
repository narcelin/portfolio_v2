import MyHeader from "../MyHeader";
import MyParagraph from "../MyParagraph";

//Inconsistent Component!!!

export default function PageHeading({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <MyHeader
        headerType={4}
        className="text-center border border-transparent border-b-shadow"
      >
        {heading}
      </MyHeader>
      <MyParagraph className=" text-center justify-center">
        {subHeading}
      </MyParagraph>
    </div>
  );
}
