/*Задание 2.

Сверстайте кнопку, клик на которую будет выводить
данные о размерах экрана с помощью alert. */

const initBtn = document.querySelector('.j-btn-test');

initBtn.addEventListener("click", () => {
    widthValue = window.screen.width;
    heightValue = window.screen.height;

    alert(`Ширина экрана: ${widthValue}, высота экрана: ${heightValue}`);
});