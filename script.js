document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('toggle-color');
  const title = document.getElementById('greeting');
  if (!button || !title) return;
  button.addEventListener('click', () => {
    title.classList.toggle('accent');
  });

  // Funcionalidade do Modal
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('open-modal');
  const closeBtn = document.getElementsByClassName('close')[0];

  if (openModalBtn && modal) {
    openModalBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  // Fechar modal clicando fora dele
  if (modal) {
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  // Funcionalidade de personalização da saudação
  const personalizeBtn = document.getElementById('personalize-greeting');
  if (personalizeBtn && title) {
    personalizeBtn.addEventListener('click', () => {
      if (title.textContent === 'Olá, mundo!') {
        title.textContent = 'Olá, Cadmio! Bem-vindo ao Git!';
        personalizeBtn.textContent = 'Voltar ao padrão';
      } else {
        title.textContent = 'Olá, mundo!';
        personalizeBtn.textContent = 'Personalizar Saudação';
      }
    });
  }
});


