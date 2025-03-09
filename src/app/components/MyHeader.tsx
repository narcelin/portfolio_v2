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
      headerTypeClasses = "text-6xl text-accent font-semibold leadingIssue!!!";
      break;
    case 2:
      headerTypeClasses = "text-5xl text-accent font-semibold leading-tight";
      break;
    case 3:
      headerTypeClasses = "text-2xl text-accent font-semibold";
      break;
    case 4:
      headerTypeClasses =
        "text-5xl font-semibold bg-my-gradient90 text-transparent bg-clip-text";
      break;
    default:
      break;
  }

  return (
    <h1 className={`${headerTypeClasses} ${className}`}>
      <MyText>{children}</MyText>
    </h1>
  );
}
