import SimpleTabs from './simpleTabs';
import { Carousel } from './problems';


const howWeWork = () => {
    const tabs = new SimpleTabs({
        wrapButtons: '#scheme-list',
        activeClassButton: 'active',
        tabsContent: {
            image: '.scheme-slider__slide',
            imageActiveClass: 'scheme-slider__slide---active',
            text: '.scheme-description-block',
            textActiveClass: 'visible-content-block', 
        }
    })

    tabs.init();

    const includSlider = () => {
        let carousel = new Carousel({
            wrap: '#scheme-list-wrap',
            slider: '#scheme-list',
            activClass: 'test',
            classForSlider: 'carousel-slider',
            classForWrapper: 'designs-slider-wrapper',
            classForSlide: 'designs-slider-button',
            slidesToShow: 1,
            prev: '#nav-arrow-scheme_left',
            next: '#nav-arrow-scheme_right',
        })
        if (innerWidth < 1135){
            
        
            carousel.init()
        } else {
            carousel.destroy()
        }

    }
    includSlider()

    window.addEventListener('resize', () => {
        includSlider();
    })
}

export default howWeWork;