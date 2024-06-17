import MyHeader from "./MyHeader";
import MyButton from "./MyButton";

export default function MySimpleCard({
  classNames,
  imgSrc,
  title,
  subTitle,
}: {
  classNames?: string;
  imgSrc: string;
  title: string;
  subTitle: string;
}) {
  return (
    <div className="w-full md:w-1/2">
      <div className="w-full text-6xl border border-red-500 flex flex-row justify-center items-center h-60">
        {imgSrc}
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <MyHeader headerType={3}>{title}</MyHeader>
          <div className="text-shadow">{subTitle}</div>
        </div>
        <MyButton onClick={() => console.log("Clicked")} justArrow />
      </div>
    </div>
  );
}
