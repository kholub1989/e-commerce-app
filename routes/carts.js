const express = require('express');

const router = express.Router();

// Receive a POST req to add an item to a cart
router.post('/cart/products', (req, res) => {
  console.log(req.body.productId);
  res.send('Product added to cart');
});
// recive a GET req to show all items in cart

// Recive a POST req to del an item from a cart

module.exports = router;
