import { EasySlider } from './documents';

const documentPopup = () => {
    const transparencySlider = document.querySelector('.transparency-slider');
    const popupTransparency = document.querySelector('.popup-transparency');

    const showPopup = () => {
        popupTransparency.classList.add('visible')
    }

    transparencySlider.addEventListener('click', e => {
        const target = e.target.closest('.transparency-item__img');
        if (target) {
            console.log(target.dataset.index);
            documentPopupSlider.count = Number(target.dataset.index);
            documentPopupSlider.showSlide();
            showPopup();
        }
    })

    const documentPopupSlider = new EasySlider({
        wrap: '.popup-transparency-slider',
        next: '#transparency_right',
        prev: '#transparency_left',
        activeClass: 'active-doc',
        counter: '#popup-transparency-curent',
        total: '#popup-transparency-total'
    })

    documentPopupSlider.init();

}


export default documentPopup