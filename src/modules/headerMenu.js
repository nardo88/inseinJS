const headerMenu = () => {
   const menuIcon = document.querySelector('.menu__icon');
   const popupDialogMenu = document.querySelector('.popup-dialog-menu');

    // класс для меню popup-dialog-menu--active
    const toggleMenu = () => {
        popupDialogMenu.classList.toggle('popup-dialog-menu--active');
    }

    menuIcon.addEventListener('click', toggleMenu);

    popupDialogMenu.addEventListener('click', e => {
        const target = e.target;

        if (target.closest('.close-menu')) {
            toggleMenu();
        }
    });












};

export default headerMenu;