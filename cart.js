// Fetch cart from localStorage or create empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-container");
const cartTotal = document.getElementById("cart-total");

// Function to display cart items
function displayCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    if(cart.length === 0){
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.innerText = 0;
        return;
    }

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);

        const div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="cart-img">
            <div class="cart-details">
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price}</p>
                <p>Quantity: 
                    <button onclick="decreaseQty(${product.id})">-</button>
                    ${item.quantity}
                    <button onclick="increaseQty(${product.id})">+</button>
                </p>
                <p>Subtotal: ₹${product.price * item.quantity}</p>
                <button onclick="removeFromCart(${product.id})">Remove</button>
            </div>
        `;
        cartContainer.appendChild(div);

        total += product.price * item.quantity;
    });

    cartTotal.innerText = total;
}

// Increase quantity
function increaseQty(id){
    const index = cart.findIndex(i => i.id === id);
    if(index !== -1){
        cart[index].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    }
}

// Decrease quantity
function decreaseQty(id){
    const index = cart.findIndex(i => i.id === id);
    if(index !== -1){
        if(cart[index].quantity > 1){
            cart[index].quantity -= 1;
        } else {
            // Remove if quantity reaches 0
            cart.splice(index, 1);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    }
}

// Remove product
function removeFromCart(id){
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Initial display
displayCart();
