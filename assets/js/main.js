
// toggle button
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});



// package 
const swiper = new Swiper('.swiper-pac', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
    navigation: {
        nextEl: '.swiper-button-next-pac',
        prevEl: '.swiper-button-prev-pac',
    },
});


// destination 
const DesSwiper = new Swiper('.swiper-des', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
    navigation: {
        nextEl: '.swiper-button-next-des',
        prevEl: '.swiper-button-prev-des',
    },
});

// //test
// const swiperTest = new Swiper('.testimonials-swiper', {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     loop: true,
//     breakpoints: {
//         768: { slidesPerView: 2 },
//         1024: { slidesPerView: 3 },
//     },
//     navigation: {
//         nextEl: '.swiper-button-next-test',
//         prevEl: '.swiper-button-prev-test',
//     },
// });


const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        tabContents.forEach(content => content.classList.add('hidden'));
        if (tab === 'reviews') document.querySelector('#reviewsContent').classList.remove('hidden');
        else if (tab === 'videos') document.querySelector('#videosContent').classList.remove('hidden');
    });
});

// Initialize Swipers
const swiperTest = new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
    navigation: { nextEl: '.swiper-button-next-test', prevEl: '.swiper-button-prev-test' },
});

const swiperVideos = new Swiper('.videos-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
    navigation: { nextEl: '.swiper-button-next-video', prevEl: '.swiper-button-prev-video' },
});




// doc
const swiperDoc = new Swiper('.myDocsSwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
    pagination: { el: '.swiper-pagination', clickable: true },
    autoplay: { delay: 3000 },
});


// related
const Relatedswiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next-destpac",
      prevEl: ".swiper-button-prev-destpac",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });