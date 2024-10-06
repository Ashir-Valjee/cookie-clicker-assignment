import ResetButton from "./ResetButton";

import cookieImage from "../../public/images/cookieImage.png";
import cookieClick from "../../public/audio/cookieClick.mp3";
import "./CookiePicture.css";
import { formatNumber } from "../utils/utilities";

export default function CookiePicture({
  cookies,
  setCookies,
  cookiesPerSecond,
}) {
  const cookieClickSound = new Audio(cookieClick);
  function handleClick() {
    setCookies((currentCookies) => currentCookies + 10);
    cookieClickSound.play();
  }

  return (
    <>
      <img
        onClick={() => handleClick()}
        src={cookieImage}
        id="cookie-image"
        className="rotate"
      />
      <div className="counterContainer">
        <p>Cookie Count: {formatNumber(cookies)}</p>
        <p>Cookies per Second: {formatNumber(cookiesPerSecond)}</p>
        <ResetButton />
      </div>
    </>
  );
}
