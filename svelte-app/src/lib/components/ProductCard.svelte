<!-- ProductCard.svelte -->
<script>
    export let img;
    export let product;
    export let category;
    export let price;
</script>


<div class="product-card">
    <img src={img} alt={product} />
    <h3>{product}</h3>
    <h4>{category}</h4>
    <p>{price}</p>
</div>


<style>
    /* Product Card */
    .product-card {
        width: 270px;
        text-align: left;
        margin: auto;
        padding: 10px;
        background-color: hsl(0, 0%, 96%);

        transition: transform 0.25s;
    }
    .product-card img {
        width: 250px;
    }
    .product-card h3 {
        font-weight:400;
        line-height: 20px;
    }
    .product-card h4 {
        font-weight:400;
        font-size: 12px;
        line-height: 15px;
    }
    .product-card p {
        font-weight: bolder;
        font-size: 18px;
        line-height: 25px;
    }
    .product-card:hover {
        transform: scale(1.05);
        background-color: #FF7429;
    }
</style>