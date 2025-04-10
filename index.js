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
  
// function centerActiveSlide() {
//    const track = document.querySelector('.image-track');
//    const centerSlide = document.querySelector('.image-slide.center');
//    if (!track || !centerSlide) return;
//  
//    const scrollLeft = centerSlide.offsetLeft
//                     - (track.clientWidth / 2)
//                     + (centerSlide.clientWidth / 2);
//    track.scrollTo({ left: scrollLeft, behavior: 'smooth' });
//  };
  
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

activeIndex = 2;


// function classUpdate (activeIndex) {
//    songImages.forEach((img, index) => {
//      img.classList.remove('center', 'adjacent');
//  
//      if (index === activeIndex) {
//        img.classList.add('center');
//      } else if (Math.abs(index - activeIndex) === 1) {
//        img.classList.add('adjacent');
//      }
//   });
  
//    centerActiveSlide(); 
//  };

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

classUpdate(2);
window.scrollTo({ top: 0, behavior: 'smooth' });

document.addEventListener("DOMContentLoaded", function () {
  const flipButton = document.getElementById('flip-tape-button');
  const flipInner = document.querySelector('.flip-inner');
  const scrollers = document.getElementById('scroll-arrows');

  flipButton.addEventListener('click', () => {
    flipInner.classList.toggle('flipped');
    scrollers.classList.add('scroll-cue-hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });


    setTimeout(()=> {
      scrollers.classList.remove('scroll-cue-hidden');
    },1000);
    });
  });