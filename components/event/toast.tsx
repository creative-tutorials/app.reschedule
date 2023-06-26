import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

export default function ToastNotification(props: { evt: any; toastProps: { isHidden: boolean; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }; }) {
  return (
    <div
      className={props.evt.toastContainer}
      id={props.toastProps.isHidden === false ? props.evt.active : ""}
    >
      <div className={props.evt.toastContent}>
        <p>
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
            <path d="M17.25 12v-2a5.25 5.25 0 1 0-10.5 0v2l-2 4.25h14.5l-2-4.25Z"></path>
            <path d="M9 16.75s0 2.5 3 2.5 3-2.5 3-2.5"></path>
          </svg>
          {props.toastProps.content}
        </p>
      </div>
    </div>
  );
}
