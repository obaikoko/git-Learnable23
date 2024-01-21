const learnableProducts = {
  laptop: { name: 'Laptop', price: 800 },
  smartphone: { name: 'Smartphone', price: 500 },
  headphones: { name: 'Headphones', price: 80 },
};

const shoppingCart = [];

function addToCart(productKey, quantity) {
  const product = learnableProducts[productKey];

  if (product) {
    const item = { ...product, quantity };
    shoppingCart.push(item);
    console.log(`${quantity} ${item.name}(s) added to the cart.`);
  } else {
    console.log('Product not found in the available products.');
  }
}

function displayCart() {
  console.log('Shopping Cart:');
  shoppingCart.forEach((item) => {
    console.log(
      `${item.name} - Quantity: ${item.quantity} - Price: $${
        item.price * item.quantity
      }`
    );
  });
}

addToCart('laptop', 2);
addToCart('smartphone', 1);
displayCart();
