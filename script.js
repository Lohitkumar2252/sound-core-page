let tl = gsap.timeline();

tl.from("header", {
  opacity: 0,
  duration: 1.5,
});

tl.from(".nav_lists", {
  y: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

gsap.from(".hero_section .container h1, .hero_section .container p", {
  y: 50,
  opacity: 0,
  stagger: 0.5,
});
gsap.from(".music_section .container", {
  opacity: 0,
  duration: 1,
});
tl.from(".music", {
  y: 50,
  opacity: 0,
  stagger: 0.3,
});

gsap.from(".ipad-iphone-img", {
  scrollTrigger: {
    trigger: ".ipad-iphone-img",
    start: "top 70%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

gsap.from(".about", {
  scrollTrigger: {
    trigger: ".about_section .container",
    start: "top 70%",
  },
  opacity: 0,
  y: 50,
  duration: 2,
  stagger: 0.3,
});
gsap.from(".macbook", {
  scrollTrigger: {
    trigger: ".macbook",
    start: "top 70%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

gsap.from(".gift_img img", {
    scrollTrigger: {
        trigger: ".gift_img",
        start: "top 60%",
    },
  opacity: 0,
  duration: 1
});

gsap.from(".gift", {
    scrollTrigger: {
        trigger: ".gift_content",
        start: "top 70%"
    },

  duration: 2,
  opacity: 0,
})


const menuBtn = document.querySelector(".menu_icon");
const dropMenu = document.querySelector(".drop_menu");

menuBtn.addEventListener("click", () => {
  dropMenu.classList.toggle("active");
  menuBtn.classList.toggle("cross");
  if (menuBtn.classList.contains("cross")) {
    menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
})  