function initAnimationScroll() {
  const elements = document.querySelectorAll('.js-scroll');

  if (elements.length) {
    const windowHalf = window.innerHeight * 0.7;

    function animationScroll() {
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const isElementVisible = elementTop - windowHalf < 0;

        if (isElementVisible) element.classList.add('ativo');
      });
    }

    animationScroll();

    window.addEventListener('scroll', animationScroll);
  }
}
initAnimationScroll();
