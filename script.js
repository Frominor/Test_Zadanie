let button = document.querySelector(".open");

let body = document.querySelector("body");
let modal = document.querySelector(".ModalWindow");

let close = document.querySelector(
  ".ModalWindow_Content_TitleAndClosePart_closebtn"
);
button.onclick = OpenModal;
function OpenModal() {
  modal.classList.add("active");
  modal.classList.remove("notactive");
  let paddingOffset = window.innerWidth - document.body.offsetWidth + "px";
  document.body.style.paddingRight = paddingOffset;
  body.style.overflow = "hidden";
}
function CloseModal() {
  modal.classList.remove("active");
  modal.classList.add("notactive");
  document.body.style.paddingRight = "0px";
  body.style.overflowY = "auto";
}
close.onclick = CloseModal;
modal.onclick = CloseModal;
function HoverOn() {
  const circle = document.querySelector(".Block2_TimeToWash_white_circle");

  circle.classList.remove("nothovered");

  circle.classList.add("hovered");
}
function HoverOff() {
  const circle = document.querySelector(".Block2_TimeToWash_white_circle");

  circle.classList.remove("hovered");
  circle.classList.add("nothovered");
}
