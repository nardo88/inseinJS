import {
    showPromt,
    hidePromt
} from './prompts'

export class Carousel {
    constructor({
        wrap,
        slider,
        activClass,
        classForSlider,
        classForWrapper,
        slidesToShow,
        prev,
        next,
    }) {
        this.wrap = document.querySelector(wrap);
        this.slider = document.querySelector(slider);
        this.slides = this.slider.children;
        this.activClass = activClass;
        this.classForSlider = classForSlider;
        this.classForWrapper = classForWrapper;
        this.slidesToShow = slidesToShow;
        this.widthSlides = Math.floor(100 / this.slidesToShow);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.currentSlide = 0;
    }

    init() {
        this.addClass();
        this.addStyles();
        this.addListener();
        this.addActiveClass();
    }

    addClass() {
        this.slider.classList.add(this.classForSlider);
        this.wrap.classList.add(this.classForWrapper);
    }

    addStyles() {
        [...this.slides].forEach(item => {
            item.style.maxWidth = `${this.widthSlides}%`;
            item.style.display = `flex`;
            item.style.flex = `0 0 ${this.widthSlides}%`
        })
    }
    nextSlide() {
        ++this.currentSlide;
        if (this.currentSlide > this.slides.length - 1){
            this.currentSlide = 0;
        } 
        this.move();
    }

    prevSlide() {
        --this.currentSlide;
        if (this.currentSlide < 0 ){
            this.currentSlide = this.slides.length - 1;
        } 
        this.move();

    }
    addActiveClass() {
        [...this.slides].forEach((item, i) => {
            item.classList.remove(this.activClass)
            if (i === this.currentSlide){
                item.classList.add(this.activClass)
            }
        })
    }

    addListener() {
        this.prev.addEventListener('click', this.prevSlide.bind(this))
        this.next.addEventListener('click', this.nextSlide.bind(this))
    }

    move() {
        this.slider.style.transform = `translateX(-${this.widthSlides * this.currentSlide }%)`;
        this.addActiveClass();
    }
}

const problems = () => {
    const problemsItem = document.querySelectorAll('.problems-item__icon--desctop');

    problemsItem.forEach(item => {
        item.addEventListener('mouseover', e => {
            const target = e.target.closest('.problems-item__icon--desctop');
            if (target) {
                showPromt(target.children[0], item)
            }
        })

        item.addEventListener('mouseout', e => {
            const target = e.target.closest('.problems-item__icon--desctop');
            if (target) {
                const popup = target.children[0];
                hidePromt(popup);
            }
        })
    })

    const slider = new Carousel({
        wrap: '.problems-slider-wrap',
        slider: '.problems-slider',
        activClass: 'active-item',
        classForSlider: 'carousel-slider',
        classForWrapper: 'carousel-wrapper',
        slidesToShow: 1,
        prev: '#problems-arrow_left',
        next: '#problems-arrow_right',
    })

    slider.init();

}

export default problems