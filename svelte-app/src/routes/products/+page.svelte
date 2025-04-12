<script>
    import { onMount } from 'svelte';
    import { products } from '$lib/products.js';
    import ProductCard from '$lib/components/ProductCard.svelte';

    onMount(() => {
        console.log("Products Page Loaded");
    });
		
</script>


<!-- TOP FRAME -->
<div class="container-1">
    <div class="row-1">
        <h1 class="H1">Products</h1>
        <img src="ButterflyPattern.png" alt="Pattern of Butterflies">
    </div>
    <div class="row-2">
        <hr>
        <ul class="ul-product-type">
            <li><a href="/products">T-Shirts</a></li>
            <li><a href="/products">Hoodies</a></li>
            <li><a href="/products">Bottoms</a></li>
            <li><a href="/products">Accessory</a></li>
            <li><a href="/products">Themes</a></li>
        </ul>
        <ul class="ul-person-type">
            <li>All</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
        <hr>
    </div>
</div>

<!-- Cards FRAME-->
 <div class="container-2">
    <div class="products-grid">
        {#each products as product}
        <ProductCard {product} />
        {/each}
    </div>
 </div>

 <!-- Pages FRAME -->
 <div class="container-3">
    <hr>
    <div class="row-3">
        <div class="pages">
            <div class="page">
                <p>1</p>
            </div>
            <div class="page">
                <p>2</p>
            </div>
            <div class="page">
                <p>3</p>
            </div>
            <div class="page">
                <p>4</p>
            </div>
            <div class="page">
                <p>5</p>
            </div>
        </div>
    </div>
 </div>



<style>
    /*Product Menu*/
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
        width: 20%; height: 20%;
        align-self: center;
    }
    .row-2 {
        margin-top: -30px;
    }
    .ul-product-type {
        float: left;
        display: flex;
        list-style: none;
        font-size: 24px;
        font-weight: bold;
        gap: 50px;
        padding: 10px;
        transform: translateY(5px);
    }
    .ul-product-type li a{
        color: black;
        transition: 0.25s;
    }
    .ul-product-type li a:hover{
        color: #FF7429;
        text-decoration: none;
    }
    .ul-person-type{
        display: flex;
        flex-direction: row;
        justify-content: right;
        list-style: none;
        gap: 20px;
        padding: 20px;
    }
    .ul-person-type li{
        border: solid;
        padding: 0px 10px;
        border-radius: 10px;
        transition: 0.25s;
    }
    .ul-person-type li:hover
    {
        border: solid #FF7429;
    }

    .products-grid {
        width: 1440px;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    /* PAGES */
    hr {
        margin-top: 25px;
    }
    .container-3 {
        width: 1440px;
        margin: auto;
    }
    .pages {
        display: flex;
        justify-content: center;
        list-style: none;
        gap: 15px;
        margin-top: 15px;
    }
    .page {
        text-align:center;
        width: 40px;
        height: 40px;
        border: 2px solid #BFBFBF;
        border-radius: 10px;
        font-size: 18px;
        transition: 0.25s;
    }
    .page p {
        margin-top: 3px;
    }
    .page:hover {
        border: 2px solid #FF7429;
        background-color: #FF7429;
    }

</style>