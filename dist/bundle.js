(()=>{"use strict";function e(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||t(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const s=function(){function i(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.main=document.querySelector(e.main),this.wrap=document.querySelector(e.wrapp),this.slides=document.querySelector(e.wrapp).children,this.slidesToShow=e.slidesToShow,this.prev=document.querySelector(e.prev),this.next=document.querySelector(e.next),this.options={widthSlides:Math.floor(100/this.slidesToShow),position:0,maxPosition:this.slides.length-this.slidesToShow,activeSlide:e.activeSlide,loop:e.loop,countSlides:this.slides.length,widthWrapper:e.widthWrapper},this.responsive=e.responsive}var s,r;return s=i,(r=[{key:"init",value:function(){this.addStyle(),this.addGloClass(),this.options.loop&&this.cloneSlides(),this.options.maxPosition=this.slides.length-this.slidesToShow,this.controlSlider(),this.addActiveClass(),this.responsive&&this.responseInit()}},{key:"addStyle",value:function(){var e=document.getElementById("styleCarousel-style");e||((e=document.createElement("style")).id="styleCarousel-style"),e.textContent="\n                .glo-slider{\n                    overflow: hidden !important;\n                }\n                .glo-slider__wrap{\n                    display: flex !important;\n                    will-change: transform !important;\n                    align-items: flex-start;\n                }\n                .glo-slider__wrap--transition{\n                    transition: transform 0.5s !important;\n                }\n                .glo-slider__item{\n                    display: flex !important;\n                    align-items: center !important;\n                    justify-content: center !important;\n                    flex: 0 0 ".concat(this.options.widthSlides,"% !important;\n                }\n                .glo-slider__prev, .glo-slider__next{\n                    margin: 0 10px;\n                    border: 20px solid transparent;\n                    background: transparent;\n                    cursor: pointer;\n                    outline: none;\n                }\n                .glo-slider__prev{\n                    border-right-color: #19b5fe;\n                }\n                .glo-slider__next{\n                    border-left-color: #19b5fe;\n                }\n                .glo-slider__prev,\n                .glo-slider__next:hover{\n                    background: transparent !important;\n                }\n\n                .killed{\n                    display : none !important;\n                }\n\n                \n                \n                \n            "),document.head.appendChild(e)}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap"),this.wrap.classList.add("glo-slider__wrap--transition");var e,i=function(e,i){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=t(e))){n&&(e=n);var s=0,r=function(){};return{s:r,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){a=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(a)throw o}}}}(this.slides);try{for(i.s();!(e=i.n()).done;)e.value.classList.add("glo-slider__item")}catch(e){i.e(e)}finally{i.f()}}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.loop||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlides,"%)")),this.options.activeSlide&&this.addActiveClass()}},{key:"nextSlider",value:function(){this.options.loop?(this.options.loop||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.countSlides-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlides,"%)")):(this.options.position<this.slides[0].parentElement.offsetWidth-3*this.options.widthSlides&&++this.options.position,this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlides,"%)")),this.addActiveClass()}},{key:"addActiveClass",value:function(){var t=this;innerWidth<768?e(this.slides).forEach((function(e){e.style.opacity="1",e.children[0].children[0].classList.add("visible-prompt")})):this.options.activeSlide&&e(this.slides).forEach((function(e,i){e.style.opacity=".2",e.children[0].children[0].classList.remove("visible-prompt"),i===t.options.position+1&&(e.style.opacity="1",e.children[0].children[0].classList.add("visible-prompt"))}))}},{key:"cloneSlides",value:function(){var e=this.slides[0].cloneNode(!0);e.id="firstClone";var t=this.slides[this.slides.length-1].cloneNode(!0);t.id="lastClone",this.wrap.insertAdjacentElement("beforeend",e),this.wrap.insertAdjacentElement("afterbegin",t)}},{key:"responseInit",value:function(){var t=this,i=this.slidesToShow,n=this.responsive.map((function(e){return e.breackpoint})),s=Math.max.apply(Math,e(n)),r=function(){var e=document.documentElement.clientWidth;if(e<s){for(var r=0;r<n.length;r++)e<n[r]&&(t.slidesToShow=t.responsive[r].slidesToShow,t.options.widthSlides=Math.floor(100/t.slidesToShow),t.addStyle());e<768?(t.options.countSlides=t.slides.length-2,document.getElementById("firstClone").classList.add("killed"),document.getElementById("lastClone").classList.add("killed")):(t.options.countSlides=t.slides.length,document.getElementById("firstClone").classList.remove("killed"),document.getElementById("lastClone").classList.remove("killed"))}else t.slidesToShow=i,t.options.widthSlides=Math.floor(100/t.slidesToShow),t.addStyle();t.addActiveClass()};r(),window.addEventListener("resize",r)}}])&&n(s.prototype,r),i}();var r=function(e,t){var i=t.getBoundingClientRect().top-10;e.closest(".row").style.zIndex="1000",i<e.offsetHeight?(e.style.bottom="-".concat(e.offsetHeight+20,"px"),e.style.zIndex="1000",e.classList.add("popup-before")):(e.style.bottom="90px",e.classList.remove("popup-before")),e.style.visibility="visible",e.style.opacity="1"},o=function(e){e.style.visibility="hidden",e.style.opacity="0.1",e.closest(".row").style.zIndex="0"};function l(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=c(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0,s=function(){};return{s,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,l=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return o=e.done,e},e:function(e){l=!0,r=e},f:function(){try{o||null==i.return||i.return()}finally{if(l)throw r}}}}function c(e,t){if(e){if("string"==typeof e)return d(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function u(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.main=document.querySelector(t.main),this.wrap=document.querySelector(t.wrapp),this.slides=document.querySelector(t.wrapp).children,this.slidesToShow=t.slidesToShow,this.prev=document.querySelector(t.prev),this.next=document.querySelector(t.next),this.options={widthSlides:Math.floor(100/this.slidesToShow),position:0,maxPosition:this.slides.length-this.slidesToShow,activeSlide:t.activeSlide,loop:t.loop,countSlides:this.slides.length,widthWrapper:t.widthWrapper},this.responsive=t.responsive}var t,i;return t=e,(i=[{key:"init",value:function(){this.addStyle(),this.addsimpleClass(),this.options.loop&&this.cloneSlides(),this.options.maxPosition=this.slides.length-this.slidesToShow,this.controlSlider(),this.addActiveClass(),this.responsive&&this.responseInit()}},{key:"addStyle",value:function(){var e=document.getElementById("simpleSlider-style");e||((e=document.createElement("style")).id="simpleSlider-style"),e.textContent="\n                .simple-slider{\n                    overflow: hidden !important;\n                }\n                .simple-slider__wrap{\n                    display: flex !important;\n                    will-change: transform !important;\n                    align-items: flex-start;\n                }\n                .simple-slider__wrap--transition{\n                    transition: transform 0.5s !important;\n                }\n                .simple-slider__item{\n                    display: flex !important;\n                    align-items: center !important;\n                    justify-content: center !important;\n                    flex: 0 0 ".concat(this.options.widthSlides,"% !important;\n                }\n                .simple-slider__prev, .simple-slider__next{\n                    margin: 0 10px;\n                    border: 20px solid transparent;\n                    background: transparent;\n                    cursor: pointer;\n                    outline: none;\n                }\n                .simple-slider__prev{\n                    border-right-color: #19b5fe;\n                }\n                .simple-slider__next{\n                    border-left-color: #19b5fe;\n                }\n                .simple-slider__prev,\n                .simple-slider__next:hover{\n                    background: transparent !important;\n                }\n\n            "),document.head.appendChild(e)}},{key:"addsimpleClass",value:function(){this.main.classList.add("simple-slider"),this.wrap.classList.add("simple-slider__wrap"),this.wrap.classList.add("simple-slider__wrap--transition");var e,t=a(this.slides);try{for(t.s();!(e=t.n()).done;)e.value.classList.add("simple-slider__item")}catch(e){t.e(e)}finally{t.f()}}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlides,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlides,"%)"))}},{key:"addActiveClass",value:function(){var e=this;innerWidth<768?l(this.slides).forEach((function(e){e.style.opacity="1",e.children[0].children[0].classList.add("visible-prompt")})):this.options.activeSlide&&l(this.slides).forEach((function(t,i){t.style.opacity=".2",t.children[0].children[0].classList.remove("visible-prompt"),i===e.options.position+1&&(t.style.opacity="1",t.children[0].children[0].classList.add("visible-prompt"))}))}},{key:"cloneSlides",value:function(){var e=this.slides[0].cloneNode(!0);e.id="firstClone";var t=this.slides[this.slides.length-1].cloneNode(!0);t.id="lastClone",this.wrap.insertAdjacentElement("beforeend",e),this.wrap.insertAdjacentElement("afterbegin",t)}},{key:"responseInit",value:function(){var e=this,t=this.slidesToShow,i=this.responsive.map((function(e){return e.breackpoint})),n=Math.max.apply(Math,l(i)),s=function(){var s=document.documentElement.clientWidth;if(s<n){for(var r=0;r<i.length;r++)s<i[r]&&(e.slidesToShow=e.responsive[r].slidesToShow,e.options.widthSlides=Math.floor(100/e.slidesToShow),e.addStyle());s<768?(e.options.countSlides=e.slides.length-2,document.getElementById("firstClone").classList.add("killed"),document.getElementById("lastClone").classList.add("killed")):(e.options.countSlides=e.slides.length,document.getElementById("firstClone").classList.remove("killed"),document.getElementById("lastClone").classList.remove("killed"))}else e.slidesToShow=t,e.options.widthSlides=Math.floor(100/e.slidesToShow),e.addStyle();e.addActiveClass()};s(),window.addEventListener("resize",s)}},{key:"destroy",value:function(){this.main.classList.remove("simple-slider"),this.wrap.classList.remove("simple-slider__wrap"),this.wrap.classList.remove("simple-slider__wrap--transition");var e,t=a(this.slides);try{for(t.s();!(e=t.n()).done;)e.value.classList.remove("simple-slider__item")}catch(e){t.e(e)}finally{t.f()}this.wrap.style.transform="none"}}])&&u(t.prototype,i),e}();function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function f(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const v=function(){function e(t){var i=t.wrap,n=t.next,s=t.prev,r=t.current,o=t.total;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrap=document.querySelector(i),this.slides=document.querySelector(i).children,this.next=document.querySelector(n),this.prev=document.querySelector(s),this.countSlide=0,this.maxSlides=this.slides.length,this.current=document.querySelector(r),this.total=document.querySelector(o)}var t,i;return t=e,(i=[{key:"init",value:function(){this.addListener(),this.showCurentSlide(1),this.total.textContent=this.maxSlides}},{key:"showSlide",value:function(){var e,t=this;(e=this.slides,function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?p(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e,i){e.style.display="none",i===t.countSlide&&(e.style.display="block",t.showCurentSlide(i+1))}))}},{key:"nextSlide",value:function(){++this.countSlide,this.countSlide>=this.slides.length&&(this.countSlide=0),this.showSlide()}},{key:"prevSlide",value:function(){--this.countSlide,this.countSlide<0&&(this.countSlide=this.slides.length-1),this.showSlide()}},{key:"addListener",value:function(){this.next&&this.prev&&(this.next.addEventListener("click",this.nextSlide.bind(this)),this.prev.addEventListener("click",this.prevSlide.bind(this)))}},{key:"showCurentSlide",value:function(e){this.current.textContent=e}},{key:"destroy",value:function(){}}])&&f(t.prototype,i),e}();function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function y(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function w(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var g=function(){function e(t){var i=t.wrap,n=t.next,s=t.prev,r=t.activeClass,o=void 0===r?"active":r,l=t.counter,a=t.total;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrap=document.querySelector(i),this.slides=this.wrap.children,this.next=document.querySelector(n),this.prev=document.querySelector(s),this.count=0,this.activeClass=o,this.counter=document.querySelector(l),this.total=document.querySelector(a)}var t,i;return t=e,(i=[{key:"init",value:function(){this.addListener(),this.showCount()}},{key:"showSlide",value:function(){var e,t=this;(e=this.slides,function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?S(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e,i){e.classList.remove(t.activeClass),i===t.count&&e.classList.add(t.activeClass)})),this.showCount()}},{key:"showCount",value:function(){this.counter&&this.total&&(this.counter.textContent=this.count+1,this.total.textContent=this.slides.length)}},{key:"nextSlide",value:function(){++this.count,this.count>this.slides.length-1&&(this.count=0),this.showSlide()}},{key:"prevSlide",value:function(){--this.count,this.count<0&&(this.count=this.slides.length-1),this.showSlide()}},{key:"addListener",value:function(){this.next&&this.prev&&(this.next.addEventListener("click",this.nextSlide.bind(this)),this.prev.addEventListener("click",this.prevSlide.bind(this)))}}])&&w(t.prototype,i),e}();function b(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function E(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var L=function(){function e(t){var i=t.wrap,n=t.slider,s=t.activClass,r=t.classForSlider,o=t.classForWrapper,l=t.classForSlide,a=t.slidesToShow,c=t.prev,d=t.next;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrap=document.querySelector(i),this.slider=document.querySelector(n),this.slides=this.slider.children,this.activClass=s,this.classForSlider=r,this.classForWrapper=o,this.classForSlide=l,this.slidesToShow=a,this.widthSlides=Math.floor(100/this.slidesToShow),this.prev=document.querySelector(c),this.next=document.querySelector(d),this.currentSlide=0}var t,i;return t=e,(i=[{key:"init",value:function(){this.addClass(),this.addStyles(),this.addListener(),this.addActiveClass()}},{key:"addClass",value:function(){var e=this;this.slider.classList.add(this.classForSlider),this.wrap.classList.add(this.classForWrapper),this.classForSlide&&b(this.slides).forEach((function(t){t.classList.add(e.classForSlide)}))}},{key:"addStyles",value:function(){var e=this;this.classForSlide||b(this.slides).forEach((function(t){t.style.maxWidth="".concat(e.widthSlides,"%"),t.style.display="flex",t.style.flex="0 0 ".concat(e.widthSlides,"%")}))}},{key:"nextSlide",value:function(){this.all?console.log(!0):(++this.currentSlide,this.currentSlide>this.slides.length-1&&(this.currentSlide=0),this.move())}},{key:"prevSlide",value:function(){--this.currentSlide,this.currentSlide<0&&(this.currentSlide=this.slides.length-1),this.move()}},{key:"addActiveClass",value:function(){var e=this;b(this.slides).forEach((function(t,i){t.classList.remove(e.activClass),i===e.currentSlide&&t.classList.add(e.activClass)}))}},{key:"addListener",value:function(){this.prev.addEventListener("click",this.prevSlide.bind(this)),this.next.addEventListener("click",this.nextSlide.bind(this))}},{key:"move",value:function(){this.slider.style.transform="translateX(-".concat(this.widthSlides*this.currentSlide,"%)"),this.addActiveClass()}},{key:"destroy",value:function(){var e=this;this.slider.classList.remove(this.classForSlider),this.wrap.classList.remove(this.classForWrapper),this.classForSlide&&b(this.slides).forEach((function(t){t.classList.remove(e.classForSlide)})),this.slider.style.transform="none"}}])&&E(t.prototype,i),e}();function x(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?k(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var A,C,q,T,I,j,O,M,W,B,F,P;F=document.querySelector(".header-contacts__arrow"),P=document.querySelector(".header-contacts__phone-number-accord"),F.addEventListener("click",(function(){F.children[0].classList.toggle("header-contacts__arrow--active"),P.classList.toggle("header-contacts__phone-number-accord--active")})),O=document.querySelector(".popup-dialog-menu"),M=document.querySelector(".popup-repair-types"),W=function(){O.parentElement.classList.toggle("visible"),O.classList.toggle("popup-dialog-menu--active")},B=function(){M.classList.add("visible")},document.addEventListener("click",(function(e){e.preventDefault();var t=e.target;if(t.closest(".close-menu")&&W(),t.closest(".menu__icon")&&W(),t.closest(".popup-menu-nav__item")){var i=document.getElementById(t.href.split("#")[1]).offsetTop;W(),window.scrollTo({top:i,behavior:"smooth"})}t.closest(".button-footer")&&window.scrollTo({top:0,behavior:"smooth"}),t.parentElement.matches(".link-list-repair")&&B(),t.parentElement.matches(".link-list-menu")&&(W(),B()),t.matches(".link-privacy")&&document.querySelector(".popup-privacy").classList.add("visible"),t.closest(".close")&&document.querySelectorAll(".popup").forEach((function(e){e.classList.remove("visible")}))})),document.querySelectorAll('input[name="phone"]').forEach((function(e){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__";function i(e){var i=e.keyCode,n=t,s=n.replace(/\D/g,""),r=this.value.replace(/\D/g,""),o=0,l=n.replace(/[_\d]/g,(function(e){return o<r.length?r.charAt(o++)||s.charAt(o):e}));-1!==(o=l.indexOf("_"))&&(l=l.slice(0,o));var a=n.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test(this.value)||this.value.length<5||i>47&&i<58)&&(this.value=l),"blur"===e.type&&this.value.length<5&&(this.value="")}e.addEventListener("input",i),e.addEventListener("focus",i),e.addEventListener("blur",i)}(e)})),document.querySelectorAll(".formula-item__icon").forEach((function(e){e.addEventListener("mouseover",(function(t){r(t.target.parentElement.children[0],e)})),e.addEventListener("mouseout",(function(e){var t=e.target.parentElement.children[0];o(t)}))})),new s({main:".formula-slider-wrap",wrapp:".formula-slider",slidesToShow:3,prev:"#formula-arrow_left",next:"#formula-arrow_right",loop:!0,activeSlide:!0,responsive:[{breackpoint:1024,slidesToShow:3},{breackpoint:768,slidesToShow:1}]}).init(),function(){var e=document.getElementById("repair-types"),t=document.querySelector(".repair-types-slider").children,i=document.querySelectorAll(".repair-types-nav__item"),n=new v({wrap:".types-repair1",next:"#repair-types-arrow_right",prev:"#repair-types-arrow_left",current:".slider-counter-content__current",total:".slider-counter-content__total"});n.init(),e.addEventListener("click",(function(e){var s=e.target;s.classList.contains("repair-types-nav__item")&&function(e){i.forEach((function(i,s){var r;i.classList.remove("active"),i===e&&(i.classList.add("active"),(r=t,function(e){if(Array.isArray(e))return m(e)}(r)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?m(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e,t){e.style.display="none",n=null,t===s&&(e.style.display="block",(n=new v({wrap:".types-repair".concat(s+1),next:"#repair-types-arrow_right",prev:"#repair-types-arrow_left",current:".slider-counter-content__current",total:".slider-counter-content__total"})).init())})))}))}(s)}));var s=function(){var e=new h({main:".repair-types-nav",wrapp:".nav-list-repair",slidesToShow:1,prev:"#nav-arrow-repair-left_base",next:"#nav-arrow-repair-right_base",loop:!1,activeSlide:!1,widthWrapper:t[0].parentElement.offsetWidth});innerWidth<=1024?e.init():e.destroy()};s(),window.addEventListener("resize",s)}(),I=document.querySelector(".portfolio-slider-wrap"),j=document.querySelector(".popup-portfolio"),new(function(){function e(t){var i=t.slides,n=t.next,s=t.prev;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.slides=document.querySelectorAll(i),this.countMax=0,this.next=document.querySelector(n),this.prev=document.querySelector(s),this.step=this.slides[0].offsetWidth,this.count=0}var t,i;return t=e,(i=[{key:"init",value:function(){this.addStyles(),this.addListener(),this.adative(),this.getCountMax()}},{key:"addStyles",value:function(){this.slides.forEach((function(e){e.style.transition="0.5s"}))}},{key:"getCountMax",value:function(){this.countMax=Math.ceil(this.slides.length/(this.slides[0].parentElement.offsetWidth/this.slides[0].offsetWidth)),innerWidth<=900&&this.countMax--}},{key:"prevSlide",value:function(){--this.count,this.move(),this.showHideArrow()}},{key:"nextSlide",value:function(){++this.count,this.move(),this.showHideArrow()}},{key:"move",value:function(){var e=this;this.slides.forEach((function(t){t.style.transform="translateX(-".concat(e.step*e.count,"px)")}))}},{key:"showHideArrow",value:function(){0===this.count?this.prev.style.display="none":this.prev.style.display="flex",this.count===this.countMax?this.next.style.display="none":this.next.style.display="flex"}},{key:"adative",value:function(){var e=this;window.addEventListener("resize",(function(){e.getCountMax.bind(e)()}))}},{key:"addListener",value:function(){this.next&&this.prev&&(this.prev.addEventListener("click",this.prevSlide.bind(this)),this.next.addEventListener("click",this.nextSlide.bind(this)))}}])&&y(t.prototype,i),e}())({slides:".portfolio-slider__slide",next:"#portfolio-arrow_right",prev:"#portfolio-arrow_left"}).init(),new v({wrap:".portfolio-slider-mobile",next:"#portfolio-arrow-mobile_right",prev:"#portfolio-arrow-mobile_left",current:"#portfolio-mobile-current",total:"#portfolio-mobile-total"}).init(),I.addEventListener("click",(function(e){e.target.classList.contains("portfolio-slider__slide-frame")&&j.classList.add("visible")})),function(){var e=document.querySelectorAll(".popup-portfolio-slider__slide"),t=document.querySelectorAll(".popup-portfolio-text"),i=document.getElementById("popup_portfolio_right"),n=document.getElementById("popup_portfolio_left"),s=document.getElementById("popup-portfolio-current"),r=document.getElementById("popup-portfolio-total"),o=0;r.textContent=t.length;var l=function(){for(var i=0;i<t.length;i++)e[i].style.display="none",t[i].style.display="none",i===o&&(e[i].style.display="block",t[i].style.display="block");s.textContent=o+1};l(),i.addEventListener("click",(function(){++o>=t.length&&(o=0),l()})),n.addEventListener("click",(function(){--o<0&&(o=t.length-1),l()}))}(),new g({wrap:".transparency-slider",next:"#transparency-arrow_right",prev:"#transparency-arrow_left",activeClass:"active-doc"}).init(),q=document.querySelector(".transparency-slider"),T=document.querySelector(".popup-transparency"),q.addEventListener("click",(function(e){e.target.closest(".transparency-item__img")&&T.classList.add("visible")})),new g({wrap:".popup-transparency-slider",next:"#transparency_right",prev:"#transparency_left",activeClass:"active-doc",counter:"#popup-transparency-curent",total:"#popup-transparency-total"}).init(),A=document.querySelector(".accordion"),C=A.querySelectorAll(".title_block"),A.addEventListener("click",(function(e){var t=e.target;"H2"===t.tagName&&function(e){C.forEach((function(t){t.classList.remove("msg-active"),t===e&&t.classList.add("msg-active")}))}(t)})),document.querySelectorAll(".problems-item__icon--desctop").forEach((function(e){e.addEventListener("mouseover",(function(t){var i=t.target.closest(".problems-item__icon--desctop");i&&r(i.children[0],e)})),e.addEventListener("mouseout",(function(e){var t=e.target.closest(".problems-item__icon--desctop");if(t){var i=t.children[0];o(i)}}))})),new L({wrap:".problems-slider-wrap",slider:".problems-slider",activClass:"active-item",classForSlider:"carousel-slider",classForWrapper:"carousel-wrapper",classForSlide:"",slidesToShow:1,prev:"#problems-arrow_left",next:"#problems-arrow_right"}).init(),function(){var e=document.getElementById("designs"),t=document.querySelectorAll(".designs-nav__item"),i=document.querySelectorAll(".designs-slider-item"),n=document.querySelectorAll(".preview-block"),s=document.getElementById("slider-counter-responsive-current"),r=document.getElementById("slider-counter-responsive-total"),o=document.querySelector(".popup-design"),l=document.querySelectorAll(".designs-nav__item_popup"),a=document.querySelectorAll(".popup-designs-slider__item"),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;r.textContent=e,s.textContent=t},d=function(e,t,i){e.forEach((function(e,n){e.classList.remove(i),n===t&&e.classList.add(i)}))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=document.querySelector(".designs-slider-item--active").children;d(x(t),e,"designs-slide-active")},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=document.querySelector(".popup-designs-slider__item--active").children;d(x(t),e,"designs-slide-active")},p=function(e,t,i,s,r,o,l,a){i.forEach((function(i,u){i.classList.remove(s),t===i&&(f=u,i.classList.add(s),r&&d(r,u,o),l&&d(l,u,a),e(),l&&n.forEach((function(e){x(e.children).forEach((function(e,t){e.children[0].classList.remove("preview_active"),0===t&&e.children[0].classList.add("preview_active")}))})),c(r[u].children.length))}))};o.addEventListener("click",(function(e){var t=e.target;"BUTTON"===t.tagName&&p(h,t,l,"active",a,"popup-designs-slider__item--active")}));var f=0;e.addEventListener("click",(function(s){var r=s.target;if("BUTTON"===r.tagName&&p(u,r,t,"active",i,"designs-slider-item--active",n,"visible"),r.closest(".preview-block__item")){var l=r.parentElement.parentElement.children;x(l).forEach((function(e,t){e===r.parentElement&&(u(t),c(l.length,t+1))})),x(l).forEach((function(e){e.children[0].classList.remove("preview_active"),e.children[0]===r&&e.children[0].classList.add("preview_active")}))}if(r.closest(".slider-arrow-tablet-mobile_right")){var a,d=e.querySelector(".designs-slider-item--active").children;x(d).forEach((function(e,t){e.classList.contains("designs-slide-active")&&(a=t)})),++a>d.length-1&&(a=0),x(d).forEach((function(e,t){e.classList.remove("designs-slide-active"),t===a&&e.classList.add("designs-slide-active")})),x(n[f].children).forEach((function(e,t){e.children[0].classList.remove("preview_active"),t===a&&e.children[0].classList.add("preview_active")})),c(d.length,a+1)}if(r.closest(".slider-arrow-tablet-mobile_left")){var h,v=e.querySelector(".designs-slider-item--active").children;x(v).forEach((function(e,t){e.classList.contains("designs-slide-active")&&(h=t)})),--h<0&&(h=v.length-1),x(v).forEach((function(e,t){e.classList.remove("designs-slide-active"),t===h&&e.classList.add("designs-slide-active")})),x(n[f].children).forEach((function(e,t){e.children[0].classList.remove("preview_active"),t===h&&e.children[0].classList.add("preview_active")})),c(v.length,h+1)}r.matches(".link-list-designs a")&&o.classList.add("visible")})),d(i,0,"designs-slider-item--active"),d(n,0,"visible"),u(0);var v=function(){var e=new L({wrap:".nav-designs",slider:".nav-list-designs",activClass:"test",classForSlider:"carousel-slider",classForWrapper:"designs-slider-wrapper",classForSlide:"designs-slider-button",slidesToShow:1,prev:"#nav-arrow-designs_left",next:"#nav-arrow-designs_right"});innerWidth<1135?e.init():e.destroy()};window.addEventListener("resize",(function(){v()})),v()}()})();