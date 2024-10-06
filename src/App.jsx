import "./App.css";
import Header from "./components/Heasder";
import InitialSetup from "./components/InitialSetup";
import IntervalLogic from "./components/IntervalLogic";
import CookiePicture from "./components/CookiePicture";
import RenderUpgrades from "./components/RenderUpgrades";
import UserUpgrades from "./components/UserUpgrades";
import Footer from "./components/Footer";
import { formatNumber } from "./utils/utilities";
import { useEffect, useState } from "react";

export default function App() {
  const [cookies, setCookies] = useState(0);
  const [cookiesPerSecond, setCookiesPerSecond] = useState(1);
  const [items, setItems] = useState([]);

  const zerosArray = new Array(10).fill(0);
  const [upgrades, setUpgrades] = useState(zerosArray);
  const [isPlaying, setIsPlaying] = useState(true);
  // =================================================================
  // dynamically update title bar

  useEffect(() => {
    document.title = `Cookie Clicker: ${formatNumber(cookies)} cookies eaten`;
  }, [{ cookies }]);

  return (
    <main id="main-container">
      <Header isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <InitialSetup
        cookies={cookies}
        setCookies={setCookies}
        cookiesPerSecond={cookiesPerSecond}
        setCookiesPerSecond={setCookiesPerSecond}
        upgrades={upgrades}
        setUpgrades={setUpgrades}
      />
      <IntervalLogic
        cookies={cookies}
        setCookies={setCookies}
        cookiesPerSecond={cookiesPerSecond}
        setCookiesPerSecond={setCookiesPerSecond}
      />
      <section id="main-user-upgrades-container">
        <UserUpgrades
          cookies={cookies}
          setCookies={setCookies}
          cookiesPerSecond={cookiesPerSecond}
          setCookiesPerSecond={setCookiesPerSecond}
          upgrades={upgrades}
          setUpgrades={setUpgrades}
          items={items}
          setItems={setItems}
        />
      </section>
      <section id="main-image-container">
        <CookiePicture
          cookies={cookies}
          setCookies={setCookies}
          cookiesPerSecond={cookiesPerSecond}
        />
      </section>
      <section id="main-render-upgrades-container">
        <RenderUpgrades
          cookies={cookies}
          setCookies={setCookies}
          cookiesPerSecond={cookiesPerSecond}
          setCookiesPerSecond={setCookiesPerSecond}
          upgrades={upgrades}
          setUpgrades={setUpgrades}
          items={items}
          setItems={setItems}
        />
      </section>

      <Footer />
    </main>
  );
}
