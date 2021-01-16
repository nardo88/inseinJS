class SimpleTabs {
    constructor({
        wrapButtons,
        activeClassButton,
        tabsContent
    }) {
        this.wrapButtons = document.querySelector(wrapButtons);
        this.buttons = this.wrapButtons.children;
        this.activeClassButton = activeClassButton;
        this.tabsContent = tabsContent;
        if (tabsContent.text){
            this.tabsContentText = document.querySelectorAll(tabsContent.text);
        }
    }

    init(){
        this.addEvents();
    }

    addEvents() {
        if (this.buttons){
            [...this.buttons].forEach((item, i) => {
                item.addEventListener('click', this.onClick.bind(this, i))
            })
        }
    }

    onClick(i) {
        this.addActiveClass([...this.buttons], i, this.activeClassButton);
        if (this.tabsContentText){
            this.addActiveClass([...this.tabsContentText], i, this.tabsContent.textActiveClass);
        }
        this.addActiveClass([...document.querySelectorAll(this.tabsContent.image)], i, this.tabsContent.imageActiveClass);

    }

    addActiveClass(arr, i, activeClass){
        arr.forEach((item, ind) => {
            item.classList.remove(activeClass);
            if (ind === i){
                item.classList.add(activeClass);
            }
        })
    }
} 

export default SimpleTabs