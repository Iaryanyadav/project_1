// Example interactivity for "View Deal" buttons
document.querySelectorAll(".card-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Deal opened! Redirecting to sponsor page...");
  });
});

// Smooth scroll for hero buttons
document.querySelector(".primary").addEventListener("click", () => {
  document.querySelector(".events").scrollIntoView({ behavior: "smooth" });
});
