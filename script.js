document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('toggle-color');
  const title = document.getElementById('greeting');
  if (!button || !title) return;
  button.addEventListener('click', () => {
    title.classList.toggle('accent');
  });

  // Funcionalidade do contador
  const counterButton = document.getElementById('increment-counter');
  const counterSpan = document.getElementById('counter');
  if (!counterButton || !counterSpan) return;
  
  let count = 0;
  counterButton.addEventListener('click', () => {
    count++;
    counterSpan.textContent = count;
  });
});


