function toggleFAQ(item) {
  const answer = item.querySelector(".faq-answer");
  const icon = item.querySelector(".icon");

  const isOpen = answer.style.display === "block";

  // Close all others
  document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");
  document.querySelectorAll(".icon").forEach(i => i.textContent = "+");

  if (!isOpen) {
    answer.style.display = "block";
    icon.textContent = "−";
  }
}

// Hide all answers on page load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");
});
