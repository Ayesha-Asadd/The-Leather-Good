document.addEventListener("DOMContentLoaded", function () {

  // Select all elements with class 'dropdown-toggle' inside '.footer-dropdown'
  document.querySelectorAll('.footer-dropdown .dropdown-toggle').forEach(toggle => {

    // Add click event listener to each toggle
    toggle.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default link behavior (if <a> is used)

      // Find the closest parent with class 'footer-dropdown'
      const parentLi = this.closest('.footer-dropdown');

      // Find the arrow icon inside the toggle
      const arrow = this.querySelector('.arrow');

      // Check if the current dropdown is already open
      const isOpen = parentLi.classList.contains('open');

      // Toggle dropdown state
      if (!isOpen) {
        // Open this dropdown
        parentLi.classList.add('open');

        // Change arrow icon to 'X' (or any symbol representing open state)
        if (arrow) arrow.textContent = 'X';
      } else {
        // Close this dropdown
        parentLi.classList.remove('open');

        // Change arrow icon to '˅' (downward arrow indicating closed state)
        if (arrow) arrow.textContent = '˅';
      }
    });
  });
});
