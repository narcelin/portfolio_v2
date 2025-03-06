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

export function NavLinks(classNames: string) {
  return (
    <ul className={`${classNames}`}>
      <li>
        {/* Id is empty to represent / pathname to match home. May need to be change for consistency */}
        <MyNavLink id="">Home</MyNavLink>
      </li>
      {/* <li>
        <MyNavLink id="about">About</MyNavLink>
      </li> */}
      <li>
        <MyNavLink id="myEvents">My Events</MyNavLink>
      </li>
      <li>
        <MyNavLink id="contact">Contact</MyNavLink>
      </li>
    </ul>
  );
}
