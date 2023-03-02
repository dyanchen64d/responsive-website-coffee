/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header');
  // when the scroll is greater than 50 viewport height
  window.scrollY >= 50
    ? header.classList.add('scroll-header')
    : header.classList.remove('scroll-header');
};

window.addEventListener('scroll', scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollup = () => {
  const scrollUp = document.getElementById('scroll-up');
  // when the scroll is higher than 350
  window.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollup);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((curr) => {
    const sectionHeight = curr.offsetHeight,
      sectionTop = curr.offsetTop - 58,
      sectionId = curr.getAttribute('id'),
      sectionsClass = document.querySelector(
        '.nav__menu a[href*=' + sectionId + ']'
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true,
});

sr.reveal('.home__data, .products__data, .steps__content, .footer__container');
sr.reveal('.home__img', { origin: 'bottom' });
sr.reveal('.products__card', { interval: 100 });
sr.reveal('.about__img, .testimonial__img', { origin: 'right' });
sr.reveal('.about__data, .testimonial__data', { origin: 'left' });
