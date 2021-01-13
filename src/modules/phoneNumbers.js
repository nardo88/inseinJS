const phoneNumbers = () => {
    const headerContactsArrow = document.querySelector('.header-contacts__arrow');
    const headerContactsPhoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord');
    
    //переворот стрелочки
    const reverseArrow = () => headerContactsArrow.children[0].classList.toggle('header-contacts__arrow--active');

    // header-contacts__phone-number-accord--active
    const togglePhoneNumber = () => {
        headerContactsPhoneNumberAccord.classList.toggle('header-contacts__phone-number-accord--active');
    }

    // кликаем по кнопке
    headerContactsArrow.addEventListener('click', () => {
        reverseArrow()
        togglePhoneNumber()

    })
}


export default phoneNumbers;

