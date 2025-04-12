<script>
    import { products } from "$lib/products.js";
    export let data;
    const { product } = data;
    console.log(product); // check if product.img is showing

    // Reactive variables to store the selected size and units
  let selectedSize = '';
  let selectedUnits = 1;

  // Function to handle size selection
  function selectSize(size) {
    selectedSize = size;
  }

  // Check if the user has selected a size and units
  $: isValidSelection = selectedSize !== '' && selectedUnits > 0;
</script>

{#if product}
  <div class="container-1">
    <div class="col-1">
      <div class="product-showcase">
        <div class="primary-image">
          <img src="{product.img}" alt="{product.name}" />
        </div>
        <div class="secondary-images">
          <img src="{product.img}" alt="{product.name}" />
          <img src="{product.img}" alt="{product.name}" />
          <img src="{product.img}" alt="{product.name}" />
          <img src="{product.img}" alt="{product.name}" />
        </div>
      </div>
    </div>
    <div class="col-2">
      <img src="ButterflyPattern.png" alt="">
      <div class="product-properties">
        <h3>{product.name}</h3>
        <h4>{product.price}</h4>
        <p>This product is excluded from all promotional discounts and offers.</p>

        <!-- Size Selector -->
        <div class="sizes">
          <p>Sizes</p>
          <div class="size-choice-list">
            {#each ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as size}
              <div
                class="size-choice"
                class:selected={size === selectedSize}
                on:click={() => selectSize(size)}
              >
                <p>{size}</p>
              </div>
            {/each}
          </div>
        </div>

        <!-- Units Selector (Typing space) -->
        <div class="units">
          <p>Units</p>
          <div class="unit-choice">
            <input 
              type="number" 
              bind:value={selectedUnits} 
              min="1" 
              class="unit-input" 
            />
          </div>
        </div>

        <!-- Add to Cart Button -->
        <div class="button">
          <a href="#" class:disabled={!isValidSelection}>
            Add to Cart
            <svg
              class="arrow_icon"
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="#5f6368"
            >
              <path d="M686-450H160v-60h526L438-758l42-42 320 320-320 320-42-42 248-248Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
{:else}
  <p>Product not found</p>
{/if}

<style>
    .container{
        margin: auto;
        padding: 0px;
        display: flex;
        width: 1440px;
    }
    .col-1{
        /*BG COLOR*/
        right: 0px;
        top: 109px;
        height: 100%;
        width: 100%;
        
        /*background: linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(255, 116, 41, 1) 100%);*/
    }
    .product-showcase {
        margin-left: -200px;
    }
    .primary-image {
        /*background-color: red;*/
        width: 470px;
        height: 470px;
        margin-top: 100px;
        margin-left: 450px;
    }
    .primary-image img{
        width: 450px;
        margin-top: 10px;
        border-radius: 20px;
    }
    .secondary-images {
        display: flex;
        /*background-color: red;*/
        width: 470px;
        height: 120px;
        gap: 6px;
        margin-left: 450px;
        margin-top: -4px;
    }
    .secondary-images img{
        width: 100px;
        height: 100px;
        margin-top: 10px;
        margin-left: 10px;
    }
    .secondary-images img:hover{
        border-radius: 10px;
        border: 3px solid #FF7429;
    }


    .NABI_Icon {
        position: absolute;
        width: 100px;
        rotate: 25deg;
        transform: translate(-450px, 300px);
    }

    .col-2{
        margin-top: -655px;
    }
    .col-2 img{
        margin-top: 75px;
        margin-left: 1000px;
    }
    .product-properties{
        text-align: left;
        margin-left: 1170px;
        margin-top: 20px;
    }
    .product-properties h3 {
        font-size: 24px;
    }
    .product-properties h4 {
        font-size: 16px;
    }
    .product-properties p {
        width: 400px;
        font-size: 16px;
        line-height: 140%;
    }

    /* SIZE OPTIONS */
    .sizes {
        margin-top: 50px;
    }
    .sizes p{
        font-weight: bold;
        margin-bottom: 8px;
    }
    .size-choice-list{
        display: flex;
        gap: 10px;
    }
    .size-choice {
        width: 60px;
        height: 35px;
        padding: 5px;
        background-color: #D9D9D9;
        transition: 0.25s;
    }
    .size-choice p {
        font-weight: normal;
        width: 45px;
        margin-top: 1px;
        text-align: center;
    }
    .size-choice:hover {
        background-color: #000000;
        color: white;
    }
    .size-choice.selected {
    background-color: #FF7429; /* Highlight selected size */
    border: 1px solid black;
  }

    /* UNIT OPTIONS */
    .units {
        margin-top: 40px;
    }
    .units p {
        font-weight: bold;
        margin-bottom: 8px;
    }

   /* Button */
    .button {
        display: flex;
        margin-top: 35px;
        padding: 0;
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
        width: 30px; height: 30px; fill: white; stroke-width: 50px; stroke: white;
        transform: translate(210px, 8px);
    }

  .button a.disabled {
    pointer-events: none;
    opacity: 0.25;
  }

  .unit-choice {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .unit-input {
    width: 75px;
    height: 40px;
    text-align: center;
    padding: 5px;
    font-size: 20px;
  }

</style>