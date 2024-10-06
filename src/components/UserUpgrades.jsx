import autoclicker from "../../public/images/autoclicker.png";
import enhancedOven from "../../public/images/enhancedOven.jpg";
import cookieFarm from "../../public/images/cookieFarm.jpg";
import robotBaker from "../../public/images/robotBaker.jpg";
import cookieFactory from "../../public/images/cookieFactory.jpg";
import magicFlour from "../../public/images/magicFlour.jpg";
import timeMachine from "../../public/images/timeMachine.jpg";
import quantumOven from "../../public/images/quantumOven.jpg";
import alienTechnology from "../../public/images/alienTechnology.jpg";
import interdimensionalBaker from "../../public/images/interdimensionalBaker.jpg";
import "./UserUpgrades.css";

export default function UserUpgrades({
  cookies,
  setCookies,
  cookiesPerSecond,
  setCookiesPerSecond,
  upgrades,
  setUpgrades,
  items,
  setItems,
}) {
  const imageIndex = [
    autoclicker,
    enhancedOven,
    cookieFarm,
    robotBaker,
    cookieFactory,
    magicFlour,
    timeMachine,
    quantumOven,
    alienTechnology,
    interdimensionalBaker,
  ];
  return (
    <>
      {items.map((item, index) => (
        <div key={item.id} className="userUpgradeContainer">
          {upgrades[index] > 0 ? (
            <>
              <div className="inventoryContainer">
                <p>Inventory: {upgrades[index]}</p>
              </div>

              <img src={imageIndex[index]} className="upgradeThumbnail" />
              <div className="nameContainer">
                <p>upgrade name: {item.name}</p>
              </div>
              <div className="increaseContainer">
                <p>&#10506;C {item.increase}</p>
              </div>
            </>
          ) : null}
        </div>
      ))}
    </>
  );
}
