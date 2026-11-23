'use strict';
const root = document.documentElement;
const themeButton = document.querySelector('#theme');
function setTheme(theme) {
  root.dataset.theme = theme;
  const next = theme === 'dark' ? 'light' : 'dark';
  themeButton.textContent = `${next[0].toUpperCase() + next.slice(1)} mode`;
  themeButton.setAttribute('aria-label', `Switch to ${next} theme`);
}
try { setTheme(localStorage.getItem('karan-theme') === 'light' ? 'light' : 'dark'); } catch { setTheme('dark'); }
themeButton.addEventListener('click', () => {
  const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  try { localStorage.setItem('karan-theme', theme); } catch { /* Theme still works without storage. */ }
});
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let count = 0;
  document.querySelectorAll('[data-category]').forEach(card => {
    card.hidden = filter !== 'all' && !card.dataset.category.split(' ').includes(filter);
    if (!card.hidden) count++;
  });
  document.querySelector('#filter-status').textContent = `${count} projects shown.`;
}));
document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try { await navigator.clipboard.writeText('karankumar11aa@gmail.com'); status.textContent = 'Email copied.'; }
  catch { status.textContent = 'Copy unavailable. Select this email: karankumar11aa@gmail.com'; }
});
document.querySelector('#year').textContent = new Date().getFullYear();
