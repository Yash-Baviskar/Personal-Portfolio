function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

var typingEffect = new Typed(".multitext",{
    strings : ["coder", "Web-Developer", "writer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500   
})