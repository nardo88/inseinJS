import sliderForRepair from './sliderForRepair'

const portfolio = () => {

    class PortfolioDesctop {
        constructor({
            slides,
            next,
            prev
        }) {
            this.slides = document.querySelectorAll(slides);
            this.countMax = 0;
            this.next = document.querySelector(next);
            this.prev = document.querySelector(prev);
            this.step = this.slides[0].offsetWidth;
            this.count = 0

        }

        init() {
            this.addStyles()
            this.addListener();
            this.adative()
            this.getCountMax()
        }

        addStyles() {
            this.slides.forEach(item => {
                item.style.transition = '0.5s';
            })
        }

        getCountMax() {
            this.countMax = Math.ceil(this.slides.length / (this.slides[0].parentElement.offsetWidth / this.slides[0].offsetWidth))
            if (innerWidth <= 900) {
                this.countMax--
            }

        }


        prevSlide() {
            --this.count
            this.move()
            this.showHideArrow()
        }

        nextSlide() {
            ++this.count
            this.move()
            this.showHideArrow()
        }

        move() {
            this.slides.forEach(item => {
                item.style.transform = `translateX(-${this.step * this.count}px)`
            })
        }

        showHideArrow() {
            if (this.count === 0) {
                this.prev.style.display = 'none';
            } else {
                this.prev.style.display = 'flex';
            }

            if (this.count === this.countMax) {
                this.next.style.display = 'none';
            } else {
                this.next.style.display = 'flex';
            }
        }

        adative() {
            window.addEventListener('resize', () => {
                this.getCountMax.bind(this)();
            })
        }



        addListener() {
            if (this.next && this.prev) {
                this.prev.addEventListener('click', this.prevSlide.bind(this))
                this.next.addEventListener('click', this.nextSlide.bind(this))
            }
        }
    }





    const desctopSlider = new PortfolioDesctop({
        slides: '.portfolio-slider__slide',
        next: '#portfolio-arrow_right',
        prev: '#portfolio-arrow_left',

    })

    desctopSlider.init();



    const mobileSlider = new sliderForRepair({
        wrap: '.portfolio-slider-mobile',
        next : '#portfolio-arrow-mobile_right',
        prev : '#portfolio-arrow-mobile_left',
        current : '#portfolio-mobile-current',
        total : '#portfolio-mobile-total',
    })

    mobileSlider.init();
}

export default portfolio