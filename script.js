// SELETORES
const mobileBtn = document.querySelector('.mobile-btn');
const navList = document.querySelector('.nav-list');
const icon = mobileBtn.querySelector('.fa-solid');
const headerElement = document.querySelector('.header');
const waFlutuante = document.querySelector('.wa-flutuante');

// SELETORES PARA O OBSERVER (Excluindo o footer da lógica de menu)
const sections = document.querySelectorAll('section[id]');
const sectionObserve = [...sections, document.querySelector('.footer')];

const navLinks = document.querySelectorAll('.nav-list li a');

// ==========================================
// 1. EVENTOS DE MENU (MOBILE)
// ==========================================
mobileBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
  });
});

// ==========================================
// 2. FUNÇÃO AUXILIAR: ATIVAR MENU
// ==========================================
function activateMenu(id) {
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${id}`) {
      link.classList.add('active');
    }
  });
}

// ==========================================
// 3. SCROLL: HEADER, PROGRESS BAR E FIM DE PÁGINA
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

  // --- LOGICA DE FIM DE PÁGINA (CHECKMATE) ---
  const isAtBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 50;

  if (isAtBottom) {
    activateMenu('contato');
    if (waFlutuante) waFlutuante.classList.add('hide');
  } else if (window.scrollY < 100) {
    activateMenu('inicio');
  }
});

// ==========================================
// 4. OBSERVERS (ANIMAÇÃO E MENU)
// ==========================================

// SENSOR 1: Fade-In e WhatsApp (Sensibilidade Alta)
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeIn');

        // WhatsApp some se o Contato aparecer (mesmo que só um pedaço)
        if (entry.target.id === 'contato' && waFlutuante) {
          waFlutuante.classList.add('hide');
        }
      } else {
        // WhatsApp volta se sair do Contato (subindo)
        if (entry.target.id === 'contato' && waFlutuante) {
          waFlutuante.classList.remove('hide');
        }
      }
    });
  },
  { threshold: 0.1 },
);

// SENSOR 2: Menu Ativo (Scroll Spy de Precisão)
const spyObserver = new IntersectionObserver(
  entries => {
    // Pegamos apenas o que está entrando na tela
    const intersecting = entries.filter(entry => entry.isIntersecting);

    // Se houver mais de uma (comum no Desktop), pegamos a que estiver MAIS ABAIXO
    // no código (o último item do array), pois é a seção para onde o usuário está indo.
    if (intersecting.length > 0) {
      const activeSection = intersecting[intersecting.length - 1];

      // Só mudamos se NÃO estivermos no final da página (onde a lógica de scroll assume)
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (!isAtBottom) {
        activateMenu(activeSection.target.id);
      }
    }
  },
  {
    // Esta margem cria uma "linha de gatilho" logo abaixo do seu header fixo.
    // Mesmo com padding, a seção "cruza" essa linha e ativa o dourado.
    rootMargin: '-15% 0px -80% 0px',
    threshold: 0,
  },
);

// Ativando tudo
sectionObserve.forEach(section => {
  if (section) {
    section.classList.add('reveal');
    revealObserver.observe(section);
    if (section.id) spyObserver.observe(section);
  }
});

// Ano Atual
const anoElem = document.getElementById('ano-atual');
if (anoElem) anoElem.textContent = new Date().getFullYear();

// ==========================================
// 5. LGPD
// ==========================================
const cookieBanner = document.getElementById('cookie-banner');
const btnAccept = document.getElementById('accept-cookies');

if (cookieBanner && !localStorage.getItem('cookiesAceitos')) {
  cookieBanner.style.display = 'block';
}

if (btnAccept) {
  btnAccept.addEventListener('click', () => {
    localStorage.setItem('cookiesAceitos', 'true');
    cookieBanner.style.display = 'none';
  });
}
