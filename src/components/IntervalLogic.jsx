import { useState, useEffect } from "react";
import { getLocalStorage, updateLocalStorage } from "../utils/utilities";
export default function ({
  cookies,
  setCookies,
  cookiesPerSecond,
  setCookiesPerSecond,
}) {
  useEffect(() => {
    const cookiePerSecondInterval = setInterval(() => {
      console.log(`start of timer, cookies are ${cookies}`);
      console.log({ cookies });
      setCookies((currentCookies) => currentCookies + cookiesPerSecond);

      console.log(`end of timer, cookies are ${cookies}`);
      let storedStats = {
        cookies: { cookies }.cookies,
        cookiesPerSecond: { cookiesPerSecond }.cookiesPerSecond,
      };

      updateLocalStorage("stats", storedStats);
    }, 1000);

    return () => {
      clearInterval(cookiePerSecondInterval);
    };
  }, [cookies, cookiesPerSecond]);

  return <></>;
}
