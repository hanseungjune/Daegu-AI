const search__model = document.querySelector('.search-model');
const X__Btn = document.querySelector('.search-close-switch');
const search__Btn = document.querySelector('.navbar__icons > li > i');

X__Btn.addEventListener('click', () => {
    search__model.classList.remove('fade');
});

search__Btn.addEventListener('click', () => {
    search__model.classList.toggle('fade');
});


