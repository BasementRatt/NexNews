document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    const startBtn = document.getElementById('start-btn');
    const mainHeader = document.getElementById('main-header');
    const mainContent = document.querySelector('.main-content');
    const loginForm = document.getElementById('login-form');
    const overlay = document.getElementById('overlay');

    // Проверяем, находимся ли мы на главной странице
    const isHomePage = document.body.classList.contains('home-page');

    if (isHomePage) {
        // Если это главная страница
        if (startBtn && mainHeader && mainContent && loginForm && overlay) {
            // При нажатии на кнопку "НАЧАТЬ"
            startBtn.addEventListener('click', function() {
                // Добавляем класс для анимации растворения
                mainHeader.classList.add('fade-out');
                startBtn.classList.add('fade-out');
                overlay.classList.add('fade-out');

                // Показываем форму входа после анимации
                setTimeout(() => {
                    mainHeader.style.display = 'none';
                    startBtn.style.display = 'none';
                    overlay.style.display = 'none';
                    mainContent.style.display = 'block';
                    mainContent.style.opacity = '1';
                    loginForm.style.display = 'block';
                    loginForm.style.opacity = '1';
                }, 500); // Время анимации
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
        this.form.setAttribute("data-auth", "true");

        // Рассчитываем высоту содержимого и применяем ее к форме
        const contentHeight = this.authFormContent.scrollHeight;
        this.form.style.height = `${contentHeight + 40}px`; // Добавляем отступы
    }

    showLoginForm() {
        this.authFormContent.style.display = "none";
        this.loginFormContent.style.display = "block";
        this.loginFormStartBtn.textContent = "Вход";
        this.form.setAttribute("data-auth", "false");

        // Рассчитываем высоту содержимого и применяем ее к форме
        const contentHeight = this.loginFormContent.scrollHeight;
        this.form.style.height = `${contentHeight + 40}px`; // Добавляем отступы
    }

    handleAuthSubmit(e) {
        e.preventDefault();
        const email = this.form?.querySelector("#auth-email").value;
        const login = this.form?.querySelector("#auth-login").value;
        const password = this.form?.querySelector("#auth-password").value;
        const confirmPassword = this.form?.querySelector("#auth-confirm-password").value;

        if (password !== confirmPassword) {
            alert("Пароли не совпадают!");
            return;
        }

        alert(`Авторизация успешна!\nПочта: ${email}\nЛогин: ${login}\nПароль: ${password}`);
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