
const sec = document.querySelector('.s');
const min = document.querySelector('.m');
const hour = document.querySelector('.h');


setInterval(() => {
    let time = new Date();
let current_s = time.getSeconds();
let current_m = time.getMinutes();
let current_h = time.getHours();
sec.style.transform = `rotate(${katakuta(60, current_s)}deg)`;
min.style.transform = `rotate(${katakuta(60, current_m)}deg)`;
hour.style.transform = `rotate(${katakuta(12, current_h)}deg)`;
});   



function katakuta(time, current) {
    return (360 * current) / time;
}
