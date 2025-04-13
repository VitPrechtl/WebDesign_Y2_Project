<script>
    // Import components
    import { onMount } from 'svelte';

   const checkScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollY = window.scrollY;

    // Check if the user has scrolled to the bottom of the page
    if (scrollY >= documentHeight - 30) {
        document.getElementById("footer").style.top = "1000px"; // Show the footer
    } else {
        document.getElementById("footer").style.top = "1000px"; // Hide the footer
    }
   };

   // Add scroll event listener when the component mounts
   onMount(() => {
    window.addEventListener('scroll', checkScroll);

    // Clean up event listener when the component is destroyed
    return () => {
        window.removeEventListener('scroll', checkScroll);
    };
   });
</script>

<!-- Header -->
<header>
    <div class="wrapper">
        <div class="logo">
            <a href="/"><img src="nabi_logo_white.png" alt="NABI Homepage Button"></a>
        </div>
        <nav>
            <ul>
                <li><a href="/products">PRODUCTS</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/account">ACCOUNT</a></li>
                <li><a href="/cart"><svg class="shopping_cart_icon" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#5f6368">
                    <path d="M286.79-81Q257-81 236-102.21t-21-51Q215-183 236.21-204t51-21Q317-225 338-203.79t21 51Q359-123 337.79-102t-51 21Zm400 0Q657-81 636-102.21t-21-51Q615-183 636.21-204t51-21Q717-225 738-203.79t21 51Q759-123 737.79-102t-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.07q22.97 0 34.95 21 11.98 21-.02 42L694-495q-11 19-28.56 30.5T627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z"/></svg></li>
            </ul>
        </nav>
    </div>
</header>

<!-- Page Content -->
<main>
    <slot />
</main>

<!-- Footer -->
<footer id="footer">
    <div class="row-1">
        <div class="col-1">
            <img src="nabi_logo_white.png" alt="NABI Logo">
        </div>
        <div class="col-2">
            <p><span class="footer_quote">Step by step, walk the thousand mile road.</span> <span class="footer_quote_author">- Miyamoto Musashi</span></p>
        </div>
        <div class="col-3">
            <ul>
                <li>Socials</li>
                <li><a href="">Instagram</a></li>
                <li><a href="">YouTube</a></li>
                <li><a href="">Twitter</a></li>
            </ul>
        </div>
    </div>
    <hr>
    <div class="row-2">
        <p>&copy Copyright 2025 - NABI. All rights reserved</p>
    </div>
</footer>

<style>
    .wrapper {
        width: 1440px;
        margin: auto;
    }
    header {
        background-color: black;
        padding: 24px;
    }

    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 2rem;
        justify-content: right;
    }

    nav ul li {
        margin: 0 15px;
    }

    nav ul li a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        font-size: 24px;
        transition: 0.5s;
    }

    nav ul li a:hover {
        color: #FF7429;
    }

    

    main {
        padding: 2rem;
        text-align: center;
    }

    footer {
        background-color: black;
        color: white;
        text-align: center;
        padding: 1rem;
        position: fixed;
        bottom: 0;
        width: 100%;
    }

    .shopping_cart_icon {
        width: 50px; height: 50px; fill:white; stroke-width: 20; stroke: white;
        align-items: center;
    }

    .logo img {
        width: 150px;
        height: auto;
        float: left;
        align-items: center;
        transform: translateY(-5px);
    }


    /* FOOTER */
    .row-1 {
        display: flex;
        justify-content: space-around;
        padding: 10px;
        margin-bottom: 10px;
    }
    .col-1 img{
        width: 150px;
        height: auto;
        align-items: center;
    }
    .col-2 {
        align-content: center;
        font-size: 16px;
    }
    .footer_quote_author {
        font-style: italic;
    }
    .footer_quote {
        font-weight: bold;
    }
    .col-3 ul li {
        list-style: none;
        line-height: 115%;
        transform: translateY(-5px);
    }
    .col-3 ul li:nth-child(1) {
        font-size: 18px;
        font-weight: bold;
    }
    .col-3 ul li a {
        font-size: 16px;
        text-decoration: underline;
        color: #BFBFBF;
    }

    .row-2 {
        padding: 15px;
        margin-bottom: -25px;
        font-weight: 200;
    }

</style>