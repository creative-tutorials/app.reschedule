import { Suspense, useState } from "react";
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
  const [dateTimeValue, setDateTimeValue] = useState("");
  const handleInputChange = (event: { target: { value: any; }; }) => {
    const inputDate = event.target.value;
    const dateObj = new Date(inputDate);
    const formattedDateTime = `${getDayOfWeek(dateObj)}, ${getMonthName(
      dateObj
    )} ${dateObj.getDate()}, ${formatTime(dateObj)}`;

    setDateTimeValue(inputDate);
    setFormData({ ...formData, dateTime: formattedDateTime });
  };

  const getDayOfWeek = (date: Date) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[date.getDay()];
  };

  const getMonthName = (date: Date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[date.getMonth()];
  };

  const formatTime = (date: Date) => {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const formattedHour = hour < 10 ? `0${hour}` : hour;
    const formattedMinute = minute < 10 ? `0${minute}` : minute;
    return `${formattedHour}:${formattedMinute}`;
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
              onChange={handleInputChange}
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
