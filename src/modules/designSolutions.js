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
    const popup = document.querySelector('.popup-design');

    // ЭЛЕМЕНТЫ POPUP====================================================================
    // кнопки в popup
    const designsNavItemPopup = document.querySelectorAll('.designs-nav__item_popup');
    // слайдеры в popup
    const popupDesignsSliderItem = document.querySelectorAll('.popup-designs-slider__item');




    // функция для заполнения счетчиков
    const setDefaultCounter = (total, current = 1) => {
        sliderTotal.textContent = total;
        sliderCurrent.textContent = current;
    }

    // добавление активного класса
    const addActive = (arr, i, className) => {
        arr.forEach((item, ind) => {
            item.classList.remove(className)
            if (ind === i) {
                item.classList.add(className)
            }
        })
    }


    const showSliderItem = (i = 0) => {
        const slider = document.querySelector('.designs-slider-item--active').children;
        addActive([...slider], i, 'designs-slide-active');
    }

    // показать первый слайд в popup
    const showSliderItemPopup = (i = 0) => {
        const slider = document.querySelector('.popup-designs-slider__item--active').children;
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

    // переключение табов
    const tabChange = ( callBack, target, buttons, ActiveClass, sliders, activeClassForSliders, previews, activeClassPreview, ) => {
        // перебираем все кнопки
        buttons.forEach((item, i) => {
            // удаляем у всех кнопок активный класс
            item.classList.remove(ActiveClass);
            
            if (target === item) {
                indexActivePreview = i;
                // добавляем активный класс
                item.classList.add(ActiveClass);
                // включаем слайдер
                if (sliders){
                    addActive(sliders, i, activeClassForSliders)
                }

                //включаем превью
                if (previews){
                    addActive(previews, i, activeClassPreview)
                }
                // показываем первый слайдер
                callBack();
                // сбрасываем превьюшки что бы первая была активна
                if (previews){
                    defaultActiveClassForPreview();
                }
                
                // заполняем счетчики
                setDefaultCounter(sliders[i].children.length)
            }
        })
    }

    // обработка модального окна============================================POPUP==============================================================
    popup.addEventListener('click', e => {
        const target = e.target;
        

        if (target.tagName === 'BUTTON') {

            tabChange(showSliderItemPopup, target, designsNavItemPopup, 'active', popupDesignsSliderItem, 'popup-designs-slider__item--active')
            
        }
    })


    // переменная для синхронизации счетчика и пагинации
    let indexActivePreview = 0;

    designs.addEventListener('click', e => {
        const target = e.target;
        // клики по кнопке
        if (target.tagName === 'BUTTON') {

            tabChange(showSliderItem, target, designsNavItem, 'active', designsSliderItem, 'designs-slider-item--active', previewBlock, 'visible', )
            
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


        // открытие модального окна
        if (target.matches('.link-list-designs a') ){
            popup.classList.add('visible');
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