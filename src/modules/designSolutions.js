'use strict'
import { Carousel } from './problems';


const designSolutions = () => {
    // область
    const designs = document.getElementById('designs');
    // кнопки
    const designsNavItem = document.querySelectorAll('.designs-nav__item');
    // слайдеры
    const designsSliderItem = document.querySelectorAll('.designs-slider-item');
    // блоки с превью
    const previewBlock = document.querySelectorAll('.preview-block');
    // счетчики
    const sliderCurrent = document.getElementById('slider-counter-responsive-current');
    const sliderTotal = document.getElementById('slider-counter-responsive-total');


    const setDefaultCounter = (total, current = 1) => {
        sliderTotal.textContent = total;
        sliderCurrent.textContent = current;
    }

    // designs-slider-item--active

    const addActive = (arr, i, className) => {
        arr.forEach((item, ind) => {
            item.classList.remove(className)
            if (ind === i) {
                item.classList.add(className)
            }
        })
    }

    const showSliderItem = i => {
        const slider = document.querySelector('.designs-slider-item--active').children;
        addActive([...slider], i, 'designs-slide-active');
    }

    // сброс активного класса для превью во время переключения между слайдерами
    const defaultActiveClassForPreview = () => {
        previewBlock.forEach(item => {
            [...item.children].forEach((elem, i) => {
                elem.children[0].classList.remove('preview_active');
                if (i === 0) {
                    elem.children[0].classList.add('preview_active');
                }
            })
        })
    }

    let indexActivePreview = 0;

    designs.addEventListener('click', e => {
        const target = e.target;
        // клики по кнопке
        if (target.tagName === 'BUTTON') {
            designsNavItem.forEach((item, i) => {
                
                item.classList.remove('active');
                if (target === item) {
                    indexActivePreview = i;
                    item.classList.add('active');
                    addActive(designsSliderItem, i, 'designs-slider-item--active')
                    addActive(previewBlock, i, 'visible')
                    showSliderItem(0);
                    defaultActiveClassForPreview();
                    setDefaultCounter(designsSliderItem[i].children.length)
                }
            })
        }


        if (target.closest('.preview-block__item')) {
            const previewItems = target.parentElement.parentElement.children;
            [...previewItems].forEach((item, i) => {
                if (item === target.parentElement) {
                    showSliderItem(i)
                    setDefaultCounter(previewItems.length, i + 1)

                }
            });
            // добавление активного класса 
            [...previewItems].forEach(item => {
                item.children[0].classList.remove('preview_active');
                if (item.children[0] === target) {
                    item.children[0].classList.add('preview_active');
                }
            })



            
        }

        if (target.closest('.slider-arrow-tablet-mobile_right')){
            const arraySlides = designs.querySelector('.designs-slider-item--active').children;
            let count;
            [...arraySlides].forEach((item, i) => {
                if (item.classList.contains('designs-slide-active')){
                    count = i;
                }
            })
            ++count;
            if (count > arraySlides.length - 1){
                count = 0;
            };

            [...arraySlides].forEach((item, i) => {
                item.classList.remove('designs-slide-active')
                if (i === count){
                    item.classList.add('designs-slide-active')

                }
            });

            [...previewBlock[indexActivePreview].children].forEach((item, i) => {
                item.children[0].classList.remove('preview_active')
                if (i === count){
                    item.children[0].classList.add('preview_active')

                }
            })


            setDefaultCounter(arraySlides.length, count + 1)



        }

        if (target.closest('.slider-arrow-tablet-mobile_left')){
            const arraySlides = designs.querySelector('.designs-slider-item--active').children;
            let count;
            [...arraySlides].forEach((item, i) => {
                if (item.classList.contains('designs-slide-active')){
                    count = i;
                }
            })
            --count;
            if (count < 0 ){
                count = arraySlides.length - 1;
            };

            [...arraySlides].forEach((item, i) => {
                item.classList.remove('designs-slide-active')
                if (i === count){
                    item.classList.add('designs-slide-active')

                }
            });

            [...previewBlock[indexActivePreview].children].forEach((item, i) => {
                item.children[0].classList.remove('preview_active')
                if (i === count){
                    item.children[0].classList.add('preview_active')

                }
            })

            setDefaultCounter(arraySlides.length, count + 1)


        }
    })
    // включаем первый слайдер и превью
    addActive(designsSliderItem, 0, 'designs-slider-item--active')
    addActive(previewBlock, 0, 'visible')
    showSliderItem(0)


    const includeSlider = () => {
       let carousel = new Carousel({
            wrap: '.nav-designs',
            slider: '.nav-list-designs',
            activClass: 'test',
            classForSlider: 'carousel-slider',
            classForWrapper: 'designs-slider-wrapper',
            classForSlide: 'designs-slider-button',
            slidesToShow: 1,
            prev: '#nav-arrow-designs_left',
            next: '#nav-arrow-designs_right',
        })
        if (innerWidth < 1135){
            
        
            carousel.init()
        } else {
            carousel.destroy()
        }
    }
    window.addEventListener('resize', () => {
        includeSlider()
    })

    includeSlider()

    
    

}


export default designSolutions