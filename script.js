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
// 2. EVENTO DE FUNDO/SOMBRA NA NAVBAR
// ==========================================
window.addEventListener('scroll', () => {
  if (window.scrollY <= 50) {
    headerElement.style.backgroundColor = 'transparent';
    headerElement.style.boxShadow = 'none';
  } else {
    // Quando rolar a tela, o menu ganha fundo escuro para leitura e uma sombra
    headerElement.style.backgroundColor = 'var(--bg-dark)';
    headerElement.style.boxShadow = '0px 3px 20px -5px rgba(0, 0, 0, 0.8)';
  }
});

// ==========================================
// 3. EVENTO DE FADE-IN NAS SECTIONS
// ==========================================
const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeIn');
    }

    // ---  LÓGICA EXCLUSIVA PARA O BOTÃO FLUTUANTE ---
    // Verificamos se a seção que está entrando/saindo é a de Contato pelo ID
    if (entry.target.id === 'contato') {
      if (entry.isIntersecting) {
        // Se Contato estiver na tela e o botão existir, escondemos
        if (waFlutuante) waFlutuante.classList.add('hide');
      } else {
        // Se Contato sair da tela e o botão existir, mostramos
        if (waFlutuante) waFlutuante.classList.remove('hide');
      }
    }
  });
};

const observerOptions = {
  threshold: 0.15, // A animação dispara quando 15% da seção aparecer na tela
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
