const scroll__to__top = document.querySelector('.scrollup');
const html = document.querySelector('html');

scroll__to__top.addEventListener("click", () => {
    window.scrollTo({top:0, left:0, behavior:'smooth'});
});