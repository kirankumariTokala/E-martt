// ORDER STATUS STEPS
const steps = [
  "Order Placed",
  "Packed",
  "Shipped",
  "Out for Delivery",
  "Delivered"
];

// Load Orders
function loadOrders(){
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const box = document.getElementById("orders-container");
  box.innerHTML = "";

  if(orders.length === 0){
    box.innerHTML = "<p style='text-align:center'>No orders yet</p>";
    return;
  }

  orders.forEach(order => {
    box.innerHTML += `
      <div class="order-card">
        <h3>Order #${order.orderId}</h3>
        <p><strong>Product:</strong> ${order.productName}</p>

        <div class="tracker">
          ${steps.map((s,i)=>`
            <div class="step ${i <= order.status ? "done" : ""}">
              ${s}
            </div>
          `).join("")}
        </div>
      </div>
    `;
  });
}

loadOrders();

function getCountdown(deliveryDate){
  const now = new Date().getTime();
  const delivery = new Date(deliveryDate).getTime();
  const diff = delivery - now;

  if(diff <= 0) return "Delivered ✅";

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return `Delivery in: ${days}d ${hours}h ${minutes}m`;
}
setInterval(loadOrders, 60000); // refresh every 1 minute  