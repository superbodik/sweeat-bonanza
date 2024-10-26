document.addEventListener("DOMContentLoaded", function () {
    const ageConfirmModal = document.getElementById('age-confirm-modal');
    const confirmYes = document.getElementById('confirm-yes');
    const confirmNo = document.getElementById('confirm-no');

    // Проверяем, есть ли в localStorage информация о возрасте
    if (localStorage.getItem('isAdult') === 'true') {
        ageConfirmModal.style.display = 'none';
    } else {
        ageConfirmModal.style.display = 'flex';
    }

    // Обработчик для кнопки "Да"
    confirmYes.addEventListener('click', function () {
        localStorage.setItem('isAdult', 'true');
        ageConfirmModal.style.display = 'none';
    });

    // Обработчик для кнопки "Нет"
    confirmNo.addEventListener('click', function () {
        alert('Вы не можете продолжить, если вам нет 18 лет.');
        ageConfirmModal.style.display = 'none';
    });

    // Логика навигации по ссылкам в шапке
    const links = document.querySelectorAll("header nav a");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Логика открытия и закрытия мобильного меню
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('show'); // Переключаем класс для открытия/закрытия меню
    });

    // Логика смены локализации
    const localizationButton = document.querySelector('.localization-button');
    localizationButton.addEventListener('click', () => {
        // Здесь можно реализовать логику смены языка
        // Например, менять текст на странице в зависимости от выбранного языка
        console.log('Localization button clicked');
    });
});
