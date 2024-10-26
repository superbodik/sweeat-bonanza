// Убедитесь, что код выполнится только после загрузки DOM
document.addEventListener("DOMContentLoaded", function () {
    const ageConfirmModal = document.getElementById('age-confirm-modal');
    const confirmYes = document.getElementById('confirm-yes');
    const confirmNo = document.getElementById('confirm-no');

    // Проверка возраста
    if (localStorage.getItem('isAdult') === 'true') {
        ageConfirmModal.style.display = 'none';
    } else {
        ageConfirmModal.style.display = 'flex';
    }

    if (confirmYes) {
        confirmYes.addEventListener('click', function () {
            localStorage.setItem('isAdult', 'true');
            ageConfirmModal.style.display = 'none';
        });
    }

    if (confirmNo) {
        confirmNo.addEventListener('click', function () {
            alert('Вы не можете продолжить, если вам нет 18 лет.');
            ageConfirmModal.style.display = 'none';
        });
    }

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

    // Функция для переключения мобильного меню
    function toggleMenu() {
        const nav = document.querySelector('nav');
        if (nav) {
            nav.classList.toggle('show'); // Переключаем класс для открытия/закрытия меню
        }
    }

    // Добавляем обработчик события для переключения меню
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Логика смены локализации
    const localizationButton = document.querySelector('.localization-button');
    if (localizationButton) {
        localizationButton.addEventListener('click', () => {
            // Здесь можно реализовать логику смены языка
            console.log('Localization button clicked');
        });
    }
});
