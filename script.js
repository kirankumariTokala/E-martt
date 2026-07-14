const CART_KEY = "cartItems";
const WISHLIST_KEY = "wishlistItems";

// -------------------------
// Get Cart / Wishlist
function getCart(){ return JSON.parse(localStorage.getItem(CART_KEY)) || [] }
function getWishlist(){ return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [] }

// -------------------------
// Save Cart / Wishlist
function saveCart(cart){ 
    localStorage.setItem(CART_KEY, JSON.stringify(cart)); 
    updateCartCount();
}
function saveWishlist(wishlist){ 
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist)) 
}

// -------------------------
// Add to Cart
function addToCartById(id){
  const cart = getCart();
  const product = products.find(p => p.id === id);
  if(!product){ alert("Product not found"); return; }

  const exist = cart.find(item => item.id === id);
  if(exist){ exist.qty += 1; }
  else{ cart.push({...product, qty: 1}); }

  saveCart(cart);
  alert("Added to Cart ✅");
  loadCart();
}

// -------------------------
// Add to Wishlist
function addToWishlistById(id){
  const wishlist = getWishlist();
  const product = products.find(p => p.id === id);
  if(!product){ alert("Product not found"); return; }

  const exist = wishlist.find(item => item.id === id);
  if(exist){ alert("Already in Wishlist ❤️"); return; }

  wishlist.push({...product, qty:1});
  saveWishlist(wishlist);
  alert("Added to Wishlist ❤️");
  loadWishlist();
}

// -------------------------
// Load Cart (cart.html)
function loadCart(){
  const cart = getCart();
  const box = document.getElementById("cart-container");
  if(!box) return;

  let total = 0;
  box.innerHTML = "";

  if(cart.length === 0){
    box.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach(item => {
    box.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}" width="100">
        <div>
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
          <p>Qty: ${item.qty}</p>
          <button onclick="removeFromCart(${item.id})">Remove</button>
          <button onclick="showBuyDetails(${item.id})">Buy</button>
        </div>
      </div>
    `;
    total += item.price * item.qty;
  });

  box.innerHTML += `<h3>Total: ₹${total}</h3>`;
}

// -------------------------
// Remove from Cart
function removeFromCart(id){
  let cart = getCart();
  cart = cart.filter(item => item.id !== id);
  saveCart(cart);
  loadCart();
}

// -------------------------
// Load Wishlist (wishlist.html)
function loadWishlist(){
  const wishlist = getWishlist();
  const box = document.getElementById("wishlist-container");
  if(!box) return;

  box.innerHTML = "";
  if(wishlist.length === 0){
    box.innerHTML = "<p>Your wishlist is empty.</p>";
    return;
  }

  wishlist.forEach(item => {
    box.innerHTML += `
      <div class="wishlist-item">
        <img src="${item.img}" width="100">
        <div>
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
          <button onclick="addToCartById(${item.id})">Add to Cart</button>
          <button onclick="removeFromWishlist(${item.id})">Remove</button>
          <button onclick="showBuyDetails(${item.id})">Buy</button>
        </div>
      </div>
    `;
  });
}

// -------------------------
// Remove from Wishlist
function removeFromWishlist(id){
  let wishlist = getWishlist();
  wishlist = wishlist.filter(item => item.id !== id);
  saveWishlist(wishlist);
  loadWishlist();
}

// -------------------------
// BUY POPUP
function showBuyDetails(id){
  const product = products.find(p=>p.id===id);
  if(!product) return;

  let popup = document.getElementById("buy-popup");
  if(!popup){
    popup = document.createElement("div");
    popup.id = "buy-popup";
    document.body.appendChild(popup);
  }

  popup.innerHTML = `
    <div class="popup-content">
      <h2>Buy ${product.name}</h2>
      <img src="${product.img}" width="150">
      <p>Price: ₹${product.price}</p>
      <form id="buy-form">
        <input type="text" name="name" placeholder="Full Name" required>
        <input type="text" name="address" placeholder="Address" required>
        <input type="text" name="phone" placeholder="Phone Number" required>
        <button type="submit">Place Order</button>
        <button type="button" onclick="closeBuyPopup()">Cancel</button>
      </form>
    </div>
  `;
  popup.style.display = "flex";

  document.getElementById("buy-form").onsubmit = function(e){
    e.preventDefault();
    alert(`Order Successful ✅\n
Product: ${product.name}
Price: ₹${product.price}
Name: ${this.name.value}
Address: ${this.address.value}
Phone: ${this.phone.value}`);
// SAVE ORDER FOR TRACKING
const orders = JSON.parse(localStorage.getItem("orders")) || [];

orders.push({
  orderId: Date.now(),
  productId: product.id,
  productName: product.name,
  productImg: product.img,   // ✅ IMAGE
  status: 0,
  deliveryDate: deliveryDate.toDateString() // ✅ DATE
});

localStorage.setItem("orders", JSON.stringify(orders));

    closeBuyPopup();
  }
}

function closeBuyPopup(){
  const popup = document.getElementById("buy-popup");
  if(popup) popup.style.display = "none";
}

// -------------------------
// Cart Count
function updateCartCount(){
    const cart = getCart();
    const countSpan = document.getElementById("cart-count");
    if(countSpan){
        let totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
        countSpan.textContent = totalQty;
    }
}

// -------------------------
// Rows wrap for index.html
function wrapProductsInRows() {
    const productSections = document.querySelectorAll('.products');
    productSections.forEach(section => {
        const cards = Array.from(section.querySelectorAll('.product-card'));
        if(cards.length === 0) return;

        cards.forEach(c => c.remove());

        let rowIndex = 0;
        while(cards.length > 0){
            const row = document.createElement('div');
            row.className = 'row';
            let count = 3; 
            const categoryName = section.querySelector('h4.left-heading')?.textContent.trim();
            const specialRows = {
                "Mobiles": [3,2],
                "Laptops": [3,3],
                "Smart Watches": [3,3],
                "Air Conditioners": [3,2],
                "Earbuds": [3,3],
                "Televisions": [3,3],
                "Refrigerators": [3,3]
            };
            if(specialRows[categoryName] && rowIndex < specialRows[categoryName].length){
                count = specialRows[categoryName][rowIndex];
            }

            cards.splice(0, count).forEach(c => row.appendChild(c));
            section.appendChild(row);
            rowIndex++;
        }
    });
}

// -------------------------
// Load all on DOMContentLoaded
document.addEventListener("DOMContentLoaded", ()=>{
  loadCart();
  loadWishlist();
  updateCartCount();
  wrapProductsInRows();
});
function searchProducts() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const allProducts = document.querySelectorAll(".product-card");
    const allSections = document.querySelectorAll(".products");
    const noResults = document.getElementById("no-results");

    let found = false;

    allProducts.forEach(card => {
        const name = card.querySelector("h3").innerText.toLowerCase();

        if (name.includes(searchValue)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    allSections.forEach(section => {
        const visibleCards = section.querySelectorAll(
            ".product-card:not([style*='display: none'])"
        );
        section.style.display = visibleCards.length ? "block" : "none";
    });

    noResults.style.display = found ? "none" : "block";
}
function clearSearch(){
    document.getElementById("search").value = "";
    searchProducts();
}
