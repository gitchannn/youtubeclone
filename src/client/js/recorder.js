const startBtn = document.querySelector("#startBtn");
const video = document.querySelector("#preview");

let stream;

const handleStart = () => {
  startBtn.innerText = "Stop Recording";

  startBtn.removeEventListener("click", handleStart);
  startBtn.addEventListener("click", handleStop);
  const recorder = new MediaRecorder(stream);
  recorder.ondataavailable = (event) => {
    console.log("recording done");
    console.log("EVENT:", event);
    console.log("EVENT DATA:", event.data);
  };
  console.log("RECORDER BEFORE:", recorder);
  recorder.start();
  console.log("RECORDER AFTER:", recorder);
  setTimeout(() => {
    recorder.stop();
  }, 5000);
};
const handleStop = () => {
  startBtn.innerText = "Start Recording";
  startBtn.removeEventListener("click", handleStop);
  startBtn.addEventListener("click", handleStart);
};
const init = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true,
  });
  video.srcObject = stream;
  video.play();
};

init();

startBtn.addEventListener("click", handleStart);
