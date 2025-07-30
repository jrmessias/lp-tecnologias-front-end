// Import our custom CSS
import '../scss/styles.scss'

import * as bootstrap from 'bootstrap'

document.querySelectorAll('[data-scroll-to]').forEach((element) => {
    element.addEventListener('click', () => {
        scrollToSection(element.getAttribute('data-scroll-to'))
    })
})


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId)
    if (section) {
        const offsetTop = section.offsetTop - 80
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        })
    }
}
