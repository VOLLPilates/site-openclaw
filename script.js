const btn = document.getElementById('btn');
const output = document.getElementById('output');
const themeBtn = document.getElementById('theme-btn');

let count = 0;
let ratitoMode = false;

btn.addEventListener('click', () => {
  count++;
  const messages = [
    'Ratito aprovou o clique.',
    'O mouse está satisfeito.',
    'Mais um teste vitorioso.',
    'Isso aqui tá ficando bom demais.',
  ];

  output.textContent = `${messages[(count - 1) % messages.length]} (${count} ${count === 1 ? 'clique' : 'cliques'})`;
});

themeBtn.addEventListener('click', () => {
  ratitoMode = !ratitoMode;
  document.body.classList.toggle('mode-ratito', ratitoMode);
  themeBtn.textContent = ratitoMode ? 'Voltar ao normal' : 'Soltar o modo Ratito';
  output.textContent = ratitoMode
    ? 'Modo Ratito ativado. Agora sim.'
    : 'Modo Ratito desligado. Mas a energia continua.';
});
