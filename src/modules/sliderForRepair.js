class sliderForRepair {
    constructor({
        wrap,
        next,
        prev,
        current,
        total
        
    }) {
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.countSlide = 0;
        this.maxSlides = this.slides.length
        this.current = document.querySelector(current);
        this.total = document.querySelector(total);

    }


    init() {
        this.addListener();
        this.showCurentSlide(1) 
        this.total.textContent = this.maxSlides
    }

    showSlide() {
        [...this.slides].forEach((item, i) => {
            item.style.display = 'none';
            if (i === this.countSlide){
                item.style.display = 'block';
                this.showCurentSlide(i + 1)
            }
        })
    }

    nextSlide() {
        ++this.countSlide
        if (this.countSlide >= this.slides.length){
            this.countSlide = 0;
        }
        this.showSlide();
    }

    prevSlide() {
        --this.countSlide
        if (this.countSlide < 0 ){
            this.countSlide = this.slides.length - 1;
        }
        this.showSlide();
    }

    addListener() {
        if (this.next && this.prev){
            this.next.addEventListener('click', this.nextSlide.bind(this))
            this.prev.addEventListener('click', this.prevSlide.bind(this))
        }
    }

    showCurentSlide(i) {
        this.current.textContent = i
    }

    destroy() {
        
    }
   
}


export default sliderForRepair