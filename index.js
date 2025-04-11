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

  requestAnimationFrame(() => {
    const trackRect = track.getBoundingClientRect();
    const slideRect = centerSlide.getBoundingClientRect();
    const scrollLeft = track.scrollLeft + (slideRect.left - trackRect.left) - (track.clientWidth / 2 - centerSlide.clientWidth / 2);
    
    // Slight delay ensures smoother behavior on class changes
    setTimeout(() => {
      track.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }, 25);
  });
}

songImages = document.querySelectorAll('.image-slide');

activeIndex = 3;


  function classUpdate(activeIndex) {
    songImages.forEach((img, index) => {
      const isCenter = index === activeIndex;
      const isAdjacent = Math.abs(index - activeIndex) === 1;
  
      img.classList.toggle('center', isCenter);
      img.classList.toggle('adjacent', isAdjacent);
  
      // Remove both if not center or adjacent
      if (!isCenter && !isAdjacent) {
        img.classList.remove('center', 'adjacent');
      }
    });
  
    centerActiveSlide();
  }

songImages.forEach((img, i) => {
    img.addEventListener("click", () => {
        classUpdate(i);
    });
});

classUpdate(3);
window.scrollTo({ top: 0, behavior: 'smooth' });

document.addEventListener("DOMContentLoaded", function () {
  const flipInner = document.querySelector('.flip-inner');
  const flipA = document.getElementById('footer-a');
  const flipB = document.getElementById('footer-b');
  const scrollers = document.getElementById('scroll-arrows');

  const flipBtnA = document.getElementById('flip-a');
  const flipBtnB = document.getElementById('flip-b');

  function flipCassette() {
    flipInner.classList.toggle('flipped');

    // Toggle footer visibility
    if (flipA.style.display !== 'none') {
      flipA.style.display = 'none';
      flipB.style.display = 'block';
    } else {
      flipA.style.display = 'block';
      flipB.style.display = 'none';
    }

    // Hide scroll arrows briefly
    scrollers.classList.add('scroll-cue-hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      scrollers.classList.remove('scroll-cue-hidden');
    }, 1000);
  }

  // Bind click handlers to the inner divs only
  flipBtnA.addEventListener('click', flipCassette);
  flipBtnB.addEventListener('click', flipCassette);

  // Initial state
  flipA.style.display = 'block';
  flipB.style.display = 'none';
});