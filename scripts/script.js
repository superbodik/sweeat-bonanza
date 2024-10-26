document.addEventListener("DOMContentLoaded", function () {
    const ageConfirmModal = document.getElementById('age-confirm-modal');
    const confirmYes = document.getElementById('confirm-yes');
    const confirmNo = document.getElementById('confirm-no');

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

    const links = document.querySelectorAll("header nav a");
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    function toggleMenu() {
        const nav = document.querySelector('#nav-menu');
        if (nav) {
            nav.classList.toggle('visible');
            nav.classList.toggle('hidden');
        }
    }

    const menuToggle = document.querySelector('#menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    document.querySelector('.menu-toggle').addEventListener('click', () => {
        document.querySelector('nav').classList.toggle('active');
    });

});
