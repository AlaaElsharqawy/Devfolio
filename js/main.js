var typed = new Typed("#element", {
  strings: ["Disgner", "Developer", "Freelancer", "Photographer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

const counters = document.querySelectorAll(".number");
counters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 25;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 50);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
