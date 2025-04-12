<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Cart Page Loaded");
    });



  let cart = [
    { name: 'Product 1', category: 'Category A', price: 39.99, quantity: 1, image: 'product-1.jpg', size: 'M' },
    // Add more items as needed
  ];

  // Reactive statements for item count, total price, and tax
  let itemCount = 0;
  let totalPrice = 0;
  let taxRate = 0.21;  // 21% tax rate

  $: {
    itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  // Calculate the tax based on total price
  $: taxAmount = totalPrice * taxRate;

  // Function to update the quantity based on user input
  function updateQuantity(index, newQuantity) {
    const quantity = Math.max(1, newQuantity); // Ensure quantity doesn't go below 1
    cart[index].quantity = quantity;
  }

  // Function to remove an item from the cart
  function removeItem(index) {
    cart.splice(index, 1);
  }
</script>

<div class="container-1">
  <div class="row-1">
    <h1 class="H1">Your Cart</h1>
    <img src="ButterflyPattern.png" alt="Pattern of Butterflies">
  </div>
  <div class="items-total">
    <p>TOTAL</p>
    <p>({itemCount} {itemCount === 1 ? 'item' : 'items'})</p>
    <p style="font-weight: bold;">${totalPrice.toFixed(2)}</p>
  </div>
</div>

<div class="container-2">
  <div class="col-1">
    {#each cart as item, index}
      <div class="product-box">
        <img src={item.image} alt="">
        <div class="product-box-text">
          <p class="product-name">{item.name}</p>
          <p class="product-category">{item.category}</p>
          <p class="product-size">{item.size}</p>
        </div>
        <p class="product-price">${item.price}</p>
        <div class="unit-count">
          <input type="number" min="1" bind:value={item.quantity} on:input={(e) => updateQuantity(index, e.target.value)} />
        </div>
        <div class="remove-item-icon-container">
          <svg class="remove-item-icon" on:click={() => removeItem(index)} xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#1f1f1f">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
          </svg>
        </div>
      </div>
    {/each}
  </div>

  <div class="col-2">
    <h3>Order Summary</h3>
    <div class="purchase-details">
      <div class="col-3">
        <div class="purchase-details-row-1">
          <p>{itemCount} {itemCount === 1 ? 'Item' : 'Items'}</p>
          <p>Delivery</p>
        </div>
        <div class="purchase-details-row-2">
          <p style="font-weight: bold;">Total</p>
          <p>(Inclusive of tax ${taxAmount.toFixed(2)})</p>
        </div>
      </div>
      <div class="col-4">
        <div class="purchase-details-row-1">
          <p>${totalPrice.toFixed(2)}</p>
          <p>Free</p>
        </div>
        <div class="purchase-details-row-2">
          <p style="font-weight: bold;">${(totalPrice + taxAmount).toFixed(2)}</p>
        </div>
      </div>
    </div>
    <div class="button">
      <a href="#">Checkout
        <svg class="arrow_icon" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#5f6368">
          <path d="M686-450H160v-60h526L438-758l42-42 320 320-320 320-42-42 248-248Z"/>
        </svg>
      </a>
    </div>
    <div class="payment-methods">
      <p>ACCEPTED PAYMENT METHODS</p>
      <img src="PaymentMethods.png" alt="American Express, Maestro, Mastercard, Visa, PayPal">
    </div>
  </div>
</div>

<style>
  .container-1 {
    width: 1440px;
    margin: auto;
    padding: 50px;
  }
  .row-1 {
    display: flex;
    justify-content: space-between;
    padding: 50px;
    font-size: 28px;
    color: black;
    margin-top: -90px;
  }
  .row-1 img {
    width: 20%;
    height: 20%;
    align-self: center;
  }
  .items-total {
    display: flex;
    gap: 8px;
    margin-left: 60px;
    margin-top: -40px;
    font-size: 20px;
  }

  .container-2 {
    width: 1440px;
    margin: auto;
    display: flex;
    gap: 80px;
  }

  /* Product Box */
  .product-box {
    display: flex;
    width: 600px;
    height: 220px;
    border: 2px solid black;
  }
  .product-box img {
    width: 220px;
  }
  .product-box-text {
    line-height: 100%;
    padding: 20px;
    text-align: left;
  }

  /* Product Details */
  .product-name {
    font-size: 16px;
  }
  .product-category {
    font-size: 12px;
    color: #7F7F7F;
  }
  .product-size {
    font-size: 12px;
    color: black;
  }
  .product-price {
    height: 40px;
    font-size: 24px;
    font-weight: bold;
    transform: translate(110px, 15px);
  }

  /* Input Field for Quantity */
  .unit-count input {
    width: 80px;
    height: 40px;
    font-size: 16px;
    text-align: center;
  }
  .unit-count {
    height: 30px;
    transform: translate(-170px, 150px);
  }

  /* Remove Item Icon */
  .remove-item-icon-container {
    height: 50px;
    transform: translate(45px, 7px);
    padding: 10px;
  }
  .remove-item-icon:hover {
    transform: scale(1.5);
    stroke-width: 50px;
    border: 1px solid red;
    border-radius: 10px;
  }
  .remove-item-icon {
    fill: red;
    transition: 0.25s;
  }

  /* Order Summary */
  .purchase-details {
    width: 1440px;
    display: flex;
    justify-content: space-between;
    line-height: 2;
  }
  .col-2 {
    text-align: left;
  }
  .col-2 h3 {
    font-weight: bold;
    font-size: 36px;
    margin-bottom: 25px;
  }
  .col-3 {
    width: 1440px;
    text-align: left;
  }
  .col-4 {
    width: 1440px;
    text-align: right;
    margin-right: 780px;
  }
  .purchase-details-row-1 {
    margin-top: 5px;
  }
  .purchase-details-row-2 {
    margin-top: 30px;
  }
  .payment-methods {
    font-size: 16px;
    margin-top: 20px;
  }

  /* Checkout Button */
  .button {
    margin-top: 60px;
    margin-bottom: 40px;
  }
  .button a {
    background-color: black;
    padding: 5px 230px 10px 20px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    justify-items: center;
    transition: 0.5s;
  }
  .button a:hover {
    text-decoration: none;
    background-color: #FF7429;
  }
  .arrow_icon {
    width: 30px;
    height: 30px;
    fill: white;
    stroke-width: 50px;
    stroke: white;
    transform: translate(210px, 8px);
  }
</style>