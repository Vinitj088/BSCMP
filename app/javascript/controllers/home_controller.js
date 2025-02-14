import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["navLinks", "hamburger"]

  connect() {
    this.initializeFAQ()
  }

  toggleMenu() {
    this.navLinksTarget.classList.toggle('active')
    this.hamburgerTarget.classList.toggle('active')
  }

  closeMenu(event) {
    if (!this.navLinksTarget.contains(event.target) && 
        !this.hamburgerTarget.contains(event.target) && 
        this.navLinksTarget.classList.contains('active')) {
      this.hamburgerTarget.classList.remove('active')
      this.navLinksTarget.classList.remove('active')
    }
  }

  initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question')
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling
        const icon = question.querySelector('.faq-icon')
        answer.classList.toggle('active')
        icon.textContent = answer.classList.contains('active') ? '-' : '+'
      })
    })
  }
} 