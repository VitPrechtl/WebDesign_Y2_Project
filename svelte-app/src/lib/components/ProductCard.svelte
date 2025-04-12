<!-- ProductCard.svelte -->
<script>
    export let product;
</script>

<a href={`/products/${product.id}`} class="product-card">
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <h4>{product.category}</h4>
        <p>{product.price}</p>
</a>


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
        color: black;
        font-weight:400;
        line-height: 20px;
    }
    .product-card h4 {
        color: black;
        font-weight:400;
        font-size: 12px;
        line-height: 15px;
    }
    .product-card p {
        color: black;
        font-weight: bolder;
        font-size: 18px;
        line-height: 25px;
    }
    .product-card:hover {
        transform: scale(1.05);
        background-color: #FF7429;
    }
</style>