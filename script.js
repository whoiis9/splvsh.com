const buttons = document.querySelectorAll("button");
buttons.forEach(btn =>
  btn.addEventListener("click", () => {
    alert("Added to cart! (This is a demo site)");
  })
);
