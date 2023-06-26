import Link from "next/link";
export default function GrabMenu(props: {
  isGrabMenu: any;
  styles: any;
  setIsGrabMenu: (arg0: boolean) => void;
}) {
  return (
    <>
      {props.isGrabMenu && (
        <div className={props.styles.grbMenu}>
          <div
            className={props.styles.gbBtn}
            onClick={() => props.setIsGrabMenu(false)}
          >
            <svg
              width="40"
              height="40"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m18.75 6.82-1.57-1.57L12 10.43 6.82 5.25 5.25 6.82 10.43 12l-5.18 5.18 1.57 1.57L12 13.57l5.18 5.18 1.57-1.57L13.57 12l5.18-5.18Z"></path>
            </svg>
          </div>
          <div className={props.styles.grbCenter}>
            <Link href="/">Home</Link>
            <Link href="/scheduled">Scheduled</Link>
            <Link href="/">Help </Link>
          </div>
        </div>
      )}
    </>
  );
}
