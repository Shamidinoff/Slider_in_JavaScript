const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

sliderItems.forEach(function (slide, index) {
    slide.classList.add('hidden');

    // Hidden all slides except first slide
    if (index !== 0) slide.classList.add('hidden');
    

    // Add index
    slide.dataset.index = index;

    // Add data attribute active for the first active slide
    sliderItems[0].setAttribute('data-active', '');

    // Click slide page
    slide.addEventListener('click', function(){

        showNextSlide('next');
    })
});

btnNext.onclick = function() {

    showNextSlide('next');

}

btnPrev.onclick = function() {

    showNextSlide('prev');

};

function showNextSlide(direction) {

        // Hidden active slide
        const currentSlide = slider.querySelector('[data-active]');
        const currentSlideIndex = +currentSlide.dataset.index;
    
        currentSlide.classList.add('hidden');
        currentSlide.removeAttribute('data-active');

        // Next index
        let nextSlideIndex; 
        if (direction === 'next') {
            nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
        } else if (direction === 'prev') {
            nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
        }

        // Show
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
         nextSlide.classList.remove('hidden');
          nextSlide.setAttribute('data-active', '');

    
}

