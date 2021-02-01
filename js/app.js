
const barNav = document.querySelector('#container nav .hamburger');
const navLinks = document.querySelector('#container nav .nav-links');
const links = document.querySelectorAll('#container nav .nav-links li');

barNav.addEventListener('click',()=>{
    navLinks.classList.toggle('open');
    links.forEach((link)=>{
        link.classList.toggle("fade");
    });
});