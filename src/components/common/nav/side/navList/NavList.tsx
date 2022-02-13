import styles from "./NavList.module.scss";
import { FC } from "react";
import Link from "next/link";

export interface LinkObj {
  href: string;
  name: string;
}

interface SpoilerProps {
  title: string;
  links: LinkObj[];
}

const NavList: FC<SpoilerProps> = ({ title, links }) => {
  return (
    <>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {links.map((l) => (
          <li key={l.name} className={styles.link}>
            <Link href={l.href}>
              <a>{l.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavList;
