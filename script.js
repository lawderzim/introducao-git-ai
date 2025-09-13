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

  // Funcionalidade de validação
  const validateBtn = document.getElementById('validate-input');
  const userInput = document.getElementById('user-input');
  
  if (validateBtn && userInput) {
    validateBtn.addEventListener('click', () => {
      const value = userInput.value.trim();
      if (value.length < 2) {
        alert('Nome deve ter pelo menos 2 caracteres!');
        userInput.style.borderColor = 'red';
      } else {
        alert(`Olá, ${value}! Bem-vindo!`);
        userInput.style.borderColor = 'green';
        userInput.value = '';
      }
    });
  }
});


