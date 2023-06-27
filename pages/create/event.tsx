// import { Event_wrapper } from "./event_wrapper";
import Head from "next/head";
import evt from "../../styles/evt.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "@/styles/Home.module.css";
import { lazy, Suspense, useEffect, useState } from "react";
import Header from "../../components/Header/header";
import EventWrapper from "@/components/event/event_wrapper";
import ToastNotification from "@/components/event/toast";
import GrabMenu from "@/components/menu/grabMenu";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

export default function CreateEventPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [isGrabMenu, setIsGrabMenu] = useState(false);
  const router = useRouter();
  const [counter, setCounter] = useState(0);
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    name: "",
    sender: "",
    email: "",
    location: "",
    service: "",
    dateTime: "",
    isFetching: false,
  });

  async function showSucessNotification(data: string) {
    setToastProps((prev) => {
      return {
        ...prev,
        isHidden: false,
        content: data,
      };
    });
    setTimeout(() => {
      setToastProps((prev) => {
        return {
          ...prev,
          isHidden: true,
          content: "",
        };
      });
    }, 2500);
  }
  async function showWarningNotification(error: {
    response: { data: { message: any } };
  }) {
    setToastProps((prev) => {
      return {
        ...prev,
        isHidden: false,
        content: error.response.data.message,
      };
    });
    setTimeout(() => {
      setToastProps((prev) => {
        return {
          ...prev,
          isHidden: true,
          content: "",
        };
      });
    }, 2500);
  }

  const checkAuthState = async () => {
    if (isLoaded || isSignedIn) {
      setFormData((prev: any) => {
        return {
          ...prev,
          id: user?.id,
          username: user?.fullName,
          sender: user?.primaryEmailAddress?.emailAddress,
        };
      });
    }
  };

  useEffect(() => {
    setCounter((prev) => prev + 1);
    counter === 1 ? checkAuthState() : null;

    return () => {
      setCounter(0);
    };
  }, [counter, isLoaded, isSignedIn]);

  const devAPI = process.env.NEXT_PUBLIC_DEV_API;
  const prodAPI = process.env.NEXT_PUBLIC_PROD_API;

  const [toastProps, setToastProps] = useState({
    content: "",
    isHidden: true,
  });

  const createNewEvent = async () => {
    setFormData((prev) => {
      return {
        ...prev,
        isFetching: true,
      };
    });

    axios
      .post(`${devAPI}/user/${formData.id}/create/event`, {
        username: formData.username,
        name: formData.name,
        sender: formData.sender,
        email: formData.email,
        location: formData.location,
        service: formData.service,
        dateTime: formData.dateTime,
      })
      .then(async function (response) {
        console.log(response);
        const data: string = response.data.message;
        await showSucessNotification(data);
        setFormData((prev) => {
          return {
            ...prev,
            isFetching: false,
          };
        });
        setTimeout(() => {
          router.reload();
        }, 3000);
      })
      .catch(async function (error) {
        console.error(error);
        await showWarningNotification(error);
        setFormData((prev) => {
          return {
            ...prev,
            isFetching: false,
          };
        });
      });
  };

  return (
    <>
      <Head>
        <title>Create Event</title>
        <meta
          name="description"
          content="Create an event for your organization"
        />
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
      <div className={evt.container}>
        <Header styles={styles} setIsGrabMenu={setIsGrabMenu} />

        <div className={evt.header}>
          <p className={evt.title}>Create New Event</p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <EventWrapper
            evt={evt}
            setFormData={setFormData}
            formData={formData}
            createNewEvent={createNewEvent}
          />
        </Suspense>
        <ToastNotification evt={evt} toastProps={toastProps} />
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
