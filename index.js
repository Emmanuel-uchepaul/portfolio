let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav');

menuIcon.onclick = () => {
  menuIcon . classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach(link => link.classList.remove("active"));

      let targetLink = document.querySelector('header nav a[href*="' + id + '"]');
      if (targetLink) targetLink.classList.add("active");
    }
  });
  let header = document.querySelector('header'); 

header.classList.toggle('sticky', window.scrollY > 100);

 menuIcon . classList.remove('bx-x');
  navbar.classList.remove('active');

};
    ScrollReveal({ 
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
    });

ScrollReveal().reveal('.home-info, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .project-grid, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-info h1, .about img', { origin: 'left' });
ScrollReveal().reveal('.home-info p, .about-info', { origin: 'rigth' });


const typed = new Typed('.multiple-text',{
  strings:['Frontend Developer!', 'Web Developer!', 'Backend developer!', 'Full stack developer!'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
  const form = document.getElementById("contactForm");
  const messageResponse = document.getElementById("messageResponse");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
          setTimeout(() => {
      message.style.display = 'none';
    }, 4000);

    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      messageResponse.style.display = "block";
      form.reset();
    } else {
      messageResponse.textContent = "Oops! Something went wrong.";
      messageResponse.style.color = "red";
      messageResponse.style.display = "block";
    }
  });
