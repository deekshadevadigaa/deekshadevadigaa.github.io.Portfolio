// Smooth scrolling and section highlighting JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 2) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").slice(1) === current) {
                link.classList.add("active");
            }
        });
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });

        link.addEventListener("mouseenter", () => {
            link.classList.add("hovered");
        });

        link.addEventListener("mouseleave", () => {
            link.classList.remove("hovered");
        });
    });
});

// Get a reference to the video element by its ID
const video = document.getElementById("yourVideo"); // Replace "yourVideo" with the actual ID of your video element

// Add event listeners for mouseenter and mouseleave
video.addEventListener("mouseenter", () => {
    video.setAttribute("controls", true);
});

video.addEventListener("mouseleave", () => {
    video.removeAttribute("controls");
});

//for updation of copyright's year
const currentYear = new Date().getFullYear();

// Update the copyright year in the HTML
const copyrightElement = document.getElementById('copyright');
copyrightElement.textContent = `&copy; ${currentYear} Deeksha Devadiga. All rights reserved.`;




  
  
// JavaScript to toggle the mobile menu
document.querySelector(".mobile-menu").addEventListener("click", function () {
    this.classList.toggle("active");
});
if (window.innerWidth < 768) {
    // Code for phones
} else {
    // Code for desktops
}



  