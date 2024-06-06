import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MyNavLink({
  children,
  id,
}: {
  children: string;
  id: string;
}) {
  const pathname = usePathname();
  console.log(`/${children}`);

  return (
    <Link
      className={`${
        pathname === `/${id}`
          ? "bg-my-gradient90 text-transparent bg-clip-text"
          : "text-shadow"
      } font-semibold`}
      href={`/${id}`}
    >
      {children}
    </Link>
  );
}
