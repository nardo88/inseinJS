import SimpleTabs from './simpleTabs';
import { Carousel } from './problems';


const serviceList = () => { 
    const switchInner = document.getElementById('switch-inner');
    const popupRepairTypes = document.querySelector('.popup-repair-types');
    // получаем обертку кнопок
    const navListPopupRepair = document.querySelector('.nav-list-popup-repair');
    // блок с датой
    const dateItem = document.querySelector('.popup-repair-types-content__head-date');
    // обертка для таблиц
    const popupRepairTypesContentTable = document.querySelector('.popup-repair-types-content-table');


    popupRepairTypes.addEventListener('click', e => {
        const target = e.target.closest('.popup-repair-types-nav__item');
        if(target){
            switchInner.textContent = target.textContent;
        }
    })

    const getButtons = value => {
        const btn = document.createElement('button');
        btn.className = 'button_o popup-repair-types-nav__item';
        btn.textContent = value;
        navListPopupRepair.insertAdjacentElement('beforeend', btn)
    }

    const getTbody = arr => {
        const tbody = document.createElement('tbody');

        arr.forEach(({typeService, units, cost}) => {
            const tr = document.createElement('tr');
            tr.className = 'mobile-row';
            tr.innerHTML = `
                    <td class="repair-types-name">${typeService}</td>
                    <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                    <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                    <td class="repair-types-value">${units}</sup></td>
                    <td class="repair-types-value">${cost} руб.</td>
                    `
                    // <td class="repair-types-value">м<sup>2</sup></td>
            tbody.insertAdjacentElement('beforeend', tr)
        })
     

        return tbody;


    }

    const addDefaultActiveClass = () =>{
        document.querySelectorAll('.popup-repair-types-nav__item')[0].classList.add('active-tab');
        document.querySelectorAll('.popup-repair-types-content-table__list')[0].classList.add('popup-repair-types-content-table__list--active');
    }



    fetch('../../db/db.json')
        .then(response => response.json())
        .then(data => {
            render(data);
            
        })

    const render = data => {
        console.log(data);

        data.forEach((item, i) => {
            if (item.date){
                dateItem.textContent = item.date
            } else {
                console.log(item);
                getButtons(item.title);

                const table = document.createElement('table');
                table.className = 'popup-repair-types-content-table__list';

                table.insertAdjacentElement('afterbegin', getTbody(item.priceList))

                popupRepairTypesContentTable.insertAdjacentElement('beforeend', table)
                
            }
        })

        addDefaultActiveClass();

        const includSlider = () => {
            let carousel = new Carousel({
                wrap: '.nav-popup-repair-types',
                slider: '.nav-list-popup-repair',
                activClass: 'test',
                classForSlider: 'carousel-slider-popup-repair-types',
                classForWrapper: 'designs-slider-wrapper',
                classForSlide: 'designs-slider-button',
                slidesToShow: 1,
                prev: '#nav-arrow-popup-repair_left',
                next: '#nav-arrow-popup-repair_right',
            })
            if (innerWidth < 1025){
                carousel.init()
            } else {
                carousel.destroy()
            }
    
        }
        includSlider()
    
        window.addEventListener('resize', () => {
            includSlider();
        })
    
        const tabs = new SimpleTabs({
            wrapButtons: '.nav-list-popup-repair',
            activeClassButton: 'active-tab',
            tabsContent: {
                image: '.popup-repair-types-content-table__list',
                imageActiveClass: 'popup-repair-types-content-table__list--active',
                text: null,
                textActiveClass: null, 
            }
        })
    
        tabs.init();

    }

   

}

export default serviceList