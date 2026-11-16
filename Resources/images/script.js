// Open and close the navigation menu on small screens.
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".nav-links");

if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("open");
        const isOpen = navigation.classList.contains("open");
        menuButton.setAttribute("aria-expanded", isOpen);
        menuButton.textContent = isOpen ? "×" : "☰";
    });
}

const currentPage = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
document.querySelectorAll(".nav-link").forEach(function (link) {
    const target = (link.getAttribute("href") || "").split("/").pop().toLowerCase();
    if (target === currentPage) {
        link.classList.add("active");
    }
});

// Filter the example product cards as someone types.
const searchBox = document.querySelector("#product-search");
const productCards = document.querySelectorAll(".product-card");

if (searchBox) {
    searchBox.addEventListener("input", function () {
        const searchText = searchBox.value.toLowerCase();

        productCards.forEach(function (card) {
            const cardText = card.textContent.toLowerCase();
            card.style.display = cardText.includes(searchText) ? "" : "none";
        });
    });
}

// Show a demo message when the contact form is submitted.
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        document.querySelector(".form-message").textContent = "Thanks! This demo form does not send messages yet.";
        contactForm.reset();
    });
}
