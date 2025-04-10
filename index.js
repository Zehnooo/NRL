document.addEventListener("DOMContentLoaded", function () {
    const svgButton = document.getElementById('enter-site-button');
    const overlay = document.getElementById('site-overlay');
    const cassette = document.getElementById("cassette-wrapper");
    const svg = document.getElementById('cassette-icon');
    const openText = document.getElementById('opener-text');
  
    svgButton.addEventListener("click", function () {
    cassette.classList.add('animate-slide-up');
    
    openText.classList.remove('flash-animation');
    openText.classList.add('fade-out');
    svg.classList.add('accent-fill');

     setTimeout(() => {
        overlay.classList.add("hidden"); // uses your working hidden class
      }, 2000);
      
    });
  });
  
function centerActiveSlide() {
    const track = document.querySelector('.image-track');
    const centerSlide = document.querySelector('.image-slide.center');
    if (!track || !centerSlide) return;
  
    const scrollLeft = centerSlide.offsetLeft
                     - (track.clientWidth / 2)
                     + (centerSlide.clientWidth / 2);
    track.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  };
  


songImages = document.querySelectorAll('.image-slide');

activeIndex = 2;


function classUpdate (activeIndex) {
    songImages.forEach((img, index) => {
      img.classList.remove('center', 'adjacent');
  
      if (index === activeIndex) {
        img.classList.add('center');
      } else if (Math.abs(index - activeIndex) === 1) {
        img.classList.add('adjacent');
      }
    });
  
    centerActiveSlide(); // <-- Add this at the end
  };

songImages.forEach((img, i) => {
    img.addEventListener("click", () => {
        classUpdate(i);
    });
});

classUpdate(2);
window.scrollTo({ top: 0, behavior: 'smooth' });

document.addEventListener("DOMContentLoaded", function () {
  const flipButton = document.getElementById('flip-tape-button');
  const flipInner = document.querySelector('.flip-inner');

  flipButton.addEventListener('click', () => {
    flipInner.classList.toggle('flipped');

    window.scrollTo({ top: 0, behavior: 'smooth' });

  });
});