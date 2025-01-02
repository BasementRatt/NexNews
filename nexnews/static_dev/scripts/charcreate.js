// Переключение между вкладками
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        // Убираем активный класс у всех кнопок
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        // Скрываем все вкладки
        document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');
        // Активируем выбранную кнопку и показываем соответствующую вкладку
        button.classList.add('active');
        document.getElementById(button.dataset.tab).style.display = 'block';
    });
});

// Обновление изображений персонажа
document.querySelectorAll('.option-item').forEach(item => {
    item.addEventListener('click', () => {
        const part = item.dataset.part; // Часть персонажа (hair, eyes, mouth, body, legs, shoes)
        const value = item.dataset.value; // Новое изображение
        document.getElementById(`${part}-symbol`).src = `{% static 'images/' %}${value}`; // Обновляем изображение
    });
});

// Кнопка "Случайно"
document.getElementById('randomize-button').addEventListener('click', () => {
    const parts = ['hair', 'eyes', 'mouth', 'body', 'legs', 'shoes'];
    const options = {
        hair: ['hair1.png', 'hair2.png', 'hair3.png', 'hair4.png'],
        eyes: ['eyes1.png', 'eyes2.png', 'eyes3.png', 'eyes4.png'],
        mouth: ['mouth1.png', 'mouth2.png', 'mouth3.png', 'mouth4.png'],
        body: ['body1.png', 'body2.png', 'body3.png', 'body4.png'],
        legs: ['legs1.png', 'legs2.png', 'legs3.png', 'legs4.png'],
        shoes: ['shoes1.png', 'shoes2.png', 'shoes3.png', 'shoes4.png']
    };

    parts.forEach(part => {
        const randomOption = options[part][Math.floor(Math.random() * options[part].length)];
        document.getElementById(`${part}-symbol`).src = `{% static 'images/' %}${randomOption}`;
    });
});

// Кнопка "Готово"
document.getElementById('done-button').addEventListener('click', () => {
    alert("Персонаж создан!");
});

// Функция для создания частиц
function createParticles() {
    const particlesContainer = document.querySelector('.particles-container');
    const particleCount = 50; // Количество частиц

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}vw`; // Случайная позиция по горизонтали
        particle.style.animationDelay = `${Math.random() * 3}s`; // Случайная задержка анимации
        particlesContainer.appendChild(particle);
    }
}

// Запуск создания частиц
createParticles();