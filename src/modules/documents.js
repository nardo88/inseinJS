export class EasySlider {
    constructor({
        wrap,
        next,
        prev,
        activeClass = 'active',
        counter,
        total

    }){
        this.wrap = document.querySelector(wrap);
        this.slides = this.wrap.children;
        this.next = document.querySelector(next)
        this.prev = document.querySelector(prev)
        this.count = 0;
        this.activeClass = activeClass;
        this.counter = document.querySelector(counter);
        this.total = document.querySelector(total);

    }

    init() {

        this.addListener();
        this.showCount();
    }

    showSlide() {
        
        [...this.slides].forEach((item, i) => {
            item.classList.remove(this.activeClass)
            if (i === this.count){
                item.classList.add(this.activeClass);

            }
        })

        this.showCount();
    }

    showCount() {
        if (this.counter && this.total){
            this.counter.textContent = this.count + 1;
            this.total.textContent =  this.slides.length;
        }
        

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

    const slider = new EasySlider({
        wrap: '.transparency-slider',
        next: '#transparency-arrow_right',
        prev: '#transparency-arrow_left',
        activeClass: 'active-doc'
    })

    slider.init();
}

export default documents