import { useState, useEffect } from "react";
import { getLocalStorage, updateLocalStorage } from "../utils/utilities";

import "./RenderUpgrades.css";

export default function RenderUpgrades({
  cookies,
  setCookies,
  cookiesPerSecond,
  setCookiesPerSecond,
  upgrades,
  setUpgrades,
  items,
  setItems,
}) {
  const upgradesURL = "https://cookie-upgrade-api.vercel.app/api/upgrades";
  // const [items, setItems] = useState([]);
  // const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(upgradesURL);
      const data = await response.json();
      setItems(data);
      console.log(data);
    }
    fetchData();
  }, []);

  function handleUpgrades(cost, increase, index) {
    setCookies((currentCookies) => currentCookies - cost);
    setCookiesPerSecond(
      (currentCookiesPerSecond) => currentCookiesPerSecond + increase
    );
    let newUpgrades = upgrades;
    newUpgrades[index] = newUpgrades[index] + 1;
    setUpgrades(() => newUpgrades);
    updateLocalStorage("upgrades", newUpgrades);
  }

  return (
    <>
      {items.map((item, index) => (
        <div key={item.id} className="upgradeContainer">
          {cookies > item.cost ? (
            <>
              <div className="nameContainer">
                <p>upgrade name: {item.name}</p>
              </div>
              <div className="costContainer">
                <p>&#36;C {item.cost}</p>
              </div>
              <div className="increaseContainer">
                <p>&#10506;C {item.increase}</p>
              </div>
              <div>
                <button
                  onClick={() =>
                    handleUpgrades(item.cost, item.increase, index)
                  }
                >
                  upgrade
                </button>
              </div>
            </>
          ) : null}
        </div>
      ))}
    </>
  );
}
