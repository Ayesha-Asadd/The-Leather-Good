document.addEventListener('DOMContentLoaded', function () {

  // === FAQ Toggle Functionality ===
  // Select all FAQ question elements
  const faqQuestions = document.querySelectorAll('.faq-question');

  // Loop through each question element
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {

      // Close all other open FAQs except the one clicked
      faqQuestions.forEach(q => {
        if (q !== question) {
          q.classList.remove('active');               // Remove active class
          q.nextElementSibling.style.display = 'none'; // Hide the answer
        }
      });

      // Get the associated answer element (the next sibling)
      const answer = question.nextElementSibling;

      // Check if the clicked FAQ is already open
      const isOpen = answer.style.display === 'block';

      if (isOpen) {
        // If open: close it
        answer.style.display = 'none';
        question.classList.remove('active');
      } else {
        // If closed: open it
        answer.style.display = 'block';
        question.classList.add('active');
      }
    });
  });
});
