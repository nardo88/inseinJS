import sliderForRepair from './sliderForRepair'


const portfolio = () => {

    const portfolioSliderWrap = document.querySelector('.portfolio-slider-wrap');
    const popupPortfolio = document.querySelector('.popup-portfolio');
    let counter = 0;

    
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
            this.getCountMax();
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
                
                this.slides.forEach(item => {
                    item.style.transform = `translateX(-${0}px)`
                })
                this.getCountMax.bind(this)();
                this.count = 0;

                this.showHideArrow();
                
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

    const showModalPortfolio = () => {
        popupPortfolio.classList.add('visible')
    }

    portfolioSliderWrap.addEventListener('click', e => {
        const target = e.target

        if (target.classList.contains('portfolio-slider__slide-frame')){
            showModalPortfolio()
            counter = +target.dataset.index
            showSlide();
        }
    })


    // модальное окно

    const popupPortfolioSliderSlides = document.querySelectorAll('.popup-portfolio-slider__slide');
    const popupPortfolioText = document.querySelectorAll('.popup-portfolio-text');
    const next = document.getElementById('popup_portfolio_right')
    const prev = document.getElementById('popup_portfolio_left')
    const current = document.getElementById('popup-portfolio-current')
    const total = document.getElementById('popup-portfolio-total')

    
    total.textContent = popupPortfolioText.length;

    const showSlide = () => {
        
        for (let i = 0; i < popupPortfolioText.length; i++) {
            popupPortfolioSliderSlides[i].style.display = 'none';
            popupPortfolioText[i].style.display = 'none';
            if (i === counter) {
                popupPortfolioSliderSlides[i].style.display = 'block';
                popupPortfolioText[i].style.display = 'block';
            }
        }
        current.textContent = counter + 1;
    }

    const nextSlide = () => {
        counter++
        if (counter >= popupPortfolioText.length ){
            counter = 0
        }

        showSlide()
    }

    const prevSlide = () => {
        counter--
        if (counter < 0){
            counter = popupPortfolioText.length - 1
        }

        showSlide()
    }

    showSlide()

    next.addEventListener('click', nextSlide)
    prev.addEventListener('click', prevSlide)
}

export default portfolio