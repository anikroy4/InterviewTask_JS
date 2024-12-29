const products = [
  { id: 1, name: 'Laptop', price: 500, quantity: 10 },
  { id: 2, name: 'Phone', price: 300, quantity: 15 },
  { id: 3, name: 'Headphones', price: 100, quantity: 20 },
  { id: 4, name: 'Charger', price: 25, quantity: 30 },
];

function addToCart(cart, productId, quantity) {
  const product = products.find(p => p.id === productId);

  if (!product) {
      console.log("Product not found.");
      return;
  }

  if (product.quantity < quantity) {
      console.log("Not enough stock.");
      return;
  }

  const cartItem = cart.find(item => item.id === productId);

  if (cartItem) {
      cartItem.quantity += quantity;
  } else {
      cart.push({ ...product, quantity }); // Spread operator to avoid modifying original product
  }

  product.quantity -= quantity;
}

function removeFromCart(cart, productId) {
  const cartItemIndex = cart.findIndex(item => item.id === productId);

  if (cartItemIndex === -1) {
      console.log("Product not found in cart.");
      return;
  }

  const cartItem = cart[cartItemIndex];
  const product = products.find(p => p.id === productId);

  if (product) {
      product.quantity += cartItem.quantity;
  }

  cart.splice(cartItemIndex, 1);
}

function calculateTotal(cart) {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function checkout(cart) {
  const total = calculateTotal(cart);
  console.log(`Thank you for your purchase! Total: $${total}`);

  if (products.some(product => product.quantity < 0)) {
      console.log("Error: Product stock has dropped below 0.");
  }
}

// Example Usage
let cart = [];

addToCart(cart, 1, 2); // Add 2 Laptops
addToCart(cart, 3, 1); // Add 1 Headphone
console.log("Cart after adding items:", cart);
console.log("Total:", calculateTotal(cart));

removeFromCart(cart, 1); // Remove Laptop from the cart
console.log("Cart after removing Laptop:", cart);

addToCart(cart, 1, 15); //Try to add more laptops than available
console.log("Cart after trying to add too many laptops", cart);

cart = [];
addToCart(cart, 1, 10);
checkout(cart);

console.log("Products after checkout", products);