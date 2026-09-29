
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

document.querySelectorAll('[data-mail-form]').forEach(form => {
  form.addEventListener('submit', ev => {
    ev.preventDefault();
    const fd = new FormData(form);
    const name = fd.get('name') || '';
    const email = fd.get('email') || '';
    const subject = fd.get('subject') || 'Academic website contact';
    const message = fd.get('message') || '';
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const url = `mailto:jose.rugeles@unimilitar.edu.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  });
});

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
