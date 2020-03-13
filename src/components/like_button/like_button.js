import "./like_button.scss"



let button = document.querySelector('.like_button_content__button');

button.onclick = function () {
  button.classList.toggle('like_button_content__button-liked');

  if (button.classList.contains('like_button_content__button-liked')) {
    button.innerText++;
  } else {
    button.innerText--;
  }
}