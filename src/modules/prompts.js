import Slider from './slider';

export const showPromt = (popup, item) => {
    // поулчаем расстояние от элемента до верхней границы экрана
    const heightToTop = item.getBoundingClientRect().top - 10
    // задаем родителю с классом row z индекс так как в верстке не корректно идет отображение всплывашек
    popup.closest('.row').style.zIndex = '1000'

    if (heightToTop < popup.offsetHeight) {
        popup.style.bottom = `-${popup.offsetHeight + 20}px`;
        popup.style.zIndex = '1000'
        popup.classList.add('popup-before');
    } else {
        popup.style.bottom = '90px';
        popup.classList.remove('popup-before');
    }
    popup.style.visibility = 'visible';
    popup.style.opacity = '1'
}

export const hidePromt = (popup) => {
    popup.style.visibility = 'hidden';
    popup.style.opacity = '0.1'
    popup.closest('.row').style.zIndex = '0'
}


const prompts = () => {
    const formulaItemIcon = document.querySelectorAll('.formula-item__icon');

    

    formulaItemIcon.forEach(item => {
        item.addEventListener('mouseover', function (e) {
            showPromt(e.target.parentElement.children[0], item)
            this.classList.add('active-item')
        })
        // при отведении возвращаем все назад
        item.addEventListener('mouseout', function (e) {
            const popup = e.target.parentElement.children[0];
            this.classList.remove('active-item')
            
            hidePromt(popup)

        })
    })


    const slider = new Slider({
        main: '.formula-slider-wrap',
        wrapp: '.formula-slider',
        slidesToShow: 3,
        prev: '#formula-arrow_left',
        next: '#formula-arrow_right',
        loop: true,
        activeSlide: true,

        responsive: [{
                breackpoint: 1024,
                slidesToShow: 3
            },
            {
                breackpoint: 768,
                slidesToShow: 1
            },

        ]
    })

    slider.init();

}

export default prompts