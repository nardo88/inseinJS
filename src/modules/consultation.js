import { scrollOff } from './popups';

const consultation = () => {
    const buttons = document.querySelectorAll('.button_wide');
    const popupConsultation = document.querySelector('.popup-consultation');

    const openModal = () => {
        popupConsultation.classList.add('visible');
        scrollOff();
    }


    buttons.forEach(item => {
        item.addEventListener('click', openModal)
    })
}

export default consultation