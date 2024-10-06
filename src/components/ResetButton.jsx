import { reset } from "../utils/utilities";
import resetSound from "../../public/audio/resetSound.mp3";

export default function () {
  // const resetButtonSound = new Audio(resetSound);
  return (
    <>
      <button
        id="reset-button"
        onClick={() => {
          reset();
        }}
      >
        RESET
      </button>
    </>
  );
}
