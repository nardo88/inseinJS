const acardeon = () => {

    const accordion = document.querySelector('.accordion')
    const titles = accordion.querySelectorAll('.title_block')
    const showElem = (target) => {
        titles.forEach((item) => {
            item.classList.remove('msg-active');
            // item.nextElementSibling.style.height = '0'
            if (item === target){
                item.classList.add('msg-active');
                // item.nextElementSibling.style.height = '500px'

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