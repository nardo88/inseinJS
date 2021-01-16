const headerMenu = () => {
   const popupDialogMenu = document.querySelector('.popup-dialog-menu');
   const popupRepairTypes = document.querySelector('.popup-repair-types');

    // функция открытия / закрытия меню 
    const toggleMenu = () => {
        popupDialogMenu.parentElement.classList.toggle('visible')
        popupDialogMenu.classList.toggle('popup-dialog-menu--active');
    }
    // открытие модалки 'Полный список услуг'
    const openPopupRepairTypes = () => {
        popupRepairTypes.classList.add('visible');

    }
    // функция закрытия всех модалок
    const closeAllPopup = () => {
        const popup = document.querySelectorAll('.popup')
        popup.forEach(item => {
            item.classList.remove('visible')
        })
    }
  
    document.addEventListener('click', e => {
        
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
            e.preventDefault();
            const scrollHeight = document.getElementById(target.href.split('#')[1]).offsetTop;
            toggleMenu();
            window.scrollTo({top: scrollHeight, behavior: 'smooth'});
        }
        // go to top
        if (target.closest('.button-footer')) {
            e.preventDefault();
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        // открытие модалки по клику виды ремонта
        if (target.parentElement.matches('.link-list-repair')){
            openPopupRepairTypes()
        }
        // открытие модалки по клику в меню
        if (target.parentElement.matches('.link-list-menu')) {
            e.preventDefault();
            toggleMenu();
            openPopupRepairTypes()
        }
        // открытие модалки политика конфиденциальности
        if (target.matches('.link-privacy')) {
            const popupPrivacy = document.querySelector('.popup-privacy');
            popupPrivacy.classList.add('visible');
        }
        // закрытие всех модалок при нажатии на крестик
        if (target.closest('.close')) {
            closeAllPopup()
        }


        if (target.classList.contains('popup')){
            closeAllPopup()
            popupDialogMenu.classList.remove('popup-dialog-menu--active');
        }
    });
   












};

export default headerMenu;