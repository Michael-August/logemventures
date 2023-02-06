let navLinks = document.querySelectorAll('.nav-link')

// Navbar scroll effect
window.addEventListener('scroll', () => {
    let navbar = document.querySelector('.navbar')
    navbar.classList.toggle('sticky', window.scrollY)
})

// active routes
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active')
    }
})
