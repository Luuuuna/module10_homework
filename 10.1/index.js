// Задание 1.

// Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео). 
// При клике на кнопку иконка должна меняться на icon_02.
//  Повторный клик меняет иконку обратно.


//ищем кнопку
const initBtn = document.querySelector(".btn");

//добавляем обработчик для кнопки
initBtn.addEventListener('click', function () {
    //ищем иконки
    const iconWhite = document.querySelector(".icon_white");
    const iconBlack = document.querySelector(".icon_black");
    //если черная иконка скрыта, тогда ее делаем активной, белую скрываем.
    //если черная иконка активна, то скрываем, активируем белую.
    if (iconBlack.classList.contains("not_active")) {
        iconBlack.classList.remove("not_active");
        iconWhite.classList.add("not_active");
    } else {
        iconBlack.classList.add("not_active");
        iconWhite.classList.remove("not_active");

    }
});
