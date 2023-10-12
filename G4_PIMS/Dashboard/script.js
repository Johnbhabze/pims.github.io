// JavaScript for handling form submission and displaying the product

const addProductButton = document.getElementById("add-new-product-button");
const productForm = document.getElementById("product-form");
const submitProductButton = document.getElementById("submit-product");
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const productStocksInput = document.getElementById("product-stocks");
const productPromoInput = document.getElementById("product-promo");
const productList = document.getElementById("product-list");

addProductButton.addEventListener("click", () => {
    productForm.style.display = "block";
});

submitProductButton.addEventListener("click", () => {
    const name = productNameInput.value;
    const price = productPriceInput.value;
    const stocks = productStocksInput.value;
    const promo = productPromoInput.value;

    // Create a new row and append it to the table
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${price}</td>
        <td>${stocks}</td>
        <td>${promo}</td>
        <td>
            <div class="kebab-menu">
                <button class="kebab-button">☰</button>
                <div class="kebab-options">
                    <button class="menu-option">View</button>
                    <button class="menu-option">Update</button>
                    <button class="menu-option">Delete</button>
                </div>
            </div>
        </td>
    `;

    productList.appendChild(newRow);

    // Clear the form and hide it
    productNameInput.value = "";
    productPriceInput.value = "";
    productStocksInput.value = "";
    productPromoInput.value = "";
    productForm.style.display = "none";
});

// JavaScript for kebab menu options

productList.addEventListener("click", (e) => {
    if (e.target.classList.contains("kebab-button")) {
        const kebabButton = e.target;
        const kebabMenu = kebabButton.closest(".kebab-menu");
        const kebabOptions = kebabMenu.querySelector(".kebab-options");
        kebabOptions.classList.toggle("show");
    } else {
        // Close kebab menus if clicking outside
        document.querySelectorAll(".kebab-options").forEach((kebabOptions) => {
            kebabOptions.classList.remove("show");
        });
    }
});
