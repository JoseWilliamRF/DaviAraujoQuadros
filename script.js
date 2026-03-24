// SELETORES
const mobileBtn = document.querySelector('.mobile-btn');
const navList = document.querySelector('.nav-list');
const icon = mobileBtn.querySelector('.fa-solid');
const headerElement = document.querySelector('.header');
const waFlutuante = document.querySelector('.wa-flutuante'); // Seleciona o botão flutuante

// SELETORES PARA O FADE-IN (Usando os IDs das seções)
const home = document.querySelector('#inicio');
const atuacao = document.querySelector('#atuacao');
const sobre = document.querySelector('#sobre');
const contato = document.querySelector('#contato');
const footer = document.querySelector('.footer');
const sectionObserve = [home, atuacao, sobre, contato, footer];

// ==========================================
// 1. EVENTO DE CLIQUE ESCONDE/MOSTRA MENU
// ==========================================
mobileBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark'); // Usamos fa-xmark (X) do FontAwesome
});

// FECHAR O MENU QUANDO CLICAR EM UM LINK (Regra de Ouro UX Mobile)
const navLinks = document.querySelectorAll('.nav-list li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
  });
});

// ==========================================
// 2. EVENTO DE FUNDO/SOMBRA NA NAVBAR E BARRA DE PROGRESSO
// ==========================================
window.addEventListener('scroll', () => {
  if (window.scrollY <= 50) {
    headerElement.classList.remove('scrolled'); // Remove o efeito de vidro no topo
  } else {
    headerElement.classList.add('scrolled'); // Aplica o efeito ao rolar
  }

  // --- Mantém a lógica da Barra de Progresso que você já tem ---
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  const myBar = document.getElementById('myBar');
  if (myBar) myBar.style.width = scrolled + '%';
});

// ==========================================
// 3. EVENTO DE FADE-IN NAS SECTIONS
// ==========================================
// ==========================================
// 3. SENSORES (ANIMAÇÃO & MENU ATIVO)
// ==========================================

// SENSOR 1: Para as animações (Fade-In)
// Ele é sensível: assim que a seção aparece 15%, ela ganha opacidade
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeIn');
      }
    });
  },
  { threshold: 0.15 },
);

// SENSOR 2: Para o Menu Ativo e WhatsApp (Scroll Spy)
// Ele é focado no topo: só muda o menu quando a seção chega lá em cima
const spyObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Lógica do Menu Dourado
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

        // Lógica do WhatsApp (Esconde no Contato)
        if (entry.target.id === 'contato') {
          if (waFlutuante) waFlutuante.classList.add('hide');
        }
      } else {
        // Mostra o WhatsApp ao subir e sair do Contato
        if (entry.target.id === 'contato') {
          if (waFlutuante) waFlutuante.classList.remove('hide');
        }
      }
    });
  },
  { rootMargin: '0px 0px -70% 0px' },
); // Ajuste de precisão

// Ativando os dois sensores em todas as seções
sectionObserve.forEach(section => {
  if (section) {
    section.classList.add('reveal'); // Garante que comece invisível
    revealObserver.observe(section); // Cuida do Fade-In
    spyObserver.observe(section); // Cuida do Dourado no Menu
  }
});
document.getElementById('ano-atual').textContent = new Date().getFullYear();

// ==========================================
// LGPD - BANNER DE COOKIES
// ==========================================
const cookieBanner = document.getElementById('cookie-banner');
const btnAccept = document.getElementById('accept-cookies');

// Verifica se o usuário já aceitou antes
if (!localStorage.getItem('cookiesAceitos')) {
  cookieBanner.style.display = 'block';
}

// Ao clicar no botão, esconde o banner e salva a escolha
btnAccept.addEventListener('click', () => {
  localStorage.setItem('cookiesAceitos', 'true');
  cookieBanner.style.display = 'none';
});
