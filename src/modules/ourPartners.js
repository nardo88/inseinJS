import { Carousel } from './problems';



const ourPartners = () => {
    const carousel = new Carousel({
        wrap: '#partners-wrapper',
        slider: '.partners-slider',
        activClass: 'test',
        classForSlider: 'carousel-slider',
        classForWrapper: 'designs-slider-wrapper',
        classForSlide: 'designs-slider-button',
        slidesToShow: 1,
        prev: '#partners-arrow_left',
        next: '#partners-arrow_right',
    })
        
    carousel.init();

}

export default ourPartners