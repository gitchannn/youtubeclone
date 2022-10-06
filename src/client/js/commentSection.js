const videoContainer = document.querySelector("#videoContainer"); // data-id 퍼오려고 소환
const form = document.querySelector("#commentForm");

const handleSubmit = (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value; // 댓글 내용
  const { id: videoId } = videoContainer.dataset; // data-id에 접근하는 방법
  fetch(`/api/videos/${videoId}/comment`, { method: "POST", body: { text } }); // req.body와 같은거,,
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}
