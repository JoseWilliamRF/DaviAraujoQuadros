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
const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    // 1. Lógica de Fade-In
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeIn');

      // --- NOVO: LÓGICA DE MENU ATIVO (SCROLL SPY) ---
      // Pegamos o ID da seção que acabou de entrar na tela
      const id = entry.target.getAttribute('id');
      // Procuramos o link no menu que aponta para esse ID
      const menuLink = document.querySelector(`.nav-list li a[href="#${id}"]`);

      if (menuLink) {
        // Removemos a classe 'active' de todos os links do menu
        document.querySelectorAll('.nav-list li a').forEach(link => {
          link.classList.remove('active');
        });
        // e adicionamos apenas no link da seção atual!
        menuLink.classList.add('active');
      }
    }

    // 2. Lógica do Botão Flutuante
    if (entry.target.id === 'contato') {
      if (entry.isIntersecting) {
        if (waFlutuante) waFlutuante.classList.add('hide');
      } else {
        if (waFlutuante) waFlutuante.classList.remove('hide');
      }
    }
  });
};

const observerOptions = {
  rootMargin: '0px 0px -80% 0px',
  threshold: 0, // A animação dispara quando 15% da seção aparecer na tela
};

const observer = new IntersectionObserver(handleIntersection, observerOptions);

sectionObserve.forEach(section => {
  if (section) {
    // Adicionamos a classe 'reveal' via JS antes de observar
    section.classList.add('reveal');
    observer.observe(section);
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
