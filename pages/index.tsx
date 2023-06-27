import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { lazy, Suspense, useState } from "react";

const Header = lazy(() => import("../components/Header/header"));

import EventTable from "@/components/event/table";
import GrabMenu from "@/components/menu/grabMenu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isGrabMenu, setIsGrabMenu] = useState(false);

  return (
    <>
      <Head>
        <title>Reschedule</title>
        <meta name="description" content="Reschedule - Match meet and reschedule events" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icon/favicon-16x16.png"
        />
        <link rel="manifest" href="/icon/site.webmanifest" />
      </Head>
      <div className={styles.container}>
        <Suspense fallback={<p>Loading...</p>}>
          <Header styles={styles} setIsGrabMenu={setIsGrabMenu} />
        </Suspense>
        <div className={styles.wrapper}>
          <div className={styles.tabs}>
            <div className={styles.tabtop}>
              <div className={styles.events}>
                <div className={styles.input}>
                  <input type="text" placeholder="Search events." />
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727v0Z"></path>
                    <path d="M15.857 15.86 21 21.001"></path>
                  </svg>
                </div>
                <div className={styles.cri}>
                  <Link href={"/create/event"} id={styles.button}>
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2  "
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 5.25v13.5"></path>
                      <path d="M18.75 12H5.25"></path>
                    </svg>
                    Create
                  </Link>
                </div>
              </div>
              <EventTable styles={styles} />
            </div>
          </div>
        </div>
        <Suspense fallback={<p>Loading...</p>}>
          <GrabMenu
            styles={styles}
            isGrabMenu={isGrabMenu}
            setIsGrabMenu={setIsGrabMenu}
          />
        </Suspense>
      </div>
    </>
  );
}
