export default function MyHeader({
  children,
  className,
  headerType,
}: {
  children: string;
  className?: string;
  headerType: number;
}) {
  let headerClassName;

  switch (headerType) {
    case 1:
      headerClassName = "text-6xl font-semibold leadingIssue!!!";
      break;
    case 2:
      headerClassName = "text-5xl font-semibold leading-tight";
      break;
    case 3:
      headerClassName = "text-2xl font-semibold";
      break;
    default:
      break;
  }

  return <h1 className={`${headerClassName} ${className}`}>{children}</h1>;
}
