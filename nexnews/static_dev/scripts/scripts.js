document.addEventListener('DOMContentLoaded', function() {
    // При нажатии на кнопку "НАЧАТЬ"
    document.getElementById('start-btn').addEventListener('click', function() {
        // Анимация для скрытия заголовка и кнопки
        document.getElementById('main-header').style.transform = 'translate(-50%, -200%)'; // Поднимаем вверх
        document.getElementById('main-header').style.opacity = '0';
        document.getElementById('start-btn').style.opacity = '0';

    // Плавный переход на статьи
    setTimeout(function() {
        document.querySelector('.main-content').style.display = 'block'; // Показываем контент
        document.querySelector('.main-content').style.opacity = '1'; // Плавно показываем контент
        document.body.style.background = '#fff'; // Меняем фон на белый
    }, 1000); // Задержка, чтобы анимация была плавной
});


    //sidebar
    document.getElementById('toggleBtn').addEventListener('click', function() {
        document.getElementById('sidebar').classList.toggle('open');
        document.querySelector('.content').classList.toggle('shift');
    });

    document.getElementById('closeBtn').addEventListener('click', function() {
        document.getElementById('sidebar').classList.remove('open');
        document.querySelector('.content').classList.remove('shift');
    });

    // Показать модальное окно
    const helpBtn = document.getElementById('help-btn');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');

    helpBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; // Показать модальное окно
    });

    // Закрыть модальное окно
    closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    });
});