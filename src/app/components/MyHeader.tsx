import MyText from "./MyText";

export default function MyHeader({
  children,
  className,
  headerType,
}: {
  children: string;
  className?: string;
  headerType: number;
}) {
  let headerTypeClasses;

  switch (headerType) {
    case 1:
      headerTypeClasses = "text-6xl font-semibold leadingIssue!!!";
      break;
    case 2:
      headerTypeClasses = "text-5xl font-semibold leading-tight";
      break;
    case 3:
      headerTypeClasses = "text-2xl font-semibold";
      break;
    case 4:
      headerTypeClasses =
        "text-5xl font-semibold !bg-my-gradient90  dark:!text-transparent !bg-clip-text";
      break;
    default:
      break;
  }

  return (
    <MyText className={`${headerTypeClasses} ${className}`}>{children}</MyText>
  );
}
