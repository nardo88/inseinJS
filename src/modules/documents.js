export class EasySlider {
    constructor({
        wrap,
        next,
        prev,
        activeClass = 'active',
        counter,
        total,
        dots = null

    }){
        this.wrap = document.querySelector(wrap);
        this.slides = this.wrap.children;
        this.next = document.querySelector(next)
        this.prev = document.querySelector(prev)
        this.count = 0;
        this.activeClass = activeClass;
        this.counter = document.querySelector(counter);
        this.total = document.querySelector(total);
        if (dots){
            this.dots = {
                items : document.querySelectorAll(dots.selector),
                acliveClass : dots.activeClass
            }
        } else {
            this.dots = null;
        }
    }

    init() {

        this.addListener();
        this.showCount();
        this.showDots();

    }

    showDots() {
        if (this.dots){
            this.dots.items.forEach((item, i) => {

                item.classList.remove(this.dots.acliveClass);
                if (i === this.count){
                    item.classList.add(this.dots.acliveClass);
                }
            })
        }
    }

    showSlide() {
        
        [...this.slides].forEach((item, i) => {
            item.classList.remove(this.activeClass)
            if (i === this.count){
                item.classList.add(this.activeClass);
            }
        })

        this.showCount();
        this.showDots();
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

        if (this.dots){
            this.dots.items.forEach((item, i) => {
                item.addEventListener('click', () => {
                    this.count = i;
                    this.showSlide();
                })
                
            })

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