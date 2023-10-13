const addProductButton = document.getElementById("add-new-product-button");
const productForm = document.getElementById("product-form");
const closeModalButton = document.getElementById("close-modal-button");
const submitProductButton = document.getElementById("submit-product");
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const productPromoInput = document.getElementById("product-promo");
const productStocksInput = document.getElementById("product-stocks");
const productList = document.getElementById("product-list");
const productImageInput = document.getElementById("product-image"); // Add this line
const imagePreview = document.getElementById("image-preview");
const resetProductButton = document.getElementById("reset-product");
const plusSign = document.querySelector(".plus-sign");


addProductButton.addEventListener("click", () => {
    productForm.style.display = "block";
});
resetProductButton.addEventListener("click", () => {
    productNameInput.value = "";
    productPriceInput.value = "";
    productPromoInput.value = "";
    productStocksInput.value = "";
    imagePreview.innerHTML = "";
});

productImageInput.addEventListener("change", () => {
    const file = productImageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.innerHTML = ""; // Clear any previous content
            const img = document.createElement("img");
            img.src = e.target.result;

            // Set the width and height to fit in a 2x2 inch box
            img.style.width = "2in";
            img.style.height = "2in";

            // Center the image both vertically and horizontally using flexbox
            img.style.display = "block";
            img.style.margin = "auto";

            plusSign.style.display = "none";

            imagePreview.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

closeModalButton.addEventListener("click", () => {
    productForm.style.display = "none";
});

submitProductButton.addEventListener("click", () => {
    const name = productNameInput.value;
    const price = productPriceInput.value;
    const promo = productPromoInput.value;
    const stocks = productStocksInput.value;

    if (name && price && promo && stocks) {
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

        productNameInput.value = "";
        productPriceInput.value = "";
        productPromoInput.value = "";
        productStocksInput.value = "";

        productForm.style.display = "none";
    }
});

// JavaScript for kebab menu options
productList.addEventListener("click", (e) => {
    if (e.target.classList.contains("kebab-button")) {
        const kebabButton = e.target;
        const kebabMenu = kebabButton.closest(".kebab-menu");
        const kebabOptions = kebabMenu.querySelector(".kebab-options");
        kebabOptions.classList.toggle("show");
    } else {
        document.querySelectorAll(".kebab-options").forEach((kebabOptions) => {
            kebabOptions.classList.remove("show");
        });
    }
});
