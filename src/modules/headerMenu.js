const headerMenu = () => {
   const popupDialogMenu = document.querySelector('.popup-dialog-menu');
   const popupRepairTypes = document.querySelector('.popup-repair-types');

  
    const toggleMenu = () => {
        popupDialogMenu.parentElement.classList.toggle('visible')
        popupDialogMenu.classList.toggle('popup-dialog-menu--active');
    }

    const openPopupRepairTypes = () => {
        popupRepairTypes.classList.add('visible');

    }

    const closePopupRepairTypes = () => {
        popupRepairTypes.classList.remove('visible');

    }


    document.addEventListener('click', e => {
        e.preventDefault();
        const target = e.target;
        // закрываем меню
        if (target.closest('.close-menu')) {
            toggleMenu();
        }
        // открываем меню
        if (target.closest('.menu__icon')) {
            toggleMenu();
        }
        // скролл до нужной позиции
        if (target.closest('.popup-menu-nav__item')){
            const scrollHeight = document.getElementById(target.href.split('#')[1]).offsetTop;
            toggleMenu();
            window.scrollTo({top: scrollHeight, behavior: 'smooth'});
        }
        // открытие модалки по клику виды ремонта
        if (target.parentElement.matches('.link-list-repair')){
            openPopupRepairTypes()
        }
        // открытие модалки по клику в меню
        if (target.parentElement.matches('.link-list-menu')) {
            toggleMenu();
            openPopupRepairTypes()
        }
        
    });
    // работа с модалкой popupRepairTypes
    popupRepairTypes.addEventListener('click', e => {
        e.preventDefault();
        const target = e.target;
        // закрытие модалки
        if (target.closest('.close')) {
            closePopupRepairTypes()
        }
    });












};

export default headerMenu;