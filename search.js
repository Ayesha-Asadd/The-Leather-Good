document.addEventListener('DOMContentLoaded', function () {
  
    // ✅ FAQ Toggle - Only one open at a time
   // FAQ toggle - only one open at a time
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      faqQuestions.forEach(q => {
        if (q !== question) {
          q.classList.remove('active');
          q.nextElementSibling.style.display = 'none';
        }
      });
      const answer = question.nextElementSibling;
      const isOpen = answer.style.display === 'block';

      if (isOpen) {
        answer.style.display = 'none';
        question.classList.remove('active');
      } else {
        answer.style.display = 'block';
        question.classList.add('active');
      }
    });
  });

    // ✅ Search overlay toggle
    const searchIcon = document.querySelector(".modal__toggle-open");
    const closeIcon = document.getElementById("closeSearch");
    const searchOverlay = document.getElementById("searchOverlay");
    const backdropOverlay = document.getElementById("backdropOverlay");

    searchIcon?.addEventListener("click", () => {
      searchOverlay.style.display = "flex";
      backdropOverlay?.classList.add("active");
    });

    closeIcon?.addEventListener("click", () => {
      searchOverlay.style.display = "none";
      backdropOverlay?.classList.remove("active");
    });

    // Ensure search bar is hidden initially
    searchOverlay.style.display = "none";
    backdropOverlay?.classList.remove("active");
  });