<h1 align="center">
  Davi Quadros Advocacia | Landing Page Institucional
</h1>

<p align="center">
  <a href="#-o-projeto">O Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-funcionalidades-e-performance">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-tecnologias-e-arquitetura">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-uiux--design">Design</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-status-e-deploy">Deploy</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
</p>

<br>

<p align="center">
  <img alt="Preview do Site Davi Quadros Advocacia" src="./images/preview.png" width="100%">
</p>
<br>

## 🎯 O Projeto

Landing Page de alta conversão desenvolvida para o escritório **Davi Quadros Advocacia**. O objetivo do projeto foi criar uma presença digital autoritária e elegante, transmitindo confiança para clientes de alta complexidade nas áreas de Proteção Patrimonial, Direito Bancário e Saúde.

A arquitetura do site foi pensada para reduzir o atrito de comunicação, guiando o usuário de forma fluida até o contato direto via WhatsApp, através de gatilhos visuais e chamadas para ação (CTAs) estratégicas.

## 🚀 Funcionalidades e Performance

O projeto conta com diversas implementações técnicas focadas em Experiência do Usuário (UX) e métricas oficiais de performance (Core Web Vitals):

- **Navegação Inteligente:** Menu fixo (Sticky Header) com alteração dinâmica de opacidade via Scroll e menu Hambúrguer interativo para dispositivos móveis, com gestão de estado semântico para leitores de tela (`aria-expanded`).
- **Intersection Observer API:** Animações de entrada (Fade-in) ativadas dinamicamente apenas quando a seção entra no campo de visão, poupando processamento na Main Thread.
- **Engenharia de Performance (PageSpeed):**
  - Otimização rigorosa de LCP (_Largest Contentful Paint_) utilizando `rel="preload"` e `fetchpriority="high"` no Hero banner.
  - Mitigação de CLS (_Cumulative Layout Shift_) através de `aspect-ratio` nativo via CSS para renderização previsível de SVGs.
  - Carregamento assíncrono (Deferred Loading) de fontes (Montserrat) e bibliotecas de ícones para não bloquear a renderização inicial (FCP).
  - Conversão total de assets gráficos para o formato de alta compressão **WebP**.
- **Lógica de Botão Flutuante:** O botão do WhatsApp acompanha a rolagem no celular, ocultando-se automaticamente ao atingir o rodapé de contato para evitar sobreposição de elementos.
- **Conformidade LGPD:** Banner nativo de aceite de cookies integrado com `localStorage` para memorizar a escolha do usuário.

## 🛠️ Tecnologias e Arquitetura

O projeto foi construído sem o uso de frameworks pesados, priorizando velocidade e controle total do DOM.

- **HTML5:** Estrutura altamente semântica (`<header>`, `<main>`, `<section>`, `<article>`), otimizada para acessibilidade (WCAG 2.2) e SEO técnico.
- **CSS3 (Vanilla):** - Arquitetura modular e componentizada.
  - Utilização de Custom Properties (Variáveis) para manutenção rápida do Theme.
  - Layouts construídos com CSS Grid e Flexbox.
  - Responsividade _Mobile-First_ consolidada no fim da cascata para evitar sobrescritas indesejadas.
- **JavaScript (ES6+):** Script focado na manipulação limpa do DOM e otimização de eventos síncronos pesados.

## 🎨 UI/UX & Design

O projeto visual foi idealizado e construído por **Carolina Alves**.

- **Paleta de Cores:** Foco no _Dark Theme_ com contrastes em tons claros, fugindo do padrão saturado tradicional e focando em uma identidade visual "Premium/Boutique".
- **Tipografia:** Uso da família _Montserrat_ (Google Fonts) para garantir leiturabilidade e elegância em títulos e parágrafos.

## 🌐 Status e Deploy

O projeto encontra-se **Finalizado** e hospedado através da plataforma Vercel.

🔗 **[Acessar o site ao vivo](https://davi-araujo-quadros.vercel.app/)**

---

<p align="center">
  Desenvolvido com dedicação por <strong>José William</strong> e <strong>Carolina Alves</strong>.<br>
  © 2026 - Todos os direitos reservados.
</p>
