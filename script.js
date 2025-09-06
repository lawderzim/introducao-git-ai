document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('toggle-color');
  const title = document.getElementById('greeting');
  if (!button || !title) return;
  button.addEventListener('click', () => {
    title.classList.toggle('accent');
  });
});


