const videoContainer = document.querySelector("#videoContainer"); // data-id 퍼오려고 소환
const form = document.querySelector("#commentForm");

const handleSubmit = (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value; // 댓글 내용
  const { id: videoId } = videoContainer.dataset; // data-id에 접근하는 방법
  if (text === "" || text.trim() === "") {
    return;
  }
  fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" }, // middleware는 현재 우리가 보내는게 text라 생각함 => json이라고 말해줘야함
    body: JSON.stringify({ text, rating: "5" }), // data를 여러 개 보내는 경우에 JSON으로 변환해야함
  });
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}
