const container = document.getElementById("products");

// Show products by list with category-wise rows
function showProducts(list){
  if(!container) return; // Guard if container not found
  container.innerHTML = "";

  // Categories in specific order
  const categoriesOrder = ["Mobiles","Laptops","Smart Watches","AC","Earbuds","Television","Refrigerator"];

  categoriesOrder.forEach(categoryName => {
    const categoryProducts = list.filter(p => p.category === categoryName);
    if(categoryProducts.length === 0) return;

    // Category heading
    container.innerHTML += `<h4 class="left-heading">${categoryName}</h4>`;

    // Display in rows: 3 products per row
    for(let i = 0; i < categoryProducts.length; i += 3){
      container.innerHTML += `<div class="row">`;
      
      categoryProducts.slice(i, i + 3).forEach(p => {
        container.innerHTML += `
          <div class="product-card">
            <img src="${p.img}" alt="${p.name}" onclick="location.href='product.html?id=${p.id}'">
            <h3>${p.name}</h3>
            <p><b>Price:</b> ₹${p.price}</p>
            <p class="desc">${p.desc}</p>
            <p><b>Rating:</b> ${p.rating ? p.rating+" ⭐" : "No rating"}</p>
            <button onclick="addToCartById(${p.id})">Add to Cart</button>
            <span class="wishlist" onclick="addToWishlistById(${p.id})">❤️</span>
          </div>
        `;
      });

      container.innerHTML += `</div>`; // Close row
    }
  });
}

// Initial render
showProducts(products);

// Search function
function searchProducts(){
  const text = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(text) ||
    p.desc.toLowerCase().includes(text)
  );
  showProducts(filtered);
}
