import { useState, useEffect } from "react";
import { getLocalStorage, updateLocalStorage } from "../utils/utilities";
export default function ({
  cookies,
  setCookies,
  cookiesPerSecond,
  setCookiesPerSecond,
  upgrades,
  setUpgrades,
}) {
  let storedStats;
  useEffect(() => {
    if (localStorage.getItem("stats") === null) {
      // If the item doesn't exist, store the variable
      storedStats = { cookies: 0, cookiesPerSecond: 1 };
      updateLocalStorage("stats", storedStats);
      console.log(`Stored ${storedStats} in local storage `);
      updateLocalStorage("upgrades", upgrades);
      console.log(`Stored ${upgrades} in local storage `);
    } else {
      console.log(`The key stats already exists in local storage.`);
      let currentStats = getLocalStorage("stats");
      let currentUpgrades = getLocalStorage("upgrades");
      console.log(currentStats);
      console.log(`They exist and are ${currentUpgrades[1]}`);
      setCookies(() => currentStats.cookies);
      setCookiesPerSecond(() => currentStats.cookiesPerSecond);
      setUpgrades(() => currentUpgrades);
      console.log({ upgrades }.upgrades);
    }
  }, []);

  return <></>;
}
