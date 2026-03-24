// SELETORES
const mobileBtn = document.querySelector('.mobile-btn');
const navList = document.querySelector('.nav-list');
const icon = mobileBtn.querySelector('.fa-solid');
const headerElement = document.querySelector('.header');
const waFlutuante = document.querySelector('.wa-flutuante');

// SELETORES PARA O FADE-IN
const home = document.querySelector('#inicio');
const atuacao = document.querySelector('#atuacao');
const sobre = document.querySelector('#sobre');
const contato = document.querySelector('#contato');
const footer = document.querySelector('.footer');
const sectionObserve = [home, atuacao, sobre, contato, footer];

// ==========================================
// 1. EVENTOS DE MENU (MOBILE)
// ==========================================
mobileBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});

const navLinks = document.querySelectorAll('.nav-list li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
  });
});

// ==========================================
// 2. SCROLL: HEADER, PROGRESS BAR E REDE DE SEGURANÇA
// ==========================================
window.addEventListener('scroll', () => {
  // Header Glassmorphism
  if (window.scrollY <= 50) {
    headerElement.classList.remove('scrolled');
  } else {
    headerElement.classList.add('scrolled');
  }

  // Barra de Progresso
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  const myBar = document.getElementById('myBar');
  if (myBar) myBar.style.width = scrolled + '%';

  // --- REDE DE SEGURANÇA PARA SEÇÃO PEQUENA (CONTATO) ---
  // Se o usuário chegar no fim absoluto da página, forçamos o Contato ativo
  const scrollTotal = document.documentElement.scrollHeight;
  const scrollPos = window.innerHeight + window.scrollY;

  if (scrollTotal - scrollPos <= 50) {
    // Margem de 50px do fim da página
    document
      .querySelectorAll('.nav-list li a')
      .forEach(l => l.classList.remove('active'));
    const linkContato = document.querySelector(
      '.nav-list li a[href="#contato"]',
    );
    if (linkContato) linkContato.classList.add('active');
    if (waFlutuante) waFlutuante.classList.add('hide');
  }
});

// ==========================================
// 3. OBSERVERS (ANIMAÇÃO E MENU)
// ==========================================

// SENSOR 1: Fade-In e Controle do WhatsApp (Alta Sensibilidade)
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeIn');

        // Seção Contato detectada -> Esconde WhatsApp
        if (entry.target.id === 'contato' && waFlutuante) {
          waFlutuante.classList.add('hide');
        }
      } else {
        // Saiu da seção Contato (subindo) -> Mostra WhatsApp
        if (entry.target.id === 'contato' && waFlutuante) {
          waFlutuante.classList.remove('hide');
        }
      }
    });
  },
  { threshold: 0.1 },
); // Dispara assim que 10% da seção aparece

// SENSOR 2: Menu Ativo (Scroll Spy de Precisão)
const spyObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      // Só processa se não estivermos no fim da página (para não conflitar com a Rede de Segurança)
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;

      if (entry.isIntersecting && !isAtBottom) {
        const id = entry.target.getAttribute('id');
        const menuLink = document.querySelector(
          `.nav-list li a[href="#${id}"]`,
        );

        if (menuLink) {
          document
            .querySelectorAll('.nav-list li a')
            .forEach(l => l.classList.remove('active'));
          menuLink.classList.add('active');
        }
      }
    });
  },
  { rootMargin: '0px 0px -70% 0px' },
);

// Ativação
sectionObserve.forEach(section => {
  if (section) {
    section.classList.add('reveal');
    revealObserver.observe(section);
    spyObserver.observe(section);
  }
});

document.getElementById('ano-atual').textContent = new Date().getFullYear();

// ==========================================
// 4. LGPD
// ==========================================
const cookieBanner = document.getElementById('cookie-banner');
const btnAccept = document.getElementById('accept-cookies');

if (!localStorage.getItem('cookiesAceitos')) {
  if (cookieBanner) cookieBanner.style.display = 'block';
}

if (btnAccept) {
  btnAccept.addEventListener('click', () => {
    localStorage.setItem('cookiesAceitos', 'true');
    cookieBanner.style.display = 'none';
  });
}
