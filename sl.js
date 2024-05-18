const sliderTrack = document.querySelector('.slider-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = sliderTrack.children.length - 1;
    }
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= sliderTrack.children.length) {
        currentIndex = 0;
    }
    updateSlider();
});

function updateSlider() {
    const offset = currentIndex * -500; // Adjust for image width
    sliderTrack.style.transform = `translateX(${offset}px)`;
}
