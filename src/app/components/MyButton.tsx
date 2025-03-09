"use client";

import { toast } from "react-toastify";

import { FaArrowRightLong } from "react-icons/fa6";
import MyText from "./MyText";

export default function MyButton({
  className,
  children,
  fancy,
  withArrow,
  subtle,
  justArrow,
  onClick,
  onSubmit,
}: {
  className?: string;
  children?: string;
  fancy?: boolean;
  withArrow?: boolean;
  subtle?: boolean;
  justArrow?: boolean;
  onClick: Function;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
  const onClickHandler = () => {
    // toast.success("Button Clicked!", {
    //   position: "top-left",
    // });
    onClick();
  };

  //Just arrow button RETURN
  if (justArrow) {
    return (
      <button
        onClick={() => onClickHandler()}
        className="text-black dark:text-accent border border-[#757575] rounded-full px-5 h-12 flex flex-row justify-center items-center"
      >
        <FaArrowRightLong size={15} />
      </button>
    );
  }

  //Subtle button RETURN
  if (subtle) {
    //Need to add selected page CSS dynamic classes
    return (
      <button className={`flex flex-row gap-2 text-purple-700`}>
        <MyText>{children}</MyText>
      </button>
    );
  }

  //Fancy / Non-Fancy Button
  const buttonClass = fancy
    ? "text-white bg-my-gradient90 rounded-full px-5 h-12 flex flex-row justify-center items-center"
    : "border border-[#757575] rounded-full px-5 h-12 flex flex-row justify-center items-center";

  //Basic Button RETURN
  return (
    <button
      onClick={() => onClickHandler()}
      className={`flex flex-row gap-2 ${buttonClass} ${className}`}
    >
      <MyText>{children}</MyText>
      {withArrow ? (
        <FaArrowRightLong size={15} className="text-black dark:text-accent" />
      ) : null}
    </button>
  );
}
