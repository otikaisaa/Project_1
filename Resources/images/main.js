const searchInput = document.querySelector("#product-search");
const categoryButtons = document.querySelectorAll(".category");
const productCards = document.querySelectorAll(".product-card");
const noResults = document.querySelector("#no-results");
const cartCount = document.querySelector(".cart-count");

let activeCategory = "all";
let itemCount = 0;

function filterProducts() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    productCards.forEach((card) => {
        const matchesCategory = activeCategory === "all" || card.dataset.category === activeCategory;
        const matchesSearch = card.dataset.name.toLowerCase().includes(searchTerm);
        const isVisible = matchesCategory && matchesSearch;

        card.hidden = !isVisible;
        if (isVisible) visibleCount += 1;
    });

    noResults.hidden = visibleCount > 0;
}

searchInput.addEventListener("input", filterProducts);

categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeCategory = button.dataset.category;
        categoryButtons.forEach((category) => category.classList.toggle("active", category === button));
        filterProducts();
    });
});

document.querySelectorAll(".add-button").forEach((button) => {
    button.addEventListener("click", () => {
        itemCount += 1;
        cartCount.textContent = itemCount;
        button.innerHTML = "Added to bag <span>✓</span>";
        button.classList.add("added");
        window.setTimeout(() => {
            button.innerHTML = "Add to bag <span>+</span>";
            button.classList.remove("added");
        }, 1200);
    });
});
