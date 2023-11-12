document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const selectedDiv = document.getElementById("selected");

  // Auto-select the first card on page load
  cards[0].classList.add("selected");
  selectedDiv.style.display = "block";

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      if (this.classList.contains("selected")) {
        return;
      }

      cards.forEach((c) => {
        c.classList.remove("selected");
      });

      this.classList.add("selected");
      selectedDiv.style.display = "block";
    });
  });
});

var detailsVisible = false;

function toggleDetails() {
  var content = document.getElementById("details-content");

  if (!detailsVisible) {
    content.style.maxHeight = "1000px"; // Set a maximum height to show smoothly
    detailsVisible = true;
  } else {
    content.style.maxHeight = "0"; // Set max-height back to 0 to hide smoothly
    detailsVisible = false;
  }
}

// side accordion
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");
  const icon = item.querySelector(".icon");

  header.addEventListener("click", () => {
    if (content.style.display === "none") {
      content.style.display = "block";
      icon.textContent = "-";
      item.classList.add("active");
    } else {
      content.style.display = "none";
      icon.textContent = "+";
      item.classList.remove("active");
    }
  });
});
