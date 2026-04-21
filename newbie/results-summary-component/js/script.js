const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const main = document.querySelector("main");

  Array.from(main.children).forEach((c) => {
    c.remove();
  });
  main.style.padding = "3rem";
  const h1 = document.createElement("h1");
  h1.textContent = "Launching Soon ...";
  main.appendChild(h1);
});
