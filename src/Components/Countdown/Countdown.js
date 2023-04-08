import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Countdown.css";

function Countdown() {
  const [countdown, setCountdown] = useState("");
  const [sunset, setSunset] = useState(new Date().getTime());

  useEffect(() => {
    axios
      .get(
        "https://api.sunrise-sunset.org/json?lat=33.888630&lng=35.495480&formatted=0"
      )
      .then((res) => {
        const data = res.data;
        console.log("data", data);
        console.log(data.results.sunset);
        setSunset(new Date(data.results.sunset).getTime());
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      console.log("sunset", sunset);
      console.log("now", now);
      const distance = sunset - now;

      console.log("distance", distance);
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      console.log("hours", hours);
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      console.log("minutes", minutes);
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      console.log("seconds", seconds);
      setCountdown(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(interval);
  }, [sunset]);

  return (
    <div className="">
      <h1 className="head">Remaining for Iftar :</h1>
      <p className="par">{countdown}</p>
    </div>
  );
}

export default Countdown;
