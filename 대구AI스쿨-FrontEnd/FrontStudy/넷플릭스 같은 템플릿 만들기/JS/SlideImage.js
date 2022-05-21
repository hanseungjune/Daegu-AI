const slide__button1 = document.querySelector('#button1');
const slide__button2 = document.querySelector('#button2');
const slide__button3 = document.querySelector('#button3');

slide__button2.addEventListener('click', () => {
    document.querySelector('.slideimages').style.transform = 'translate(-1024px)';
});

slide__button3.addEventListener('click', () => {
    document.querySelector('.slideimages').style.transform = 'translate(-2048px)';
});

slide__button1.addEventListener('click', () => {
    document.querySelector('.slideimages').style.transform = 'translate(0px)';
});