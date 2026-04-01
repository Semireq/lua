// Rickroll every button
function rickroll() {
  const modal = document.getElementById('modal');
  const frame = document.getElementById('rr-frame');
  frame.src = 'https://www.youtube.com/embed/xvFZjo5PgG0?autoplay=1';
  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('modal');
  const frame = document.getElementById('rr-frame');
  modal.classList.remove('active');
  frame.src = '';
}

// Close modal on overlay click
document.getElementById('modal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

// FAQ accordion
function toggleFaq(el) {
  const isOpen = el.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) el.classList.add('open');
}

// Intercept ALL clicks on nav links and footer links
document.querySelectorAll('.nav-links a, .footer-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    rickroll();
  });
});

// Live user counter ticking realistically
(function () {
  const el = document.querySelector('.stat-num');
  if (!el) return;
  let count = 1247;
  setInterval(() => {
    const delta = Math.random() < 0.5 ? 1 : -1;
    count = Math.max(1230, Math.min(1265, count + delta));
    el.textContent = count.toLocaleString();
  }, 3500);
})();
