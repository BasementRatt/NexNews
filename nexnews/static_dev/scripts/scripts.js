document.addEventListener('DOMContentLoaded', function() {
    const helpBtn = document.getElementById('help-btn');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');
    const startBtn = document.getElementById('start-btn');
    const main_header = document.getElementById('main-header');
    const footer = document.getElementById('site-footer');
    const toggleBtn = document.getElementById('toggleBtn')
    // При нажатии на кнопку "НАЧАТЬ"
    startBtn.addEventListener('click', function() {
        // Анимация для скрытия заголовка и кнопки
        main_header.style.transform = 'translate(-50%, -200%)'; // Поднимаем вверх
        main_header.style.opacity = '0';
        startBtn.style.opacity = '0';
        
        // Плавный переход на статьи
        setTimeout(function() {
            toggleBtn.style.display = 'block';
            footer.style.display = 'block';
            document.querySelector('.main-content').style.display = 'block'; // Показываем контент
            document.querySelector('.main-content').style.opacity = '1'; // Плавно показываем контент
            document.body.style.background = '#fff'; // Меняем фон на белый
        }, 500); // Задержка, чтобы анимация была плавной
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
    helpBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; // Показать модальное окно
    });

    // Закрыть модальное окно
    closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    });
});