import { FaArrowRightLong } from "react-icons/fa6";

export default function MyButton({
  children,
  fancy,
  withArrow,
  suttle,
  justArrow,
}: {
  children?: string;
  fancy?: boolean;
  withArrow?: boolean;
  suttle?: boolean;
  justArrow?: boolean;
}) {
  //Just arrow button
  if (justArrow) {
    return (
      <button className="text-[#303030] border border-[#757575] rounded-full px-5 h-12 flex flex-row justify-center items-center">
        <FaArrowRightLong size={15} />
      </button>
    );
  }

  //Suttle button
  if (suttle) {
    //Need to add selected page CSS dynamic classes
    return (
      <button className={`flex flex-row gap-2 text-purple-700`}>
        <div>{children}</div>
      </button>
    );
  }

  //Fancy / Non-Fancy Button
  const buttonClass = fancy
    ? "text-white bg-my-gradient90 rounded-full px-5 h-12 flex flex-row justify-center items-center"
    : "text-[#303030] border border-[#757575] rounded-full px-5 h-12 flex flex-row justify-center items-center";

  return (
    <button className={`flex flex-row gap-2 ${buttonClass}`}>
      <div>{children}</div>
      {withArrow ? <FaArrowRightLong size={15} /> : null}
    </button>
  );
}
