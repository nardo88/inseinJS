(()=>{"use strict";function t(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||e(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const o=function(){function i(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.main=document.querySelector(t.main),this.wrap=document.querySelector(t.wrapp),this.slides=document.querySelector(t.wrapp).children,this.slidesToShow=t.slidesToShow,this.prev=document.querySelector(t.prev),this.next=document.querySelector(t.next),this.options={widthSlides:Math.floor(100/this.slidesToShow),position:0,maxPosition:this.slides.length-this.slidesToShow,activeSlide:t.activeSlide,loop:t.loop,countSlides:this.slides.length,widthWrapper:t.widthWrapper},this.responsive=t.responsive}var o,s;return o=i,(s=[{key:"init",value:function(){this.addStyle(),this.addGloClass(),this.options.loop&&this.cloneSlides(),this.options.maxPosition=this.slides.length-this.slidesToShow,this.controlSlider(),this.addActiveClass(),this.responsive&&this.responseInit()}},{key:"addStyle",value:function(){var t=document.getElementById("styleCarousel-style");t||((t=document.createElement("style")).id="styleCarousel-style"),t.textContent="\n                .glo-slider{\n                    overflow: hidden !important;\n                }\n                .glo-slider__wrap{\n                    display: flex !important;\n                    will-change: transform !important;\n                    align-items: flex-start;\n                }\n                .glo-slider__wrap--transition{\n                    transition: transform 0.5s !important;\n                }\n                .glo-slider__item{\n                    display: flex !important;\n                    align-items: center !important;\n                    justify-content: center !important;\n                    flex: 0 0 ".concat(this.options.widthSlides,"% !important;\n                }\n                .glo-slider__prev, .glo-slider__next{\n                    margin: 0 10px;\n                    border: 20px solid transparent;\n                    background: transparent;\n                    cursor: pointer;\n                    outline: none;\n                }\n                .glo-slider__prev{\n                    border-right-color: #19b5fe;\n                }\n                .glo-slider__next{\n                    border-left-color: #19b5fe;\n                }\n                .glo-slider__prev,\n                .glo-slider__next:hover{\n                    background: transparent !important;\n                }\n\n                .killed{\n                    display : none !important;\n                }\n\n                \n                \n                \n            "),document.head.appendChild(t)}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap"),this.wrap.classList.add("glo-slider__wrap--transition");var t,i=function(t,i){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=e(t))){n&&(t=n);var o=0,s=function(){};return{s,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){a=!0,r=t},f:function(){try{l||null==n.return||n.return()}finally{if(a)throw r}}}}(this.slides);try{for(i.s();!(t=i.n()).done;)t.value.classList.add("glo-slider__item")}catch(t){i.e(t)}finally{i.f()}}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.loop||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlides,"%)")),this.options.activeSlide&&this.addActiveClass()}},{key:"nextSlider",value:function(){this.options.loop?(this.options.loop||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.countSlides-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlides,"%)")):(this.options.position<this.slides[0].parentElement.offsetWidth-3*this.options.widthSlides&&++this.options.position,this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlides,"%)")),this.addActiveClass()}},{key:"addActiveClass",value:function(){var e=this;innerWidth<768?t(this.slides).forEach((function(t){t.style.opacity="1",t.children[0].children[0].classList.add("visible-prompt")})):this.options.activeSlide&&t(this.slides).forEach((function(t,i){t.style.opacity=".2",t.children[0].children[0].classList.remove("visible-prompt"),i===e.options.position+1&&(t.style.opacity="1",t.children[0].children[0].classList.add("visible-prompt"))}))}},{key:"cloneSlides",value:function(){var t=this.slides[0].cloneNode(!0);t.id="firstClone";var e=this.slides[this.slides.length-1].cloneNode(!0);e.id="lastClone",this.wrap.insertAdjacentElement("beforeend",t),this.wrap.insertAdjacentElement("afterbegin",e)}},{key:"responseInit",value:function(){var e=this,i=this.slidesToShow,n=this.responsive.map((function(t){return t.breackpoint})),o=Math.max.apply(Math,t(n)),s=function(){var t=document.documentElement.clientWidth;if(t<o){for(var s=0;s<n.length;s++)t<n[s]&&(e.slidesToShow=e.responsive[s].slidesToShow,e.options.widthSlides=Math.floor(100/e.slidesToShow),e.addStyle());t<768?(e.options.countSlides=e.slides.length-2,document.getElementById("firstClone").classList.add("killed"),document.getElementById("lastClone").classList.add("killed")):(e.options.countSlides=e.slides.length,document.getElementById("firstClone").classList.remove("killed"),document.getElementById("lastClone").classList.remove("killed"))}else e.slidesToShow=i,e.options.widthSlides=Math.floor(100/e.slidesToShow),e.addStyle();e.addActiveClass()};s(),window.addEventListener("resize",s)}}])&&n(o.prototype,s),i}();function s(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=l(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r=!0,a=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return r=t.done,t},e:function(t){a=!0,s=t},f:function(){try{r||null==i.return||i.return()}finally{if(a)throw s}}}}function l(t,e){if(t){if("string"==typeof t)return a(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function d(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.main=document.querySelector(e.main),this.wrap=document.querySelector(e.wrapp),this.slides=document.querySelector(e.wrapp).children,this.slidesToShow=e.slidesToShow,this.prev=document.querySelector(e.prev),this.next=document.querySelector(e.next),this.options={widthSlides:Math.floor(100/this.slidesToShow),position:0,maxPosition:this.slides.length-this.slidesToShow,activeSlide:e.activeSlide,loop:e.loop,countSlides:this.slides.length,widthWrapper:e.widthWrapper},this.responsive=e.responsive}var e,i;return e=t,(i=[{key:"init",value:function(){this.addStyle(),this.addsimpleClass(),this.options.loop&&this.cloneSlides(),this.options.maxPosition=this.slides.length-this.slidesToShow,this.controlSlider(),this.addActiveClass(),this.responsive&&this.responseInit()}},{key:"addStyle",value:function(){var t=document.getElementById("simpleSlider-style");t||((t=document.createElement("style")).id="simpleSlider-style"),t.textContent="\n                .simple-slider{\n                    overflow: hidden !important;\n                }\n                .simple-slider__wrap{\n                    display: flex !important;\n                    will-change: transform !important;\n                    align-items: flex-start;\n                }\n                .simple-slider__wrap--transition{\n                    transition: transform 0.5s !important;\n                }\n                .simple-slider__item{\n                    display: flex !important;\n                    align-items: center !important;\n                    justify-content: center !important;\n                    flex: 0 0 ".concat(this.options.widthSlides,"% !important;\n                }\n                .simple-slider__prev, .simple-slider__next{\n                    margin: 0 10px;\n                    border: 20px solid transparent;\n                    background: transparent;\n                    cursor: pointer;\n                    outline: none;\n                }\n                .simple-slider__prev{\n                    border-right-color: #19b5fe;\n                }\n                .simple-slider__next{\n                    border-left-color: #19b5fe;\n                }\n                .simple-slider__prev,\n                .simple-slider__next:hover{\n                    background: transparent !important;\n                }\n\n            "),document.head.appendChild(t)}},{key:"addsimpleClass",value:function(){this.main.classList.add("simple-slider"),this.wrap.classList.add("simple-slider__wrap"),this.wrap.classList.add("simple-slider__wrap--transition");var t,e=r(this.slides);try{for(e.s();!(t=e.n()).done;)t.value.classList.add("simple-slider__item")}catch(t){e.e(t)}finally{e.f()}}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlides,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlides,"%)"))}},{key:"addActiveClass",value:function(){var t=this;innerWidth<768?s(this.slides).forEach((function(t){t.style.opacity="1",t.children[0].children[0].classList.add("visible-prompt")})):this.options.activeSlide&&s(this.slides).forEach((function(e,i){e.style.opacity=".2",e.children[0].children[0].classList.remove("visible-prompt"),i===t.options.position+1&&(e.style.opacity="1",e.children[0].children[0].classList.add("visible-prompt"))}))}},{key:"cloneSlides",value:function(){var t=this.slides[0].cloneNode(!0);t.id="firstClone";var e=this.slides[this.slides.length-1].cloneNode(!0);e.id="lastClone",this.wrap.insertAdjacentElement("beforeend",t),this.wrap.insertAdjacentElement("afterbegin",e)}},{key:"responseInit",value:function(){var t=this,e=this.slidesToShow,i=this.responsive.map((function(t){return t.breackpoint})),n=Math.max.apply(Math,s(i)),o=function(){var o=document.documentElement.clientWidth;if(o<n){for(var s=0;s<i.length;s++)o<i[s]&&(t.slidesToShow=t.responsive[s].slidesToShow,t.options.widthSlides=Math.floor(100/t.slidesToShow),t.addStyle());o<768?(t.options.countSlides=t.slides.length-2,document.getElementById("firstClone").classList.add("killed"),document.getElementById("lastClone").classList.add("killed")):(t.options.countSlides=t.slides.length,document.getElementById("firstClone").classList.remove("killed"),document.getElementById("lastClone").classList.remove("killed"))}else t.slidesToShow=e,t.options.widthSlides=Math.floor(100/t.slidesToShow),t.addStyle();t.addActiveClass()};o(),window.addEventListener("resize",o)}},{key:"destroy",value:function(){this.main.classList.remove("simple-slider"),this.wrap.classList.remove("simple-slider__wrap"),this.wrap.classList.remove("simple-slider__wrap--transition");var t,e=r(this.slides);try{for(e.s();!(t=e.n()).done;)t.value.classList.remove("simple-slider__item")}catch(t){e.e(t)}finally{e.f()}this.wrap.style.transform="none"}}])&&d(e.prototype,i),t}();function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function h(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const u=function(){function t(e){var i=e.wrap,n=e.next,o=e.prev,s=e.current,r=e.total;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.wrap=document.querySelector(i),this.slides=document.querySelector(i).children,this.next=document.querySelector(n),this.prev=document.querySelector(o),this.countSlide=0,this.maxSlides=this.slides.length,this.current=document.querySelector(s),this.total=document.querySelector(r)}var e,i;return e=t,(i=[{key:"init",value:function(){this.addListener(),this.showCurentSlide(1),this.total.textContent=this.maxSlides}},{key:"showSlide",value:function(){var t,e=this;(t=this.slides,function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?p(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(t,i){t.style.display="none",i===e.countSlide&&(t.style.display="block",e.showCurentSlide(i+1))}))}},{key:"nextSlide",value:function(){++this.countSlide,this.countSlide>=this.slides.length&&(this.countSlide=0),this.showSlide()}},{key:"prevSlide",value:function(){--this.countSlide,this.countSlide<0&&(this.countSlide=this.slides.length-1),this.showSlide()}},{key:"addListener",value:function(){this.next&&this.prev&&(this.next.addEventListener("click",this.nextSlide.bind(this)),this.prev.addEventListener("click",this.prevSlide.bind(this)))}},{key:"showCurentSlide",value:function(t){this.current.textContent=t}}])&&h(e.prototype,i),t}();function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function m(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var y,v,w,S,b,g;b=document.querySelector(".header-contacts__arrow"),g=document.querySelector(".header-contacts__phone-number-accord"),b.addEventListener("click",(function(){b.children[0].classList.toggle("header-contacts__arrow--active"),g.classList.toggle("header-contacts__phone-number-accord--active")})),y=document.querySelector(".popup-dialog-menu"),v=document.querySelector(".popup-repair-types"),w=function(){y.parentElement.classList.toggle("visible"),y.classList.toggle("popup-dialog-menu--active")},S=function(){v.classList.add("visible")},document.addEventListener("click",(function(t){t.preventDefault();var e=t.target;if(e.closest(".close-menu")&&w(),e.closest(".menu__icon")&&w(),e.closest(".popup-menu-nav__item")){var i=document.getElementById(e.href.split("#")[1]).offsetTop;w(),window.scrollTo({top:i,behavior:"smooth"})}e.closest(".button-footer")&&window.scrollTo({top:0,behavior:"smooth"}),e.parentElement.matches(".link-list-repair")&&S(),e.parentElement.matches(".link-list-menu")&&(w(),S()),e.matches(".link-privacy")&&document.querySelector(".popup-privacy").classList.add("visible"),e.closest(".close")&&document.querySelectorAll(".popup").forEach((function(t){t.classList.remove("visible")}))})),document.querySelectorAll('input[name="phone"]').forEach((function(t){!function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__";function i(t){var i=t.keyCode,n=e,o=n.replace(/\D/g,""),s=this.value.replace(/\D/g,""),r=0,l=n.replace(/[_\d]/g,(function(t){return r<s.length?s.charAt(r++)||o.charAt(r):t}));-1!==(r=l.indexOf("_"))&&(l=l.slice(0,r));var a=n.substr(0,this.value.length).replace(/_+/g,(function(t){return"\\d{1,"+t.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test(this.value)||this.value.length<5||i>47&&i<58)&&(this.value=l),"blur"===t.type&&this.value.length<5&&(this.value="")}t.addEventListener("input",i),t.addEventListener("focus",i),t.addEventListener("blur",i)}(t)})),document.querySelectorAll(".formula-item__icon").forEach((function(t){t.addEventListener("mouseover",(function(e){!function(t,e){var i=t.parentElement.children[0],n=e.getBoundingClientRect().top;i.closest(".row").style.zIndex="1000",n<i.offsetHeight?(i.style.bottom="-".concat(i.offsetHeight+20,"px"),i.style.zIndex="1000",i.classList.add("popup-before")):(i.style.bottom="90px",i.classList.remove("popup-before")),i.style.visibility="visible",i.style.opacity="1"}(e.target,t)})),t.addEventListener("mouseout",(function(t){var e=t.target.parentElement.children[0];e.style.visibility="hidden",e.style.opacity="0.1",e.closest(".row").style.zIndex="0"}))})),new o({main:".formula-slider-wrap",wrapp:".formula-slider",slidesToShow:3,prev:"#formula-arrow_left",next:"#formula-arrow_right",loop:!0,activeSlide:!0,responsive:[{breackpoint:1024,slidesToShow:3},{breackpoint:768,slidesToShow:1}]}).init(),function(){var t=document.getElementById("repair-types"),e=document.querySelector(".repair-types-slider").children,i=document.querySelectorAll(".repair-types-nav__item"),n=new u({wrap:".types-repair1",next:"#repair-types-arrow_right",prev:"#repair-types-arrow_left",current:".slider-counter-content__current",total:".slider-counter-content__total"});n.init(),t.addEventListener("click",(function(t){var o=t.target;o.classList.contains("repair-types-nav__item")&&function(t){i.forEach((function(i,o){var s;i.classList.remove("active"),i===t&&(i.classList.add("active"),(s=e,function(t){if(Array.isArray(t))return f(t)}(s)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(s)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?f(t,e):void 0}}(s)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(t,e){t.style.display="none",n=null,e===o&&(t.style.display="block",(n=new u({wrap:".types-repair".concat(o+1),next:"#repair-types-arrow_right",prev:"#repair-types-arrow_left",current:".slider-counter-content__current",total:".slider-counter-content__total"})).init())})))}))}(o)}));var o=function(){var t=new c({main:".repair-types-nav",wrapp:".nav-list-repair",slidesToShow:1,prev:"#nav-arrow-repair-left_base",next:"#nav-arrow-repair-right_base",loop:!1,activeSlide:!1,widthWrapper:e[0].parentElement.offsetWidth});innerWidth<=1024?t.init():t.destroy()};o(),window.addEventListener("resize",o)}(),new(function(){function t(e){var i=e.slides,n=e.next,o=e.prev;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.slides=document.querySelectorAll(i),this.countMax=0,this.next=document.querySelector(n),this.prev=document.querySelector(o),this.step=this.slides[0].offsetWidth,this.count=0}var e,i;return e=t,(i=[{key:"init",value:function(){this.addStyles(),this.addListener(),this.adative(),this.getCountMax()}},{key:"addStyles",value:function(){this.slides.forEach((function(t){t.style.transition="0.5s"}))}},{key:"getCountMax",value:function(){this.countMax=Math.ceil(this.slides.length/(this.slides[0].parentElement.offsetWidth/this.slides[0].offsetWidth)),innerWidth<=900&&this.countMax--}},{key:"prevSlide",value:function(){--this.count,this.move(),this.showHideArrow()}},{key:"nextSlide",value:function(){++this.count,this.move(),this.showHideArrow()}},{key:"move",value:function(){var t=this;this.slides.forEach((function(e){e.style.transform="translateX(-".concat(t.step*t.count,"px)")}))}},{key:"showHideArrow",value:function(){0===this.count?this.prev.style.display="none":this.prev.style.display="flex",this.count===this.countMax?this.next.style.display="none":this.next.style.display="flex"}},{key:"adative",value:function(){var t=this;window.addEventListener("resize",(function(){t.getCountMax.bind(t)()}))}},{key:"addListener",value:function(){this.next&&this.prev&&(this.prev.addEventListener("click",this.prevSlide.bind(this)),this.next.addEventListener("click",this.nextSlide.bind(this)))}}])&&m(e.prototype,i),t}())({slides:".portfolio-slider__slide",next:"#portfolio-arrow_right",prev:"#portfolio-arrow_left"}).init(),new u({wrap:".portfolio-slider-mobile",next:"#portfolio-arrow-mobile_right",prev:"#portfolio-arrow-mobile_left",current:"#portfolio-mobile-current",total:"#portfolio-mobile-total"}).init()})();