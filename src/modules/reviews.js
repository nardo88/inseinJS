import {EasySlider} from './documents';

const reviews = () => {

    const reviewsSlider = new EasySlider({
        wrap: '.reviews-slider',
        next: '#reviews-arrow_right',
        prev: '#reviews-arrow_left',
        activeClass: 'active-doc',
        dots: {
            selector : '.dot-reviews',
            activeClass : 'dot_active'
        }
    })

    reviewsSlider.init();



}

export default reviews