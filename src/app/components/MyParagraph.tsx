export default function MyParagraph({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return <div className={`${className} text-accent`}>{children}</div>;
}
