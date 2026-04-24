(() => {
  const SECTION_IDS = ['hero', 'about', 'exp', 'skills', 'design', 'contact'];
  const CAROUSEL_POSITIONS = ['pos-left2', 'pos-left1', 'pos-center', 'pos-right1', 'pos-right2'];
  const NAV_OFFSET = 52;
  const PRODUCTS = [
    {
      type: 'APP / WEB',
      name: 'CURDoctor',
      meta: 'Telemedicine Service',
      icon: 'fa-solid fa-video',
      desc: '參與視訊掛號服務前端開發，產品上架 App Store 與 Google Play。',
      tags: ['APP', 'WEB', 'Vue.js'],
      link: 'https://www.curdoctor.com.tw/',
    },
    {
      type: 'APP / WEB',
      name: 'Job King',
      meta: 'Product UI',
      icon: 'fa-solid fa-briefcase',
      desc: '求職與招募相關產品介面展示，涵蓋 App / Web 使用流程。',
      tags: ['APP', 'WEB', 'UI/UX'],
    },
    {
      type: 'APP',
      name: 'Awesome Font',
      meta: 'App Store',
      icon: 'fa-solid fa-font',
      desc: '字體預覽工具 App，個人 side project，上架 App Store。',
      tags: ['APP', 'Side Project'],
      link: 'https://apps.apple.com/us/app/awesome-font-font-preview/id1327481616',
    },
    {
      type: 'APP',
      name: 'OAXB',
      meta: 'App Store · 2026',
      icon: 'fa-solid fa-magnifying-glass-chart',
      desc: '個人 App 專案截圖展示，聚焦工具型產品體驗。',
      tags: ['APP', 'Side Project'],
    },
    {
      type: 'APP / WEB',
      name: 'GGCARRY',
      meta: 'Gaming Platform',
      icon: 'fa-solid fa-gamepad',
      desc: '火競猜產品專案，包含網站架構、APP 資訊架構與視覺規格溝通。',
      tags: ['APP', 'WEB', 'Wireframe'],
    },
    {
      type: 'APP',
      name: '保生大帝',
      meta: 'Screenshot',
      icon: 'fa-solid fa-mobile-screen-button',
      desc: 'APP 專案截圖展示，早期產品視覺與介面整理。',
      tags: ['APP', 'Visual'],
    },
    {
      type: 'APP',
      name: '友善 i 臺中',
      meta: 'Screenshot',
      icon: 'fa-solid fa-city',
      desc: '城市服務類 APP 截圖展示，整理行動端資訊呈現。',
      tags: ['APP', 'Side Project'],
    },
    {
      type: 'APP',
      name: '計算機',
      meta: 'Screenshot',
      icon: 'fa-solid fa-calculator',
      desc: '計算機工具 App 截圖展示，呈現基礎工具介面練習。',
      tags: ['APP', 'Side Project'],
    },
    {
      type: 'WEB',
      name: 'Trouver',
      meta: 'WordPress',
      icon: 'fa-brands fa-wordpress',
      desc: '以 WordPress 完成網站從規劃到上線的完整流程，並協助 SEO 優化。',
      tags: ['WEB', 'WordPress', 'SEO'],
      link: 'https://trouver.art/',
    },
    {
      type: 'WEB',
      name: 'E.link',
      meta: 'Company Website',
      icon: 'fa-solid fa-globe',
      desc: '益林網頁設計企業網站，使用 HTML/CSS 與 Bootstrap 實作響應式頁面。',
      tags: ['WEB', 'Bootstrap', 'RWD'],
      link: 'https://www.appseoweb.com/',
    },
    {
      type: 'WEB',
      name: '佑嘉開發',
      meta: 'Company Website',
      icon: 'fa-solid fa-industry',
      desc: '企業官網前端切版與響應式頁面建置。',
      tags: ['WEB', 'HTML/CSS', 'RWD'],
      link: 'https://www.handletaiwan.com/',
    },
    {
      type: 'WEB',
      name: '叡冠精密科技',
      meta: 'Company Website',
      icon: 'fa-solid fa-microchip',
      desc: '企業官網前端切版與頁面維護，協助品牌網站資訊呈現。',
      tags: ['WEB', 'Bootstrap', 'RWD'],
      link: 'https://raytop.com.tw/',
    },
    {
      type: 'WEB',
      name: '建勝螺絲',
      meta: 'Company Website',
      icon: 'fa-solid fa-screwdriver-wrench',
      desc: '製造業企業官網前端切版，建立響應式網站內容。',
      tags: ['WEB', 'HTML/CSS', 'RWD'],
      link: 'https://www.js-screw.com/',
    },
    {
      type: 'WEB',
      name: '永岦鍛造',
      meta: 'Company Website',
      icon: 'fa-solid fa-hammer',
      desc: '企業官網前端切版與視覺資料整理。',
      tags: ['WEB', 'Bootstrap', 'RWD'],
      link: 'http://www.yeonglirs.com/',
    },
    {
      type: 'SEO',
      name: 'SEO Cases',
      meta: 'Trouver / 單純點',
      icon: 'fa-solid fa-chart-line',
      desc: '協助品牌進行 SEO 規劃與優化，包含 Trouver、單純點與魔女柑仔店相關案例。',
      tags: ['SEO', 'Content', 'Marketing'],
      link: 'https://www.witch-store.com/',
    },
  ];

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

  function productLink(product) {
    if (!product.link) return '';

    return `<a href="${product.link}" target="_blank" rel="noreferrer" class="c-back-link">Open Project <i class="fa-solid fa-arrow-up-right-from-square fa-xs"></i></a>`;
  }

  function renderProductCards() {
    const stage = document.getElementById('carousel-stage');
    const dots = document.getElementById('cc-dots');
    if (!stage || !dots) return;

    stage.innerHTML = PRODUCTS.map((product, index) => `
      <div class="c-card" data-idx="${index}">
        <div class="c-card-inner">
          <div class="c-face c-front bg-${(index % 5) + 1}">
            <div class="c-deco"><i class="${product.icon}"></i></div>
            <div>
              <div class="c-type">${product.type}</div>
              <div class="c-name">${product.name}</div>
              <div class="c-year">${product.meta}</div>
            </div>
          </div>
          <div class="c-face c-back">
            <div class="c-back-type">${product.type}</div>
            <div class="c-back-title">${product.name}</div>
            <div class="c-back-desc">${product.desc}</div>
            <div class="c-back-tags">
              ${product.tags.map(tag => `<span class="c-back-tag">${tag}</span>`).join('')}
            </div>
            ${productLink(product)}
            <div class="c-back-hint">再點一下關閉</div>
          </div>
        </div>
      </div>
    `).join('');

    dots.innerHTML = PRODUCTS.map((_, index) => `
      <button class="cc-dot" type="button" data-carousel-index="${index}" aria-label="切換到第 ${index + 1} 張"></button>
    `).join('');
  }

  function setupCarousel() {
    renderProductCards();

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

    document.querySelectorAll('.c-back-link').forEach(link => {
      link.addEventListener('click', event => {
        event.stopPropagation();
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
