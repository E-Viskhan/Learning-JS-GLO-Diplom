(()=>{"use strict";const e=()=>{document.body.style.marginRight=`${(()=>{let e=0;if(Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)>document.documentElement.clientHeight){let t=document.createElement("div");t.style.width="500px",t.style.height="500px",t.style.overflowY="scroll",t.style.visibility="hidden",document.body.appendChild(t),e=t.offsetWidth-t.clientWidth,t.remove()}return e})()}px`,document.body.style.overflow="hidden"},t=()=>{document.body.style.marginRight="0",document.body.style.overflow="auto"},o=(e,t)=>{t.preventDefault();const o=e.getAttribute("href").substring(1),r=document.getElementById(o).getBoundingClientRect().top;window.scrollBy({top:r,behavior:"smooth"})},r=(o,r="")=>{o.classList.toggle("popup--active"),o.classList.contains("popup--active")?e():t(),o.matches(".popup-repair-types.popup--active")&&r.preventDefault()},s=({slidesClass:e,prevSelector:t,nextSelector:o,slidesWrapperClass:r,slidesFieldClass:s,totalClass:l,currentClass:n,changeDisplayClass:i=!1,hideArrows:a=!1,slidesPerView:c=1,initialSlide:p=!1})=>{const d=document.querySelector(r),u=d.querySelector(s),y=u.querySelectorAll(e),m=document.querySelector(t),f=document.querySelector(o),h=getComputedStyle(d).width,_=document.querySelector(n),g=document.querySelector(l),v=document.querySelectorAll(i),C=Math.ceil(parseFloat(h)/c),S=()=>"none"!==getComputedStyle(u).display,w=()=>{const e=_?+_.textContent-1:0,t=0===e?y.length-1:e-1;v[t].style.display="none",v[e].style.display="block"},x=()=>{b=+u.style.transform.match(/([0-9\.]+)/)[0]};let b=0;g&&(g.textContent=1===c?y.length:y.length-(c-1)),v.length&&w(),u.style.width=100*y.length/c+"%",u.style.display="flex",u.style.minWidth="max-content",u.style.transition="0.5s all",d.style.overflow="hidden",y.forEach((e=>{e.style.width=C+"px"})),f.addEventListener("click",(()=>{S()&&(p&&x(),_&&(+_.textContent===y.length?_.textContent=1:_.textContent=+_.textContent+1),v.length&&w(),a?(m.style.display="flex",b/C+1>=y.length-c&&(f.style.display="none"),b+=C):b>=C*(y.length-1)?(console.log("true"),b=0):b+=C,u.style.transform=`translateX(-${b}px)`)})),m.addEventListener("click",(()=>{S()&&(p&&x(),_&&(1==+_.textContent?_.textContent=y.length:_.textContent=+_.textContent-1),v.length&&w(),a?(f.style.display="flex",b<=C&&(m.style.display="none"),b-=C):b<=0?b=C*(y.length-1):b-=C,u.style.transform=`translateX(-${b}px)`)}))};(()=>{const s=document.querySelector(".header-contacts__arrow"),l=s.querySelector("img"),n=document.querySelector(".header-contacts__phone-number-accord"),i=n.querySelector(".header-contacts__phone-number"),a=document.querySelector(".menu__icon"),c=document.querySelector(".popup-menu"),p=c.querySelector(".popup-dialog-menu"),d=document.querySelectorAll(".show-all-services"),u=document.querySelector(".popup-repair-types"),y=document.querySelector(".popup-privacy");s.addEventListener("click",(()=>{n.classList.toggle("header-contacts__phone-number-accord--open"),i.classList.toggle("header-contacts__phone-number--show"),l.classList.toggle("header-contacts__arrow-img--open")}));const m=()=>{c.classList.remove("popup-menu--active"),p.classList.remove("popup-dialog-menu--active"),t()};a.addEventListener("click",(()=>{c.classList.add("popup-menu--active"),p.classList.add("popup-dialog-menu--active"),e()})),document.addEventListener("click",(e=>{const t=e.target;if(t.closest(".close-menu")||t.classList.contains("popup-menu--active"))m();else if(t.closest(".popup-menu-nav__item"))o(t,e),m();else if(t.closest(".button-footer")){const r=t.closest(".button-footer").querySelector("a");o(r,e)}else if(t.classList.contains("link-privacy"))r(y);else if(t.closest(".close")||t.classList.contains("popup--active")){const e=t.closest(".popup--active");r(e)}})),d.forEach((e=>e.addEventListener("click",(e=>{r(u,e)}))))})(),document.querySelectorAll("form").forEach((e=>e.addEventListener("submit",(function(e){const t=this.querySelectorAll("input[type=text]"),o=this.querySelector("input[type=checkbox]");let r=!0;if(t.forEach((e=>{switch(e.name){case"phone":e.value<18&&(alert("Пожалуйста, введите номер телефона."),r=!1);break;case"name":""===e.value.trim()&&(alert("Пожалуйста, напишите ваше имя."),r=!1)}})),o.checked||(alert("Пожалуйста, дайте согласие на обработку персональных данных."),r=!1),r){const e=new FormData(this);let t={};e.forEach(((e,o)=>{t[o]=e})),s=t,fetch("../server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((e=>e.json())).catch((()=>console.error(new Error("Ошибка отправки данных из формы")))),this.reset()}var s;e.preventDefault()})))),function(e,t="+7 (___) ___-__-__"){const o=document.querySelectorAll(e);function r(e){const o=e.keyCode,r=t,s=r.replace(/\D/g,""),l=this.value.replace(/\D/g,"");let n=0,i=r.replace(/[_\d]/g,(function(e){return n<l.length?l.charAt(n++)||s.charAt(n):e}));n=i.indexOf("_"),-1!=n&&(i=i.slice(0,n));let a=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(this.value)||this.value.length<5||o>47&&o<58)&&(this.value=i),"blur"==e.type&&this.value.length<5&&(this.value="")}for(const e of o)e.addEventListener("input",r),e.addEventListener("focus",r),e.addEventListener("blur",r)}('input[data-mask="phone"'),(()=>{const e=document.querySelectorAll(".mobile-hide .formula-item__icon"),t=document.querySelector(":root");e.forEach((e=>{e.addEventListener("mouseenter",(function(e){const o=e.target.closest(".formula-item"),r=o.querySelector(".formula-item-popup"),s=o.getBoundingClientRect().top,l=parseInt(getComputedStyle(r).height)+15;s<l?(t.style.setProperty("--number-degrees","180deg"),r.style.paddingTop="40px",r.style.bottom=-(l+15)+"px"):(t.style.setProperty("--number-degrees",0),r.style.paddingTop="20px",r.style.bottom="90px"),o.classList.add("active-item")})),e.addEventListener("mouseleave",(function(e){e.target.closest(".formula-item").classList.remove("active-item")}))}));const o=document.querySelectorAll(".desktop-hide .formula-item__icon");t.style.setProperty("--number-degrees","180deg"),o.forEach((e=>{e.addEventListener("click",(e=>{e.target.closest(".formula-item").classList.toggle("active-item")}))})),s({slidesClass:".formula-slider__slide",prevSelector:"#formula-arrow_left",nextSelector:"#formula-arrow_right",slidesWrapperClass:".formula-slider-wrap",slidesFieldClass:".formula-slider"})})(),(()=>{const e=document.querySelectorAll(".repair-types__tab-content");(({tabsContainerClass:e,tabClass:t,contentClass:o})=>{const r=document.querySelector(e),s=r.querySelectorAll(t),l=document.querySelectorAll(o),n=document.querySelector(".slider-counter-content__total"),i=document.querySelector(".slider-counter-content__current");r.addEventListener("click",(e=>{const o=e.target.closest(t);o&&s.forEach(((e,t)=>{o===e?(e.classList.add("active"),l[t].classList.remove("d-none"),(e=>{const t=l[e].querySelectorAll(".repair-types-slider__slide").length;n.textContent=t,i.textContent=1,l[e].style.transform="translateX(0)"})(t)):(e.classList.remove("active"),l[t].classList.add("d-none"))}))}))})({tabsContainerClass:".nav-list-repair",tabClass:".repair-types-nav__item",contentClass:".repair-types__tab-content"}),window.screen.width<1025&&s({slidesClass:".repair-types-nav__item",prevSelector:"#nav-arrow-repair-left_base",nextSelector:"#nav-arrow-repair-right_base",slidesWrapperClass:".repair-types-nav",slidesFieldClass:".nav-list-repair"}),e.forEach(((e,t)=>{s({slidesClass:`.types-repair${t+1} .repair-types-slider__slide`,prevSelector:"#repair-types-arrow_left",nextSelector:"#repair-types-arrow_right",slidesWrapperClass:".repair-types-slider",slidesFieldClass:`.types-repair${t+1}`,currentClass:".slider-counter-content__current",totalClass:".slider-counter-content__total"})}))})(),document.querySelector(".portfolio-slider-container").addEventListener("click",(e=>{if(e.target.classList.contains("portfolio-slider__slide-frame")){const t=document.querySelector(".popup-portfolio");(e=>{const t=+e.target.closest(".portfolio-slider__slide-frame").dataset.initialSlide;console.log("~ initialSlide",t);const o=document.querySelector(".popup-portfolio-slider"),r=o.querySelector(".popup-portfolio-slider__slide"),s=parseFloat(r.style.width),l=document.querySelector("#popup-portfolio-counter .slider-counter-content__current");document.querySelectorAll(".popup-portfolio-text").forEach(((e,o)=>{e.style.display=o===t-1?"block":"none"})),o.style.transform=`translateX(-${s*(t-1)}px)`,l.textContent=t})(e),r(t)}})),s({slidesWrapperClass:".popup-portfolio-slider-wrap",slidesFieldClass:".popup-portfolio-slider",slidesClass:".popup-portfolio-slider__slide",prevSelector:"#popup_portfolio_left",nextSelector:"#popup_portfolio_right",currentClass:"#popup-portfolio-counter .slider-counter-content__current",totalClass:"#popup-portfolio-counter .slider-counter-content__total",changeDisplayClass:".popup-portfolio-text",initialSlide:!0}),window.screen.width>1025?s({slidesWrapperClass:".portfolio-slider-container",slidesFieldClass:".portfolio-slider.mobile-hide",slidesClass:".portfolio-slider__slide",prevSelector:"#portfolio-arrow_left",nextSelector:"#portfolio-arrow_right",slidesPerView:3,hideArrows:!0}):window.screen.width>=900?s({slidesWrapperClass:".portfolio-slider-container",slidesFieldClass:".portfolio-slider.mobile-hide",slidesClass:".portfolio-slider__slide",prevSelector:"#portfolio-arrow_left",nextSelector:"#portfolio-arrow_right",slidesPerView:2,totalClass:"#portfolio-counter .slider-counter-content__total",currentClass:"#portfolio-counter .slider-counter-content__current",hideArrows:!0}):window.screen.width>=576?s({slidesWrapperClass:".portfolio-slider-container",slidesFieldClass:".portfolio-slider.mobile-hide",slidesClass:".portfolio-slider__slide",prevSelector:"#portfolio-arrow_left",nextSelector:"#portfolio-arrow_right",totalClass:"#portfolio-counter .slider-counter-content__total",currentClass:"#portfolio-counter .slider-counter-content__current",hideArrows:!0}):s({slidesWrapperClass:".portfolio-slider-container",slidesFieldClass:".portfolio-slider-mobile",slidesClass:".portfolio-slider__slide-frame",prevSelector:"#portfolio-arrow-mobile_left",nextSelector:"#portfolio-arrow-mobile_right",totalClass:"#portfolio-counter .slider-counter-content__total",currentClass:"#portfolio-counter .slider-counter-content__current",hideArrows:!0}),document.querySelector(".transparency-slider").addEventListener("click",(e=>{const t=e.target;if(t.classList.contains("transparency-item__img")){const o=document.querySelector(".popup-transparency"),s=+t.closest(".transparency-item").dataset.initialSlide,l=document.querySelector(".popup-transparency-container"),n=l.querySelector(".popup-transparency-slider__slide"),i=parseFloat(n.style.width),a=document.querySelector("#transparency-popup-counter .slider-counter-content__current");l.style.transform=`translateX(-${i*(s-1)}px)`,a.textContent=s,r(o,e)}})),s({slidesWrapperClass:".popup-transparency-slider",slidesFieldClass:".popup-transparency-container",slidesClass:".popup-transparency-slider__slide",prevSelector:"#transparency_left",nextSelector:"#transparency_right",currentClass:"#transparency-popup-counter .slider-counter-content__current",totalClass:"#transparency-popup-counter .slider-counter-content__total",initialSlide:!0}),window.screen.width<1090&&s({slidesWrapperClass:".transparency-slider-wrap",slidesFieldClass:".transparency-slider",slidesClass:".transparency-item",prevSelector:"#transparency-arrow_left",nextSelector:"#transparency-arrow_right"}),window.addEventListener("resize",(()=>{}))})();