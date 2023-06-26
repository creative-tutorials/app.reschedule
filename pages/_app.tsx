import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import Script from "next/script";

const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const tidoKey = process.env.NEXT_PUBLIC_TIDO_KEY;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider publishableKey={clerkPubKey} {...pageProps}>
      <Component {...pageProps} />
      <Script src={`//code.tidio.co/${tidoKey}.js`} />
    </ClerkProvider>
  );
}
