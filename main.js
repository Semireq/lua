function rickroll(e) {
  if (e) e.preventDefault();
  const modal = document.getElementById('modal');
  const frame = document.getElementById('rr-frame');
  frame.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('modal');
  const frame = document.getElementById('rr-frame');
  modal.classList.remove('active');
  frame.src = '';
}

document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

function toggleFaq(el) {
  const isOpen = el.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) el.classList.add('open');
}

// Live user counter
(function() {
  const el = document.getElementById('live-users');
  if (!el) return;
  let count = 1247;
  setInterval(() => {
    const delta = Math.random() < 0.5 ? 1 : -1;
    count = Math.max(1230, Math.min(1265, count + delta));
    el.textContent = count.toLocaleString();
  }, 3500);
})();
