document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    const startBtn = document.getElementById('start-btn');
    const mainHeader = document.getElementById('main-header');
    const mainContent = document.querySelector('.main-content');
    const loginForm = document.getElementById('login-form');
    const authBtn = document.getElementById('auth-btn');
    const backBtn = document.getElementById('back-btn');
    const loginFormContent = document.querySelector('.login-form__content');
    const authFormContent = document.querySelector('.login-form__auth-content');
    const loginFormStartBtn = document.querySelector('.login-form__btn--start');
    const authSubmitBtn = document.querySelector('.login-form__btn--auth');

    // Проверяем, находимся ли мы на главной странице
    const isHomePage = document.body.classList.contains('home-page');

    if (isHomePage) {
        // Если это главная страница
        if (startBtn && mainHeader && mainContent && loginForm) {
            // Скрываем элементы по умолчанию
            mainHeader.style.opacity = '1';
            startBtn.style.opacity = '1';
            mainContent.style.display = 'none'; // Скрываем основной контент

            // При нажатии на кнопку "НАЧАТЬ"
            startBtn.addEventListener('click', function() {
                // Добавляем класс для анимации
                mainHeader.classList.add('slide-up-fade-out');
                startBtn.classList.add('slide-up-fade-out');

                // Скрываем заголовок и кнопку "НАЧАТЬ" после анимации
                setTimeout(() => {
                    mainHeader.style.display = 'none';
                    startBtn.style.display = 'none';
                }, 500); // Время анимации

                // Показываем форму входа
                mainContent.style.display = 'block';
                mainContent.style.opacity = '1';
                loginForm.style.display = 'block';
                loginForm.style.opacity = '1';
            });
        }
    }

    // Инициализация формы входа
    const loginFormInstance = new LoginForm("#login-form");
});

// Класс для управления формой входа
class LoginForm {
    constructor(el) {
        this.form = document.querySelector(el);
        this.form?.addEventListener("click", this.toggle.bind(this));
        this.authBtn = this.form?.querySelector("#auth-btn");
        this.backBtn = this.form?.querySelector("#back-btn");
        this.loginFormContent = this.form?.querySelector(".login-form__content");
        this.authFormContent = this.form?.querySelector(".login-form__auth-content");
        this.loginFormStartBtn = this.form?.querySelector(".login-form__btn--start");
        this.authSubmitBtn = this.form?.querySelector(".login-form__btn--auth");

        this.authBtn?.addEventListener("click", this.showAuthForm.bind(this));
        this.backBtn?.addEventListener("click", this.showLoginForm.bind(this));
        this.authSubmitBtn?.addEventListener("click", this.handleAuthSubmit.bind(this));
    }

    toggle(e) {
        const button = e.target;
        if (button.hasAttribute("data-toggle")) {
            this.expanded = !this.expanded;

            if (this.expanded) {
                const loginInput = this.form?.querySelector("#login");
                loginInput?.focus();
            }
        }
    }

    showAuthForm() {
        this.loginFormContent.style.display = "none";
        this.authFormContent.style.display = "block";
        this.loginFormStartBtn.textContent = "Авторизация";
        this.form.setAttribute("data-auth", "true"); // Устанавливаем атрибут для анимации
    }

    showLoginForm() {
        this.authFormContent.style.display = "none";
        this.loginFormContent.style.display = "block";
        this.loginFormStartBtn.textContent = "Вход";
        this.form.setAttribute("data-auth", "false"); // Убираем атрибут для анимации
    }

    handleAuthSubmit(e) {
        e.preventDefault();
        const login = this.form?.querySelector("#auth-login").value;
        const password = this.form?.querySelector("#auth-password").value;
        const confirmPassword = this.form?.querySelector("#auth-confirm-password").value;

        if (password !== confirmPassword) {
            alert("Пароли не совпадают!");
            return;
        }

        alert(`Авторизация успешна!\nЛогин: ${login}\nПароль: ${password}`);
        this.form.reset();
        this.showLoginForm();
    }

    set expanded(value) {
        this.form?.setAttribute("data-expanded", value.toString());
    }

    get expanded() {
        return this.form?.getAttribute("data-expanded") === "true";
    }
}