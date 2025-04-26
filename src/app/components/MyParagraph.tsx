import MyText from "./MyText";

export default function MyParagraph({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return <MyText className={`${className} text-accent `}>{children}</MyText>;
}
