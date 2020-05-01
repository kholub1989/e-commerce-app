const express = require('express');
const cartsRepo = require('../repositories/carts');

const router = express.Router();

// Receive a POST req to add an item to a cart
router.post('/cart/products', async (req, res) => {
  // Figure out the cart!
  let cart;
  if (!req.session.cartId) {
    // I dont have a cart, we need to create one, and store the cart id on the req.session.cart.Id property
    cart = await cartsRepo.create({ items: [] });
    req.session.cartId = cart.id;
  } else {
    // I have a cart! Lets get it from the repository
    cart = await cartsRepo.getOne(req.session.cartId);
  }
  console.log(cart);
  // Ether increment quantity for existing product
  // OR add new product to item array
  res.send('Product added to cart');
});
// recive a GET req to show all items in cart

// Recive a POST req to del an item from a cart

module.exports = router;
