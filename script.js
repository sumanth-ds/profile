document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('[data-animate]');

    function checkPosition() {
        elementsToAnimate.forEach(element => {
            const position = element.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 70) {
                element.classList.add('animate-up');
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition(); // Initial check in case the elements are already in view
});