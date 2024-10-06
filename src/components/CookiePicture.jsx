import ResetButton from "./ResetButton";
import cookieImage from "../../public/images/cookieImage.png";
import "./CookiePicture.css";

export default function CookiePicture({
  cookies,
  setCookies,
  cookiesPerSecond,
}) {
  function handleClick() {
    setCookies((currentCookies) => currentCookies + 10);
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
        <p>Cookie Count: {cookies}</p>
        <p>Cookies per Second: {cookiesPerSecond}</p>
        <ResetButton />
      </div>
    </>
  );
}
