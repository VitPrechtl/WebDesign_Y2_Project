<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Home Page Loaded");
    });
</script>

<!-- WELCOME FRAME -->
<div class="container-1">
    <div class="col-1">
        <h2>NABI - Streetwear <br> for anyone!</h2>
        <p>Success isn't about greatness. It's about consistency, so we're here to remind yourself to become better everyday!</p>
        <div class="button">
            <a href="/products">Explore Now <svg class="arrow_icon" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#5f6368"><path d="M686-450H160v-60h526L438-758l42-42 320 320-320 320-42-42 248-248Z"/></svg>
            </a>
        </div>
    </div>
    <div class="col-2">
        <img src="image-1.png" alt="Spring Sale 2025">
    </div>
</div>

<!-- CATEGORIES FRAME -->
<div class="container-2">
    <div class="row-1">
        <h1 class="H1">Categories</h1>
        <img src="ButterflyPattern.png" alt="Pattern of Butterflies">
    </div>
    <div class="row-2">
        <div class="category-card-1">
            <img src="category-card.png" alt="Category card">
            <p>Shoes</p>
        </div>
        <div class="category-card-2">
            <img src="category-card.png" alt="Category card">
            <p>Shirts</p>
        </div>
        <div class="category-card-2">
            <img src="category-card.png" alt="Category card">
            <p>Hoodies</p>
        </div>
        <div class="category-card-2">
            <img src="category-card.png" alt="Category card">
            <p>Others</p>
        </div>
    </div>
</div>

<!-- Popular Picks FRAME -->
 <div class="container-3">
        <img src="popular-pick-1.png" alt="Person exercising">
        <div class="container-3-contents">
            <div class="col-3">
                <h3>Popular Picks</h3>
                <p>Gym Fit</p>
                <div class="button"><a href="/products">Shop</a></div>
            </div>
        </div>
 </div>

 <!-- Testimonials FRAME -->
  <div class="container-4">
    <div class="row-1">
        <h1 class="H1">Testimonials</h1>
        <img src="ButterflyPattern.png" alt="Pattern of Butterflies">
    </div>
    <div class="row-3">
        <div class="testimonial-card-1">
            <svg class="quotes-icon" xmlns="http://www.w3.org/2000/svg" height="75px" viewBox="0 -960 960 960" width="75px" fill="#1f1f1f">
                <path d="m228-240 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T458-480L320-240h-92Zm360 0 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T818-480L680-240h-92ZM320-500q25 0 42.5-17.5T380-560q0-25-17.5-42.5T320-620q-25 0-42.5 17.5T260-560q0 25 17.5 42.5T320-500Zm360 0q25 0 42.5-17.5T740-560q0-25-17.5-42.5T680-620q-25 0-42.5 17.5T620-560q0 25 17.5 42.5T680-500Zm0-60Zm-360 0Z"/></svg>
        <p>Would definitely recommend NABI and will definitely be ordering again.</p>
        <!-- Star Icons -->
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
        <!-- Profile Picture -->
         <img src="testimonials/person-2.jpg" alt="Testimonial Profile Picture">

         <h3>Osas Uwe</h3>
        </div>

        <div class="testimonial-card-1">
            <svg class="quotes-icon" xmlns="http://www.w3.org/2000/svg" height="75px" viewBox="0 -960 960 960" width="75px" fill="#1f1f1f">
                <path d="m228-240 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T458-480L320-240h-92Zm360 0 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T818-480L680-240h-92ZM320-500q25 0 42.5-17.5T380-560q0-25-17.5-42.5T320-620q-25 0-42.5 17.5T260-560q0 25 17.5 42.5T320-500Zm360 0q25 0 42.5-17.5T740-560q0-25-17.5-42.5T680-620q-25 0-42.5 17.5T620-560q0 25 17.5 42.5T680-500Zm0-60Zm-360 0Z"/></svg>
        <p>Would definitely recommend NABI and will definitely be ordering again.</p>
        <!-- Star Icons -->
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
        <!-- Profile Picture -->
         <img src="testimonials/person-2.jpg" alt="Testimonial Profile Picture">

         <h3>Osas Uwe</h3>
        </div>

        <div class="testimonial-card-1">
            <svg class="quotes-icon" xmlns="http://www.w3.org/2000/svg" height="75px" viewBox="0 -960 960 960" width="75px" fill="#1f1f1f">
                <path d="m228-240 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T458-480L320-240h-92Zm360 0 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T818-480L680-240h-92ZM320-500q25 0 42.5-17.5T380-560q0-25-17.5-42.5T320-620q-25 0-42.5 17.5T260-560q0 25 17.5 42.5T320-500Zm360 0q25 0 42.5-17.5T740-560q0-25-17.5-42.5T680-620q-25 0-42.5 17.5T620-560q0 25 17.5 42.5T680-500Zm0-60Zm-360 0Z"/></svg>
        <p>Would definitely recommend NABI and will definitely be ordering again.</p>
        <!-- Star Icons -->
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>
        <!-- Profile Picture -->
         <img src="testimonials/person-2.jpg" alt="Testimonial Profile Picture">

         <h3>Osas Uwe</h3>
        </div>
    </div>
  </div>


<style>
* {
    margin: 0;
    padding: 0;
}

.container-1 {
width: 1440px;
margin: auto;
display: flex;
padding: 50px;
background-color: #C9ECFF;
}

/* Column 1 Text */
.col-1 {
    display: flex;
    flex-direction: column;
    padding: 50px;
    justify-content: center;
    float: left;
}
.col-1 h2 {
    font-size: 48px;
    text-align: left;
    line-height: 100%;
    color: black;
    margin-bottom: 10px;
}
.col-1 p {
    text-align: left;
    width: 280px;
    font-weight: bold;
    color: #7F7F7F;
    margin-bottom: 10px;
}

/* Button */
.button {
    display: flex;
    margin-top: 10px;
    padding: 0;
}
.button a {
    background-color: black;
    padding: 0px 20px 10px 20px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    text-align: center;
    justify-items: center;
    transition: 0.5s;
}
.button a:hover {
    text-decoration: none;
    background-color: #FF7429;
}
.arrow_icon {
    width: 20px; height: 30px; fill: white; stroke-width: 50px; stroke: white;
    transform: translate(2px, 10px);
}

/* Column 2 */
.col-2 img {
    width: 500px;
    border-radius: 30px;
    margin-left: 260px;
}

.container-2 {
    width: 1440px;
    margin: auto;
    padding: 50px;
    background:linear-gradient(#C9ECFF, white)
}
.row-1 {
    display: flex;
    justify-content: space-between;
    padding: 50px;
    font-size: 28px;
    color: black;
}
.row-1 img {
    width: 20%; height: 20%;
    align-self: center;
}
.row-2 {
    display: flex;
    gap: 40px;
    justify-content: center;
}
.row-2 p {
    font-size: 24px;
    font-weight: bold;
}

/* Popular Picks */
.container-3-contents {
    width: 1440px;
    margin: auto;
    transform: translate(10%, -200px);
}
.col-3 {
    width: 1440px;
    position: absolute;
    margin: auto;
    justify-items: left;
}
.col-3 h4 {
    font-weight: bold;
    color: black;
}
.col-3 p {
    font-weight: bold;
    font-size: 40px;
    line-height: 100%;
    color: black;
}

/* Testimonials */
.container-4 {
    width: 1440px;
    margin: auto;
    padding: 50px;
    background:linear-gradient(#FF7429, #994619)
}
.row-3 {
    display: flex;
}
.testimonial-card-1 {
    width: 30%;
    padding: 1%;
    background-color: white;
    border-radius: 50px;
    border: 1px solid black;
    box-shadow: 5px 5px;
    margin: auto;

}
.testimonial-card-1 img {
    display: flex;
    justify-content: center;
    margin: auto;
    width: 60px;
    border-radius: 50%;
}
.testimonial-card-1 p {
    margin: auto;
    width: 250px;
    font-size: 12px;
}
.testimonial-card-1 h3 {
    font-size: 24px;
}

</style>