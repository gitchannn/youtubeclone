const videoContainer = document.querySelector("#videoContainer");
const form = document.querySelector("#commentForm");

const handleSubmit = (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const { id: video } = videoContainer.dataset;
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}
