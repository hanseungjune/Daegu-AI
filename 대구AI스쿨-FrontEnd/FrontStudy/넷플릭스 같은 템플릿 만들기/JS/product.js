
const day__ = document.querySelector('.day');
const week__ = document.querySelector('.week');
const month__ = document.querySelector('.month');
const years__ = document.querySelector('.years');

years__.addEventListener('click', () => {
    document.querySelector('.grey__anatomi').style.transform = 'translateY(0px)';
    document.querySelector('.annarasumanara').style.transform = 'translateY(0px)';
    document.querySelector('.shining__girls').style.transform = 'translateY(0px)';
    document.querySelector('.moon__night').style.transform = 'translateY(0px)';
    document.querySelector('.ozak').style.transform = 'translateY(0px)';
});

week__.addEventListener('click', () => {
    document.querySelector('.grey__anatomi').style.transform = 'translateY(400px)';
    document.querySelector('.annarasumanara').style.transform = 'translateY(400px)';
    document.querySelector('.shining__girls').style.transform = 'translateY(-400px)';
    document.querySelector('.moon__night').style.transform = 'translateY(-400px)';
    document.querySelector('.ozak').style.transform = 'translateY(0px)';
});

month__.addEventListener('click', () => {
    document.querySelector('.grey__anatomi').style.transform = 'translateY(800px)';
    document.querySelector('.annarasumanara').style.transform = 'translateY(200px)';
    document.querySelector('.shining__girls').style.transform = 'translateY(200px)';
    document.querySelector('.moon__night').style.transform = 'translateY(-400px)';
    document.querySelector('.ozak').style.transform = 'translateY(-800px)';
});

day__.addEventListener('click', () => {
    document.querySelector('.grey__anatomi').style.transform = 'translateY(600px)';
    document.querySelector('.annarasumanara').style.transform = 'translateY(600px)';
    document.querySelector('.shining__girls').style.transform = 'translateY(-400px)';
    document.querySelector('.moon__night').style.transform = 'translateY(-200px)';
    document.querySelector('.ozak').style.transform = 'translateY(-600px)';
});

// else {
// const day__2 = document.querySelector('.day2');
// const week__2 = document.querySelector('.week2');
// const month__2 = document.querySelector('.month2');
// const years__2 = document.querySelector('.years2');

// years__2.addEventListener('click', () => {
//     document.querySelector('.grey__anatomi').style.transform = 'translateY(0px)';
//     document.querySelector('.annarasumanara').style.transform = 'translateY(0px)';
//     document.querySelector('.shining__girls').style.transform = 'translateY(0px)';
//     document.querySelector('.moon__night').style.transform = 'translateY(0px)';
//     document.querySelector('.ozak').style.transform = 'translateY(0px)';
// });

// week__2.addEventListener('click', () => {
//     document.querySelector('.grey__anatomi').style.transform = 'translateY(584px)';
//     document.querySelector('.annarasumanara').style.transform = 'translateY(584px)';
//     document.querySelector('.shining__girls').style.transform = 'translateY(-584px)';
//     document.querySelector('.moon__night').style.transform = 'translateY(-584px)';
//     document.querySelector('.ozak').style.transform = 'translateY(0px)';
// });

// month__2.addEventListener('click', () => {
//     document.querySelector('.grey__anatomi').style.transform = 'translateY(1168px)';
//     document.querySelector('.annarasumanara').style.transform = 'translateY(292px)';
//     document.querySelector('.shining__girls').style.transform = 'translateY(292px)';
//     document.querySelector('.moon__night').style.transform = 'translateY(-584px)';
//     document.querySelector('.ozak').style.transform = 'translateY(-1168px)';
// });

// day__2.addEventListener('click', () => {
//     document.querySelector('.grey__anatomi').style.transform = 'translateY(876px)';
//     document.querySelector('.annarasumanara').style.transform = 'translateY(876px)';
//     document.querySelector('.shining__girls').style.transform = 'translateY(-584px)';
//     document.querySelector('.moon__night').style.transform = 'translateY(-292px)';
//     document.querySelector('.ozak').style.transform = 'translateY(-876px)';
// });

// }