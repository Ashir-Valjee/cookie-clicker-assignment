// import backgroundMusic from "../../public/audio/backgroundMusic.mp3";
import { useEffect } from "react";

export default function Header({ isPlaying, setIsPlaying }) {
  // ====================================================
  // tried implementing an on/off functionality for the background music
  // i wasnt sure how to implement useeffect here. ANd without it i get duplicate sound objects

  // implementing background music on loop
  // const backgroundMusicSound = new Audio(backgroundMusic);
  // backgroundMusicSound.loop = true;
  // backgroundMusicSound.volume = 0.35;

  // function playMusic() {
  //   backgroundMusicSound.play();
  // }
  // function pauseMusic() {
  //   backgroundMusicSound.en;
  // }

  // useEffect(() => {
  //   if (isPlaying) {
  //     pauseMusic();
  //     setIsPlaying(!isPlaying);
  //   } else {
  //     playMusic();
  //     setIsPlaying(!isPlaying);
  //   }
  // }, [isPlaying]);
  // // setIsPlaying(!isPlaying);

  return (
    <header>
      <h1>Cookie Clicker Game</h1>
    </header>
  );
}
