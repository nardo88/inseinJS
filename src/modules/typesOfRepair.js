import simpleSlider from './simpleSlider'
import sliderForRepair from './sliderForRepair'

const typesOfRepair = () => {
    // получаем оболочку видов ремонта
    const repairTypes = document.getElementById('repair-types');
    // получаем слайдера
    const repairTypesSliders = document.querySelector('.repair-types-slider').children;
    // получаем кнопки
    const repairTypesNavItem = document.querySelectorAll('.repair-types-nav__item');

    let sl = new sliderForRepair({
        wrap: `.types-repair1`,
        next: '#repair-types-arrow_right',
        prev: '#repair-types-arrow_left',
        current: '.slider-counter-content__current',
        total: '.slider-counter-content__total',
    })
    sl.init();

    const tabs = (target) => {
        repairTypesNavItem.forEach((item, i) => {
            item.classList.remove('active');
            if (item === target){
                item.classList.add('active');
                [...repairTypesSliders].forEach((elem, index) => {
                    elem.style.display = 'none';
                    sl = null;
                    if (index === i){
                        elem.style.display = 'block';
                        sl = new sliderForRepair({
                            wrap: `.types-repair${i + 1}`,
                            next: '#repair-types-arrow_right',
                            prev: '#repair-types-arrow_left',
                            current: '.slider-counter-content__current',
                            total: '.slider-counter-content__total',
                        })
                        sl.init();
                    }
                })
            }
        })
    }

    repairTypes.addEventListener('click', e => {
        const target = e.target;

        if (target.classList.contains('repair-types-nav__item')){
            tabs(target)
        }
    })

    const initTabsSlider = () => {

        let repairsType = new simpleSlider({
            main: '.repair-types-nav',
            wrapp: '.nav-list-repair',
            slidesToShow: 1,
            prev: '#nav-arrow-repair-left_base',
            next: '#nav-arrow-repair-right_base',
            loop: false,
            activeSlide: false,
            widthWrapper: repairTypesSliders[0].parentElement.offsetWidth,
    
        })

        if (innerWidth <= 1024){
            repairsType.init();
        } else {
            repairsType.destroy();
        }
           
    }

    initTabsSlider();

    window.addEventListener('resize', initTabsSlider)
    

    




    

}

export default typesOfRepair