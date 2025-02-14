document.addEventListener('DOMContentLoaded', function() {
    // FAQ functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.faq-icon');

            if (answer && icon) {
                answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
                icon.textContent = icon.textContent === '+' ? '-' : '+';
            }
        });
    });
});