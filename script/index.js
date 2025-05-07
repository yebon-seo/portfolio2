 /*작은화면 메뉴 토글버튼*/
 const toggleBtn = document.querySelector(".togglebtn");
 const gnb = document.querySelector(".s-gnb");
 const closeBtn = document.querySelector(".close-btn")
 const body = document.querySelector("body")

 // console.log(gnb)
 toggleBtn.addEventListener("click", () => {
   gnb.style.right = 0
   body.classList.add("dark-mode")

 })
 closeBtn.addEventListener("click", () => {
   gnb.style.right = "-100%"
   body.classList.remove("dark-mode")
 })

 /*스와이퍼*/
 const swiper = new Swiper('.swiper', {
   loop: true,
   slidesPerView: 5,
   spaceBetween: 20,
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   autoplay: {
     delay: 3000,
     disableOnInteraction: false,
   },

   // 반응형 설정
   breakpoints: {
     // 화면 너비가 1200px 이상일 때
     1200: {
       slidesPerView: 5,
     },
     // 화면 너비가 1024px 이상일 때
     1024: {
       slidesPerView: 4,
     },
     // 화면 너비가 768px 이상일 때
     768: {
       slidesPerView: 3.5,
     },
     // 화면 너비가 480px 이상일 때
     480: {
       slidesPerView: 1.5,
     },
     // 그보다 작을 때
     0: {
       slidesPerView: 1,
     },
   }
 });

 /*스와이퍼*/
 const swiper1 = new Swiper('.swiper1', {
   loop: true,
   slidesPerView: 3.5,
   spaceBetween: 20,
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   navigation: {
     nextEl: '.rbtn',
     prevEl: '.lbtn',
   },
   autoplay: {
     delay: 3000,
     disableOnInteraction: false,
   },

   // 반응형 설정
   breakpoints: {
     // 화면 너비가 1200px 이상일 때
     1200: {
       slidesPerView: 3.5,
     },

     // 화면 너비가 370px 이상일 때
     370: {
       slidesPerView: 1.5,
     },
   }
 });




 /*footer-nav*/
 const navLi = document.querySelectorAll("#bottom-nav > .container > .nav > li")

 navLi.forEach(li => {
   li.addEventListener("click", (e) => {
     e.preventDefault();

     navLi.forEach(el => {
       el.querySelector(".sub").style.maxHeight = "0"
     })
     const sub = li.querySelector(".sub");
     const currentHeight = getComputedStyle(sub).maxHeight;

     if (currentHeight === "0px") {
       sub.style.maxHeight = sub.scrollHeight + "px";
     } else {
       sub.style.maxHeight = "0";
     }
   })
 })

 // AOS 초기화
 AOS.init({
   duration: 1200,  // 애니메이션 지속 시간 (ms)
   once: true       // 한 번만 애니메이션 실행 (스크롤 시마다 반복 안함)
 });

