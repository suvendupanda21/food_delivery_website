// Cart items stored in memory (you can use localStorage for persistence)
// Cart items stored in memory (you can use localStorage for persistence)
let cartItems = [];

// Function to add a product to the cart
function addToCart(button) {
    const product = button.parentNode;
    const productId = product.dataset.id;
    const productName = product.dataset.name;
    const productPrice = parseInt(product.dataset.price);

    // Check if the product is already in the cart
    const existingItem = cartItems.find(item => item.id === productId);

    if (existingItem) {
        // If the product is already in the cart, increase the quantity
        existingItem.quantity++;
    } else {
        // Otherwise, add the product to the cart with quantity 1
        cartItems.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }

    // Update the cart display
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Clear existing cart items
    cartList.innerHTML = '';
    let totalAmount = 0;

    // Loop through cartItems and add each item to the cart display
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} x ${item.quantity} - ₹${item.price * item.quantity}`;
        cartList.appendChild(listItem);
        totalAmount += item.price * item.quantity;
    });

    // Update total cart amount
    cartTotal.textContent = totalAmount;
}
