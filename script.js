const navBar = () => {
  //   selectors
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("ul");
  const li = document.querySelectorAll("ul li");

  burger.addEventListener("click", () => {
    // toggle nav
    nav.classList.toggle("nav-active");
    //   animate
    li.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navFade 0.5s ease forwards ${index / 7}s`;
      }
    });
  });
};

navBar();