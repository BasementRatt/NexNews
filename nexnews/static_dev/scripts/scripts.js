document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    const helpBtn = document.getElementById('help-btn');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');
    const startBtn = document.getElementById('start-btn');
    const mainHeader = document.getElementById('main-header');
    const footer = document.getElementById('site-footer');
    const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('closeBtn');

    // Проверяем, находимся ли мы на главной странице
    const isHomePage = document.body.classList.contains('home-page');

    if (isHomePage) {
        // Если это главная страница
        if (startBtn && mainHeader && footer && toggleBtn) {
            // Скрываем элементы по умолчанию
            mainHeader.style.opacity = '1';
            startBtn.style.opacity = '1';
            footer.style.display = 'none';
            toggleBtn.style.display = 'none';

            // При нажатии на кнопку "НАЧАТЬ"
            startBtn.addEventListener('click', function() {
                // Анимация для скрытия заголовка и кнопки
                mainHeader.style.transform = 'translate(-50%, -200%)'; // Поднимаем вверх
                mainHeader.style.opacity = '0';
                startBtn.style.opacity = '0';

                // Плавный переход на статьи
                setTimeout(function() {
                    toggleBtn.style.display = 'block'; // Показываем кнопку сайдбара
                    footer.style.display = 'block'; // Показываем футер
                    document.querySelector('.main-content').style.display = 'block'; // Показываем контент
                    document.querySelector('.main-content').style.opacity = '1'; // Плавно показываем контент
                    document.body.style.background = '#fff'; // Меняем фон на белый
                }, 500); // Задержка, чтобы анимация была плавной
            });
        }
    } else {
        // Если это не главная страница, показываем элементы навигации по умолчанию
        if (footer) footer.style.display = 'block';
        if (toggleBtn) toggleBtn.style.display = 'block';
    }

    // Проверяем, существуют ли элементы для сайдбара
    if (toggleBtn && sidebar && closeBtn) {
        // sidebar
        toggleBtn.addEventListener('click', function() {
            sidebar.classList.toggle('open');
            document.querySelector('.content').classList.toggle('shift');
        });

        closeBtn.addEventListener('click', function() {
            sidebar.classList.remove('open');
            document.querySelector('.content').classList.remove('shift');
        });
    }

    // Проверяем, существуют ли элементы для модального окна
    if (helpBtn && modal && closeModal) {
        // Показать модальное окно
        helpBtn.addEventListener('click', () => {
            modal.style.display = 'flex'; // Показать модальное окно
        });

        // Закрыть модальное окно
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
});