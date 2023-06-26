import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Header({ styles }: any) {
  return (
    <div className={styles.header}>
      <div className={styles.colLeft}>
        <div className={styles.tempLogo}>
          <Link href="/">
            <h4>
              <span>Re</span>schedule
            </h4>
          </Link>
        </div>
      </div>
      <div className={styles.colRight}>
        <div className={styles.Links}>
          <Link href="/">Home</Link>
          <Link href="/scheduled">Scheduled</Link>
          <Link href="/">
            Help{" "}
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m5.25 8.625 6.75 6.75 6.75-6.75"></path>
            </svg>
          </Link>
        </div>
        <div className={styles.userProfile}>
          <UserButton />
        </div>
      </div>
    </div>
  );
}
