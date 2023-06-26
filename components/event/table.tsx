import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import axios from "axios";
import { Fragment } from "react";
import LoaderIO from "../animation/loader";

export default function EventTable(props: any) {
  const { isLoaded, isSignedIn, user } = useUser();
  const [poData, SetpoData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const devAPI = process.env.NEXT_PUBLIC_DEV_API;

  const getUserID = async () => {
    if (isLoaded || isSignedIn) {
      await fetchEvents(user?.id);
    }
  };

  async function fetchEvents(userid: string | undefined) {
    setIsFetching(true);
    axios
      .get(`${devAPI}/query/${userid}/events`)
      .then(function (response) {
        SetpoData(response.data);
        setIsFetching(false);
      })
      .catch(function (error) {
        console.error(error);
        setIsFetching(false);
      });
  }

  useEffect(() => {
    setCounter((prev) => prev + 1);
    (async () => {
      counter === 1 ? await getUserID() : null;
    })();

    return () => {
      setCounter(0);
    };
  }, [counter, isLoaded, isSignedIn]);

  interface Items {
    username: string;
    name: string;
    location: string;
    service: string;
    dateTime: string;
  }

  return (
    <div className={props.styles.table_container}>
      <div className={props.styles.table_wrapper}>
        <div className={props.styles.table_column}>
          <div className={props.styles.columns}>
            <span>username</span>
          </div>
          <div className={props.styles.columns}>
            <span>name</span>
          </div>
          <div className={props.styles.columns}>
            <span>location</span>
          </div>
          <div className={props.styles.columns}>
            <span>service</span>
          </div>
          <div className={props.styles.columns}>
            <span>dateTime</span>
          </div>
        </div>
        <>
          {isFetching ? (
            <LoaderIO />
          ) : (
            <>
              {poData.map((item: Items, index) => {
                return (
                  <Fragment key={index}>
                    <div className={props.styles.table_rows}>
                      <div className={props.styles.rows}>
                        <span>{item.username}</span>
                      </div>
                      <div className={props.styles.rows}>
                        <span>{item.name}</span>
                      </div>
                      <div className={props.styles.rows}>
                        <span>{item.location}</span>
                      </div>
                      <div className={props.styles.rows}>
                        <span>{item.service}</span>
                      </div>
                      <div className={props.styles.rows}>
                        <span>{item.dateTime}</span>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </>
          )}
        </>
      </div>
    </div>
  );
}
