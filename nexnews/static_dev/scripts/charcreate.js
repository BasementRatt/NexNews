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

// Обновление символов персонажа
document.querySelectorAll('.option-button').forEach(button => {
    button.addEventListener('click', () => {
        const part = button.dataset.part; // Часть персонажа (hair, head, eyes, mouth, body, legs, shoes)
        const value = button.dataset.value; // Новый символ
        document.getElementById(`${part}-symbol`).textContent = value; // Обновляем символ
    });
});

// Кнопка "Случайно"
document.getElementById('randomize-button').addEventListener('click', () => {
    const parts = ['hair', 'head', 'eyes', 'mouth', 'body', 'legs', 'shoes'];
    const symbols = {
        hair: ['◉', '⚫'],
        head: ['◉', '⚫'],
        eyes: ['◐', '◑'],
        mouth: ['◡', '◠'],
        body: ['▲', '△'],
        legs: ['■', '□'],
        shoes: ['▼', '▽']
    };

    parts.forEach(part => {
        const randomSymbol = symbols[part][Math.floor(Math.random() * symbols[part].length)];
        document.getElementById(`${part}-symbol`).textContent = randomSymbol;
    });
});