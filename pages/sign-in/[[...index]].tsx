import { SignIn } from "@clerk/nextjs";
import ath from "../../styles/ath.module.css";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>SignIn</title>
        <meta name="description" content="Continue learning with coursenino" />
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
      <div className={ath.container}>
        <SignIn />
      </div>
    </>
  );
}
