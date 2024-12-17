// Прокрутка страницы
window.onscroll = function() {
    var header = document.getElementById('main-header');
    if (window.scrollY > 100) {
        header.style.opacity = 0; // Заголовок исчезает
    } else {
        header.style.opacity = 1; // Заголовок видим
    }
};
