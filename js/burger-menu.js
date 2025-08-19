const burgerMenu = document.getElementById("burger-menu");
const burgerIcon = document.getElementById("burger-icon");
// Получаем все ссылки в бургер меню, исключая ссылки из выпадающего меню
const burgerLinks = document.querySelectorAll('.burger-menu a:not(.burger-dropdown-link)');

const toggleMenu = () => {
  const show = !burgerMenu.classList.contains('show');
  burgerMenu.classList.toggle('show', show);
  burgerIcon.classList.toggle('active', show);
  document.body.classList.toggle('no-scroll', show);
};

burgerIcon.addEventListener('click', toggleMenu);

// Закрываем бургер меню при клике на обычные ссылки
burgerLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
});

// Закрываем бургер меню при клике на ссылки в выпадающем меню
const dropdownLinks = document.querySelectorAll('.burger-dropdown-link');
dropdownLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
});

// Close burger menu on window resize (desktop/mobile switch)
window.addEventListener('resize', () => {
    if (window.innerWidth > 1124) {
        if (burgerMenu.classList.contains('show')) {
            burgerMenu.classList.remove('show');
            burgerIcon.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    }
});
