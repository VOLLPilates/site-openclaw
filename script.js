const btn = document.getElementById('btn');
const output = document.getElementById('output');
const themeBtn = document.getElementById('theme-btn');

const storageKey = 'ratito-theme';
let count = 0;

function setTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  themeBtn.textContent = isDark ? 'Вернуться к светлой теме' : 'Включить темную тему';
  themeBtn.setAttribute('aria-pressed', String(isDark));
  localStorage.setItem(storageKey, isDark ? 'dark' : 'light');
}

const savedTheme = localStorage.getItem(storageKey);
setTheme(savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);

function clickLabel(value) {
  const lastTwo = value % 100;
  const last = value % 10;

  if (lastTwo >= 11 && lastTwo <= 14) return 'кликов';
  if (last === 1) return 'клик';
  if (last >= 2 && last <= 4) return 'клика';
  return 'кликов';
}

btn.addEventListener('click', () => {
  count++;
  const messages = [
    'Ratito одобрил клик.',
    'Ratito доволен.',
    'Еще один успешный тест.',
    'Получается все лучше и лучше.',
  ];

  output.textContent = `${messages[(count - 1) % messages.length]} (${count} ${clickLabel(count)})`;
});

themeBtn.addEventListener('click', () => {
  setTheme(!document.body.classList.contains('dark-mode'));
  output.textContent = document.body.classList.contains('dark-mode')
    ? 'Темная тема включена.'
    : 'Светлая тема включена.';
});
