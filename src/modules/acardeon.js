const acardeon = () => {

    const accordion = document.querySelector('.accordion')
    const titles = accordion.querySelectorAll('.title_block')
    const showElem = (target) => {
        titles.forEach((item) => {
            item.classList.remove('msg-active');
            if (item === target){
                item.classList.add('msg-active');
            }
        })
    }

    accordion.addEventListener('click', e => {
        const target = e.target;
        
        if (target.tagName === 'H2'){
            showElem(target)
        }
    }) 

}

export default acardeon