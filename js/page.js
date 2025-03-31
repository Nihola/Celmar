const carouselTrack = document.querySelector('.carousel-track');
const dotsContainer = document.querySelector('.navigation-dots');

const imageFiles = ["cola.svg", "akfa.svg", "cae.svg", "BYD.svg", "ecobozor.svg", "caex.svg", "hilton.svg", "Hyatt.svg", "Hyatt.svg" , "ortel.svg" , "itpark.svg", "mall.svg","metro.svg","ki.svg","magiccity.svg",
    "mall.svg", "imzo.svg","cola.svg", "akfa.svg", "cae.svg", "BYD.svg", "ecobozor.svg", "caex.svg", "hilton.svg", "Hyatt.svg", "Hyatt.svg", "ortel.svg", "itpark.svg", "mall.svg", "metro.svg", "ki.svg", "magiccity.svg",
    "mall.svg", "imzo.svg", "cola.svg", "akfa.svg", "cae.svg", "BYD.svg", "ecobozor.svg", "caex.svg", "hilton.svg", "Hyatt.svg", "Hyatt.svg", "ortel.svg", "itpark.svg", "mall.svg", "metro.svg", "ki.svg", "magiccity.svg",
    "mall.svg", "imzo.svg"
]; // Add all your images

const totalImages = imageFiles.length;
const imagesPerView = 4;
const totalDots = Math.ceil(totalImages / imagesPerView);
let index = 0;

if (!carouselTrack || !dotsContainer) {
    console.error("❌ ERROR: carousel-track or navigation-dots not found! Check your HTML.");
} else {
    console.log("✅ Elements found. Initializing carousel...");

    // Generate images
    imageFiles.forEach(fileName => {
        const img = document.createElement('img');
        img.src = `sources/${fileName}`;  // Use correct image name
        img.alt = fileName.split('.')[0]; // Remove .svg from alt text
        carouselTrack.appendChild(img);
    });

    // Generate dots
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            index = i;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    function updateCarousel() {
        carouselTrack.style.transform = `translateX(-${index * (100 / totalDots)}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }
}
