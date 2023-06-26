import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Header(props) {
  return (
    <div className={props.styles.header}>
      <div className={props.styles.colLeft}>
        <div className={props.styles.tempLogo}>
          <Link href="/">
            <h4>
              <span>Re</span>schedule
            </h4>
          </Link>
        </div>
      </div>
      <div className={props.styles.colRight}>
        <div className={props.styles.Links}>
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
        <div className={props.styles.userProfile}>
          <UserButton />
        </div>
        <div
          className={props.styles.menu}
          onClick={() => props.setIsGrabMenu(true)}
        >
          <svg
            width="25"
            height="25"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 18h18v-2H3v2Zm0-5h18v-2H3v2Zm0-7v2h18V6H3Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
