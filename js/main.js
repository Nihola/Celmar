const slider = document.querySelector('.slider-wrapper');
const images = document.querySelectorAll('.slider-wrapper img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index1 = 0;
const totalImages1 = images.length;

function updateSlider() {
    slider.style.transform = `translateX(-${index1 * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    index1 = (index1 + 1) % totalImages1;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    index1 = (index1 - 1 + totalImages1) % totalImages;
    updateSlider();
});

