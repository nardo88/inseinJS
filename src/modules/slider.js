class Slider {
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
            activeSlide: true,
            loop: option.loop
        }
    }

    init() {

        this.addStyle();
        this.addGloClass();
        if (this.options.loop){
            this.cloneSlides();
        }
        this.controlSlider();

        

    }

    addStyle() {
        let style = document.getElementById('styleCarousel-style');

        if (!style){
            style = document.createElement('style');
            style.id = 'styleCarousel-style';
        }
        
        style.textContent = `
                .glo-slider{
                    overflow: hidden !important;
                }
                .glo-slider__wrap{
                    display: flex !important;
                    transition: transform 0.5s !important;
                    will-change: transform !important;
                    min-height: auto !important;
                }
                .glo-slider__item{
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center;
                    flex: 0 0 ${ this.options.widthSlides}%;
                    margin: auto 0 !important;
                }
                .glo-slider__prev, .glo-slider__next{
                    margin: 0 10px;
                    border: 20px solid transparent;
                    background: transparent;
                    cursor: pointer;
                    outline: none;
                }
                .glo-slider__prev{
                    border-right-color: #19b5fe;
                }
                .glo-slider__next{
                    border-left-color: #19b5fe;
                }
                .glo-slider__prev,
                .glo-slider__next:hover{
                    background: transparent !important;
                }

                
                
                
            `;
        document.head.appendChild(style);
    }

    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');

        for (const item of this.slides) {
            item.classList.add('glo-slider__item');
        }
       
    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this))
        this.next.addEventListener('click', this.nextSlider.bind(this))
    }

    prevSlider() {
        if (this.options.loop || this.options.position > 0) {
            --this.options.position;

            if (this.options.position <= 0) {
                this.wrap.prepend(this.slides[this.slides.length - 1])
                this.options.position++
            }

            
            console.log('this.options.widthSlides: ', this.options.widthSlides);
            console.log('this.options.position: ', this.options.position);
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlides}%)`;
        }

        this.addActiveClass();
    }

    nextSlider() {
        if (this.options.loop || this.options.position < this.options.maxPosition) {
            ++this.options.position
            
            if (this.options.position > this.slides.length - this.slidesToShow) {
                
                this.cloneSlides()
                
            }

            console.log('this.options.widthSlides: ', this.options.widthSlides);
            console.log('this.options.position: ', this.options.position);

            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlides}%)`;

        }

        this.addActiveClass();
    }

    addActiveClass() {
        if (this.options.activeSlide){
            [...this.slides].forEach((item, i) => {
                item.style.opacity = '.2'
                if (i === this.options.position + 1){
                    item.style.opacity = '1'

                }
            })
        }
    }

    cloneSlides() {
        const firstClone = this.slides[0].cloneNode(true);
        const lastClone = this.slides[this.slides.length - 1].cloneNode(true);
        this.wrap.insertAdjacentElement('beforeend', firstClone);
        this.wrap.insertAdjacentElement('afterbegin', lastClone);
    }

}


export default Slider