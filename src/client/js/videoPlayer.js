const video = document.querySelector("video");
const playBtn = document.querySelector("#play");
const muteBtn = document.querySelector("#mute");
const time = document.querySelector("#time");
const volume = document.querySelector("#volume");

const handlePlayClick = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};
const handlePause = () => {
  playBtn.innerText = "Play";
};
const handlePlay = () => {
  playBtn.innerText = "Pause";
};
const handleMute = () => {};
playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMute);
video.addEventListener("play", handlePlay);
video.addEventListener("pause", handlePause);
