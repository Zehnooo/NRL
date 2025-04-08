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
  

songImages = document.querySelectorAll('.image-slide');

activeIndex = 2;


function classUpdate (activeIndex){
songImages.forEach((img, index) => {

img.classList.remove('center','adjacent');

if (index === activeIndex){
    img.classList.add('center');

} else if (Math.abs(index - activeIndex)=== 1){
    img.classList.add('adjacent');
};



});
};

songImages.forEach((img, i) => {
    img.addEventListener("click", () => {
        classUpdate(i);
    });
});

classUpdate(2);

