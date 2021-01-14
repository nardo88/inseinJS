export class easySlider {
    constructor({
        wrap,
        next,
        prev,
        activeClass = 'active',
    }){
        this.wrap = document.querySelector(wrap);
        this.slides = this.wrap.children;
        this.next = document.querySelector(next)
        this.prev = document.querySelector(prev)
        this.count = 0;
        this.activeClass = activeClass
    }

    init() {
        this.addListener();
    }

    showSlide() {
        
        [...this.slides].forEach((item, i) => {
            item.classList.remove(this.activeClass)
            if (i === this.count){
                item.classList.add(this.activeClass);

            }
        })
    }

    nextSlide() {
        ++this.count
        if (this.count > this.slides.length - 1){
            this.count = 0
        }
        
        this.showSlide();

    }

    prevSlide() {
        --this.count
        if (this.count < 0 ){
            this.count = this.slides.length - 1
        }
        this.showSlide();
    }

    addListener() {
        if (this.next && this.prev){
            this.next.addEventListener('click', this.nextSlide.bind(this));
            this.prev.addEventListener('click', this.prevSlide.bind(this));
        }
    }
} 

const documents = () => {

    const slider = new easySlider({
        wrap: '.transparency-slider',
        next: '#transparency-arrow_right',
        prev: '#transparency-arrow_left',
        activeClass: 'active-doc'
    })

    slider.init();
}

export default documents