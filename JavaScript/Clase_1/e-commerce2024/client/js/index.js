const shopContent = document.getElementById("shopContent");

products.forEach((product) => {
    const content = document.createElement("div");
    content.innerHTML = `
        <div class="product">
            <div class="image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="info">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <div class="rating">
                    <span>${product.rating}</span>
                    <span>${product.reviews}</span>
                </div>
                <div class="tags">
                    ${product.tags.map((tag) => `<span>${tag}</span>`).join("")}
                </div>
                <div class="price">
                    <span>${product.price}</span>
                    <button>Comprar</button>
                </div>
            </div>
        </div>
    `;
    shopContent.appendChild(content);
});
    