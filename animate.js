// Select all elements with the class 'animateTitle'
let animateTitles = document.querySelectorAll('.animateTitle');

function handleScroll() {
    animateTitles.forEach(txt => {
        let rect = txt.getBoundingClientRect();

        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            txt.classList.add('show-animate');
        }
    });
}

window.addEventListener('scroll', handleScroll);
