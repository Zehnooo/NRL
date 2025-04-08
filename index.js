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