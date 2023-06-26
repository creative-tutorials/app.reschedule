import { MouseEventHandler } from "react";

export default function Button(props: { createNewEvent: MouseEventHandler<HTMLButtonElement> | undefined; formData: { isFetching: any; }; jebt_btn_disabled: string | undefined; }) {
  return (
    <button
      onClick={props.createNewEvent}
      id={props.formData.isFetching ? props.jebt_btn_disabled : ""}
    >
      {props.formData.isFetching ? "Please wait..." : "Create Event"}
    </button>
  );
}
