import Slider from './slider';


const prompts = () => {
    const formulaItemIcon = document.querySelectorAll('.formula-item__icon');

    const showPromt = (target, item) => {
        // получаем элемент с подсказкой
        const popup = target.parentElement.children[0];
        // поулчаем расстояние от элемента до верхней границы экрана
        const heightToTop = item.getBoundingClientRect().top
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

    formulaItemIcon.forEach(item => {
        item.addEventListener('mouseover', e => {
            showPromt(e.target, item)
        })
        // при отведении возвращаем все назад
        item.addEventListener('mouseout', e => {
            const popup = e.target.parentElement.children[0];
            popup.style.visibility = 'hidden';
            popup.style.opacity = '0.1'
            popup.closest('.row').style.zIndex = '0'

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