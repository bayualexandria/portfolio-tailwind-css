// ===============================
// Mobile Menu
// ===============================

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  loader.style.opacity = "0";

  setTimeout(() => {
    loader.remove();
  }, 700);
});
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// ===============================
// Navbar Scroll
// ===============================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add(
      "backdrop-blur-2xl",
      "bg-white/70",
      "dark:bg-slate-900/70",
      "shadow-2xl",
    );
  } else {
    navbar.classList.remove(
      "backdrop-blur-2xl",
      "bg-white/70",
      "dark:bg-slate-900/70",
      "shadow-2xl",
    );
  }
});

const words = [
  "Full Stack Developer",

  "Laravel Developer",

  "Golang Developer",

  "Flutter Developer",

  "REST API Specialist",
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];

  if (isDeleting) {
    document.getElementById("typing").textContent = currentWord.substring(
      0,
      j--,
    );
  } else {
    document.getElementById("typing").textContent = currentWord.substring(
      0,
      j++,
    );
  }

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;

    setTimeout(type, 1200);

    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;

    i++;

    if (i === words.length) {
      i = 0;
    }
  }

  setTimeout(type, isDeleting ? 60 : 120);
}

type();
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const update = () => {
    const target = +counter.dataset.target;

    const current = +counter.innerText;

    const increment = target / 80;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);

      setTimeout(update, 20);
    } else {
      counter.innerText = target + "+";
    }
  };

  update();
});

const glow = document.getElementById("cursorGlow");

window.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";

  glow.style.top = e.clientY + "px";
});

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topButton.classList.remove("hidden");
  } else {
    topButton.classList.add("hidden");
  }
});

topButton.onclick = () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
};

const darkToggle = document.getElementById("dark-toggle");

darkToggle.onclick = () => {
  document.documentElement.classList.toggle("dark");

  localStorage.theme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
};

if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
}

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 150;

    if (pageYOffset >= top) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-blue-500");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("text-blue-500");
    }
  });
});
