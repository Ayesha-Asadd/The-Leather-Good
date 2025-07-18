document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.footer-dropdown .dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();

      const parentLi = this.closest('.footer-dropdown');
      const arrow = this.querySelector('.arrow');
      const isOpen = parentLi.classList.contains('open');

      // Toggle only the clicked dropdown
      if (!isOpen) {
        parentLi.classList.add('open');
        if (arrow) arrow.textContent = 'X';
      } else {
        parentLi.classList.remove('open');
        if (arrow) arrow.textContent = '˅';
      }
    });
  });
});

