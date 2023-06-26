import { Suspense } from "react";
import EventSelect from "./evselect";
import Meet from "./meet";
import NameInput from "./name";
import EmailInput from "./email";
import Button from "./button";

export default function EventWrapper({
  evt,
  setFormData,
  formData,
  createNewEvent,
}: any) {
  const convertStringToDateTime = (e: { target: { value: any; }; }) => {
    const dateString = e.target.value;
    const dateTimeParts = dateString.split("T");
    const dateParts = dateTimeParts[0].split("-");
    const timeParts = dateTimeParts[1].split(":");

    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10);
    const day = parseInt(dateParts[2], 10);
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);

    const dateTime = new Date(year, month - 1, day, hours, minutes);


    setFormData({ ...formData, dateTime: dateTime });

    return dateTime;
  };

  return (
    <div className={evt.wrapper}>
      <div className={evt.form}>
        <div className={evt.input} id={evt.giw}>
          <Suspense fallback={<div>Loading...</div>}>
            <NameInput setFormData={setFormData} formData={formData} />
          </Suspense>
          <p>
            Event name <span>{"(required)"}</span>
          </p>
        </div>
        <div className={evt.input} id={evt.dbix}>
          <Suspense fallback={<div>Loading...</div>}>
            <EmailInput
              evt={evt}
              setFormData={setFormData}
              formData={formData}
            />
          </Suspense>
          <p>
            Event planner email <span>{"(required)"}</span>
          </p>
        </div>
        <div className={evt.input}>
          <Suspense fallback={<div>Loading...</div>}>
            <Meet setFormData={setFormData} formData={formData} />
          </Suspense>
          <p>
            Choose a place to meet <span>{"(required)"}</span>
          </p>
        </div>
        <div className={evt.input}>
          <Suspense fallback={<div>Loading...</div>}>
            <EventSelect setFormData={setFormData} formData={formData} />
          </Suspense>
          <p>
            Select an event service <span>{"(required)"}</span>
          </p>
        </div>
        <div className={evt.input}>
          <Suspense fallback={<div>Loading...</div>}>
            <input
              type="datetime-local"
              name=""
              id=""
              onChange={convertStringToDateTime}
            />
          </Suspense>
          <p>
            Pick a date and time <span>{"(required)"}</span>
          </p>
        </div>
        <div className={evt.jebt}>
          <Button
            jebt_btn_disabled={evt.jebt_btn_disabled}
            formData={formData}
            createNewEvent={createNewEvent}
          />
        </div>
        <div className={evt.form_watermark}>
          <span>
            Note: All information provided would be sent to your event planner
          </span>
        </div>
      </div>
    </div>
  );
}
