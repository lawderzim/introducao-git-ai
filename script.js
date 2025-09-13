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

  // Funcionalidade dos destaques da semana
  const editPositiveBtn = document.getElementById('edit-positive');
  const editNegativeBtn = document.getElementById('edit-negative');
  const positiveHighlight = document.getElementById('positive-highlight');
  const negativeHighlight = document.getElementById('negative-highlight');

  function editHighlight(element, button, type) {
    const currentText = element.textContent;
    const newText = prompt(`Editar ${type}:`, currentText);
    
    if (newText !== null && newText.trim() !== '') {
      element.textContent = newText.trim();
      button.textContent = 'Salvo!';
      button.style.background = 'rgba(16, 185, 129, 0.2)';
      button.style.borderColor = '#10b981';
      button.style.color = '#10b981';
      
      setTimeout(() => {
        button.textContent = 'Editar';
        button.style.background = 'transparent';
        button.style.borderColor = '';
        button.style.color = '';
      }, 2000);
    }
  }

  if (editPositiveBtn && positiveHighlight) {
    editPositiveBtn.addEventListener('click', () => {
      editHighlight(positiveHighlight, editPositiveBtn, 'destaque positivo');
    });
  }

  if (editNegativeBtn && negativeHighlight) {
    editNegativeBtn.addEventListener('click', () => {
      editHighlight(negativeHighlight, editNegativeBtn, 'destaque negativo');
    });
  }
});


