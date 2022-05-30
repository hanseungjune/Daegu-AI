const toggleBtn = document.querySelector('.navbar__toggleBtn');
// const submenu__toggleBtn = document.querySelector('.submenu__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');
// const submenu = document.querySelector('.navbar__submenu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})

// submenu__toggleBtn.addEventListener('click', () => {
    // submenu.classList.toggle('active');
// })

// Categories 에 마우스를 올려 놓을 때, Submenu 가 나오게 끔 하는 코드

var nav = document.querySelector('.navbar__menu');
var submenu = document.querySelector('.navbar__submenu');

nav.addEventListener('mouseover', () => {
    submenu.classList.toggle('active');
});

nav.addEventListener('mouseout', () => {
    submenu.classList.remove('active');
});


