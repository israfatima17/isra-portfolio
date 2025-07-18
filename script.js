document.addEventListener('DOMContentLoaded', () => {
  // FAQ toggle code (unchanged)
  function toggleFAQ(item) {
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".icon");

    const isOpen = answer.style.display === "block";

    document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");
    document.querySelectorAll(".icon").forEach(i => i.textContent = "+");

    if (!isOpen) {
      answer.style.display = "block";
      icon.textContent = "−";
    }
  }

  document.querySelectorAll(".faq-item").forEach(item => {
    item.onclick = () => toggleFAQ(item);
  });

  // Feedback slider code
  const feedbackCards = document.querySelector('.feedback-cards');
  const cards = document.querySelectorAll('.feedback-card');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let currentIndex = 0;

  function updateSlider() {
    // Translate feedback-cards container based on currentIndex
    const cardWidth = cards[0].offsetWidth + 20; // 20 is gap between cards
    feedbackCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });
});

function toggleGallery() {
  const gallery = document.getElementById("galleryContent");
  const arrow = document.querySelector(".arrow-icon");

  gallery.classList.toggle("active");
  arrow.textContent = gallery.classList.contains("active") ? "▲" : "▼";
}

