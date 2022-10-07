const videoContainer = document.querySelector("#videoContainer"); // data-id 퍼오려고 소환
const form = document.querySelector("#commentForm");

const addComment = (text, commentId) => {
  // 실시간으로 보이기: pug에서 가져오지 말고, JS에서 새 element를 만들어 붙이자!
  // 복잡하지 않다! 단지 HTML 구조를 베끼는 것 뿐
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.className = "video__comment";
  newComment.dataset.id = commentId;
  const icon = document.createElement("i");
  icon.className = "fas fa-comment";
  const span = document.createElement("span");
  span.innerText = `${text}`;
  const span2 = document.createElement("span");
  span2.innerText = "❌";

  newComment.appendChild(icon);
  newComment.appendChild(span);
  newComment.appendChild(span2);

  videoComments.appendChild(newComment);
};
const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value; // 댓글 내용
  const { id: videoId } = videoContainer.dataset; // data-id에 접근하는 방법
  if (text === "" || text.trim() === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" }, // middleware는 현재 우리가 보내는게 text라 생각함 => json이라고 말해줘야함
    body: JSON.stringify({ text }), // data를 여러 개 보내는 경우에 JSON으로 변환해야함
  });
  textarea.value = "";
  const { status } = response;
  if (status === 201) {
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}
