(() => {
  const SECTION_IDS = ['hero', 'about', 'exp', 'skills', 'design', 'contact'];
  const CAROUSEL_POSITIONS = ['pos-left2', 'pos-left1', 'pos-center', 'pos-right1', 'pos-right2'];
  const NAV_OFFSET = 52;

  const pageProgress = document.getElementById('page-prog');
  const progressDots = document.querySelectorAll('.pp-dot');
  const navButtons = document.querySelectorAll('.nav-links [data-section]');
  const sectionTriggers = document.querySelectorAll('[data-section]');

  let carouselCenterIndex = 0;

  function updateNavigation(sectionId) {
    const sectionIndex = SECTION_IDS.indexOf(sectionId);
    if (sectionIndex < 0) return;

    progressDots.forEach((dot, index) => {
      dot.classList.toggle('active', index === sectionIndex);
    });
    navButtons.forEach(button => {
      button.classList.toggle('active', button.dataset.section === sectionId);
    });
    pageProgress?.classList.toggle('is-hidden', sectionId === 'hero');
    pageProgress?.classList.toggle('on-dark', sectionId === 'contact');
  }

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    window.scrollTo({
      top: section.offsetTop - NAV_OFFSET,
      behavior: 'smooth',
    });
  }

  function setupNavigation() {
    sectionTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        scrollToSection(trigger.dataset.section);
      });
    });

    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) updateNavigation(entry.target.id);
      });
    }, { threshold: 0.35 });

    document.querySelectorAll('.section').forEach(section => {
      sectionObserver.observe(section);
    });
  }

  function setupPigeonSeal() {
    const pigeonSeal = document.querySelector('.pigeon-seal');
    const heroSection = document.getElementById('hero');
    if (pigeonSeal && heroSection) heroSection.appendChild(pigeonSeal);
  }

  function setupTitleHighlights() {
    const titleObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('hl-vis');
        titleObserver.unobserve(entry.target);
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.sec-title, .ct-hl').forEach(title => {
      titleObserver.observe(title);
    });
  }

  function setupHeroParallax() {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const floaters = Array.from(hero.querySelectorAll('.floater svg'));
    const depths = [0.038, 0.022, 0.052, 0.018, 0.045, 0.015, 0.028, 0.042, 0.032, 0.019, 0.048, 0.025];

    hero.addEventListener('mousemove', event => {
      const bounds = hero.getBoundingClientRect();
      const mouseX = event.clientX - bounds.left - bounds.width / 2;
      const mouseY = event.clientY - bounds.top - bounds.height / 2;

      floaters.forEach((svg, index) => {
        const depth = depths[index] ?? 0.03;
        svg.style.transform = `translate(${mouseX * depth}px, ${mouseY * depth}px)`;
      });
    });

    hero.addEventListener('mouseleave', () => {
      floaters.forEach(svg => {
        svg.style.transform = 'translate(0, 0)';
      });
    });
  }

  function setupGhostParallax() {
    document.querySelectorAll('.section').forEach(section => {
      const ghost = section.querySelector('.ghost');
      if (!ghost) return;

      section.addEventListener('mousemove', event => {
        const bounds = section.getBoundingClientRect();
        const mouseX = event.clientX - bounds.left - bounds.width / 2;
        const mouseY = event.clientY - bounds.top - bounds.height / 2;

        ghost.style.transform = `translate(${mouseX * 0.008}px, ${mouseY * 0.004}px)`;
      });

      section.addEventListener('mouseleave', () => {
        ghost.style.transform = 'translate(0, 0)';
      });
    });
  }

  function setupSkillBars() {
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;

    new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) skillsSection.classList.add('vis');
    }, { threshold: 0.3 }).observe(skillsSection);
  }

  function setupImageFallbacks() {
    document.querySelectorAll('.about-photo').forEach(image => {
      image.addEventListener('error', () => {
        image.hidden = true;
      });
    });
  }

  function renderCarousel() {
    const cards = document.querySelectorAll('.c-card');
    const dots = document.querySelectorAll('.cc-dot');
    const totalCards = cards.length;

    cards.forEach((card, index) => {
      card.classList.remove(...CAROUSEL_POSITIONS, 'pos-hidden');

      let offset = index - carouselCenterIndex;
      if (offset > totalCards / 2) offset -= totalCards;
      if (offset < -totalCards / 2) offset += totalCards;

      if (offset === 0) card.classList.add('pos-center');
      else if (offset === 1) card.classList.add('pos-right1');
      else if (offset === 2) card.classList.add('pos-right2');
      else if (offset === -1) card.classList.add('pos-left1');
      else if (offset === -2) card.classList.add('pos-left2');
      else card.classList.add('pos-hidden');
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === carouselCenterIndex);
    });
  }

  function moveCarousel(direction) {
    const totalCards = document.querySelectorAll('.c-card').length;
    carouselCenterIndex = (carouselCenterIndex + direction + totalCards) % totalCards;
    renderCarousel();
  }

  function goToCarouselCard(index) {
    const totalCards = document.querySelectorAll('.c-card').length;
    carouselCenterIndex = ((index % totalCards) + totalCards) % totalCards;
    renderCarousel();
  }

  function handleCardClick(card) {
    if (card.classList.contains('pos-center')) {
      card.classList.toggle('flipped');
      return;
    }

    goToCarouselCard(Number(card.dataset.idx));
  }

  function setupCarousel() {
    document.querySelectorAll('.c-card').forEach(card => {
      card.addEventListener('click', () => handleCardClick(card));
    });

    document.querySelectorAll('[data-carousel-action]').forEach(button => {
      button.addEventListener('click', () => {
        moveCarousel(button.dataset.carouselAction === 'next' ? 1 : -1);
      });
    });

    document.querySelectorAll('[data-carousel-index]').forEach(dot => {
      dot.addEventListener('click', () => {
        goToCarouselCard(Number(dot.dataset.carouselIndex));
      });
    });

    renderCarousel();
  }

  setupNavigation();
  setupPigeonSeal();
  setupTitleHighlights();
  setupHeroParallax();
  setupGhostParallax();
  setupSkillBars();
  setupImageFallbacks();
  setupCarousel();
})();
