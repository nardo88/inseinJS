class simpleSlider {
    constructor(option) {
        this.main = document.querySelector(option.main);
        this.wrap = document.querySelector(option.wrapp);
        this.slides = document.querySelector(option.wrapp).children;
        this.slidesToShow = option.slidesToShow;
        this.prev = document.querySelector(option.prev);
        this.next = document.querySelector(option.next);
        this.options = {
            widthSlides: Math.floor(100 / this.slidesToShow),
            position: 0,
            maxPosition: this.slides.length - this.slidesToShow,
            activeSlide: option.activeSlide,
            loop: option.loop,
            countSlides: this.slides.length,
            widthWrapper: option.widthWrapper
        };
        this.responsive = option.responsive;

        
    }

    init() {
      
        this.addStyle();
        this.addsimpleClass();
        if (this.options.loop) {
            this.cloneSlides();
        }
        this.options.maxPosition = this.slides.length - this.slidesToShow;

        this.controlSlider();

        this.addActiveClass();

        if (this.responsive) {
            this.responseInit();
        }
    }

    addStyle() {
        let style = document.getElementById('simpleSlider-style');

        if (!style) {
            style = document.createElement('style');
            style.id = 'simpleSlider-style';
        }

        style.textContent = `
                .simple-slider{
                    overflow: hidden !important;
                }
                .simple-slider__wrap{
                    display: flex !important;
                    will-change: transform !important;
                    align-items: flex-start;
                }
                .simple-slider__wrap--transition{
                    transition: transform 0.5s !important;
                }
                .simple-slider__item{
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    flex: 0 0 ${ this.options.widthSlides }% !important;
                }
                .simple-slider__prev, .simple-slider__next{
                    margin: 0 10px;
                    border: 20px solid transparent;
                    background: transparent;
                    cursor: pointer;
                    outline: none;
                }
                .simple-slider__prev{
                    border-right-color: #19b5fe;
                }
                .simple-slider__next{
                    border-left-color: #19b5fe;
                }
                .simple-slider__prev,
                .simple-slider__next:hover{
                    background: transparent !important;
                }

            `;
        document.head.appendChild(style);
    }

    addsimpleClass() {
        this.main.classList.add('simple-slider');
        this.wrap.classList.add('simple-slider__wrap');
        this.wrap.classList.add('simple-slider__wrap--transition');

        for (const item of this.slides) {
            item.classList.add('simple-slider__item');
        }

    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this))
        this.next.addEventListener('click', this.nextSlider.bind(this))
    }

    prevSlider() {
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position;
            if (this.options.position < 0) {
                this.options.position = this.options.maxPosition;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlides}%)`;
        }
    }
    // показать следующий слайдер
    nextSlider() {
        if (this.options.infinity || this.options.position < this.options.maxPosition) {
            ++this.options.position
            if (this.options.position > this.slides.length - this.slidesToShow) {
                this.options.position = 0;
            }

            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlides}%)`;

        }
    }

    addActiveClass() {
        if (innerWidth  < 768) {
            [...this.slides].forEach(item => {
                item.style.opacity = '1';
                item.children[0].children[0].classList.add('visible-prompt');
            })
        } else if (this.options.activeSlide) {
            [...this.slides].forEach((item, i) => {
                item.style.opacity = '.2'
                item.children[0].children[0].classList.remove('visible-prompt')
                if (i === this.options.position + 1) {
                    item.style.opacity = '1'
                    item.children[0].children[0].classList.add('visible-prompt')


                }
            })
        }
    }

    cloneSlides() {
        const firstClone = this.slides[0].cloneNode(true);
        firstClone.id = 'firstClone';
        const lastClone = this.slides[this.slides.length - 1].cloneNode(true);
        lastClone.id = 'lastClone';
        this.wrap.insertAdjacentElement('beforeend', firstClone);
        this.wrap.insertAdjacentElement('afterbegin', lastClone);
    }

    responseInit() {
        const slidesToShowDefault = this.slidesToShow;
        const allResponse = this.responsive.map(item => item.breackpoint);
        const maxResponse = Math.max(...allResponse);

        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < maxResponse) {
                for (let i = 0; i < allResponse.length; i++) {
                    if (widthWindow < allResponse[i]) {
                        this.slidesToShow = this.responsive[i].slidesToShow;
                        this.options.widthSlides = Math.floor(100 / this.slidesToShow);
                        this.addStyle()
                    }
                }
                if (widthWindow < 768){
                    this.options.countSlides = this.slides.length - 2
                    document.getElementById('firstClone').classList.add('killed')
                    document.getElementById('lastClone').classList.add('killed')
                } else {
                    this.options.countSlides = this.slides.length
                    document.getElementById('firstClone').classList.remove('killed')
                    document.getElementById('lastClone').classList.remove('killed')
                }

                
            } else {
                this.slidesToShow = slidesToShowDefault;
                this.options.widthSlides = Math.floor(100 / this.slidesToShow);
                this.addStyle()
                

            }

            this.addActiveClass();
        };

        checkResponse();

        window.addEventListener('resize', checkResponse)
    }

    destroy(){
        this.main.classList.remove('simple-slider');
        this.wrap.classList.remove('simple-slider__wrap');
        this.wrap.classList.remove('simple-slider__wrap--transition');

        for (const item of this.slides) {
            item.classList.remove('simple-slider__item');
        }

        this.wrap.style.transform = `none`;
    }


}

export default simpleSlider