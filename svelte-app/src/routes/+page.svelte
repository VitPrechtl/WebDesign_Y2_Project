<div class="header">
    <div class="container">
        <div class="navbar">
            <div class="logo">
                <img src="logo_placeholder.png" width="125px">
            </div>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Account</a></li>
                </ul>
            </nav>
            <img src="cart.svg" alt="Shopping Cart Icon" width="30px" height="30px">
        </div>
        <div class="row">
            <div class="col-2">
                <h1>NABI - Where Streetwear meets Self-Improvement</h1>
                <p>Success isn't about greatness. It's about consistency, so we're here to remind yourself to become better everyday!</p>
                <a href="" class="button">Explore Now &#8594;</a>
            </div>
            <div class="col-2">
                <img src="image1.jpg" alt="">
            </div>
        </div>
    </div>
</div>

<!--CATEGORIES-->
<div class="categories">
    <div class="small-container">
        <div class="row">
            <div class="col-3">
                <img src="category-1.jpg" alt="">
            </div>
            <div class="col-3">
                <img src="category-1.jpg" alt="">
            </div>
            <div class="col-3">
                <img src="category-1.jpg" alt="">
            </div>
        </div>
    </div>
</div>

<style>
    /*Global.css content*/
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: "Schoolbell", cursive;
  font-weight: 400;
  font-style: normal;
}

  

    /*NAVIGATION BAR - put into layout.svelte*/
    .navbar {
        display: flex;
        align-items: center;
        padding: 20px;
    }
    nav{
        flex: 1;
        text-align: right;
    }
    nav ul{
        display: inline-block;
        list-style-type: none;
    }
    nav ul li{
        display: inline-block;
        margin-right: 20px;
    }
    a{
        text-decoration: none; /*Remove underline*/
        color: #555; /*Text Color*/
    }
    p{
        color: #555; /*Text Color*/
    }

    /*Web contents*/
    .container{
        max-width: 1300px; /*Container width*/
        margin: auto; /*Center the container*/
        padding-left: 25px;
        padding-right: 25px;
    }
    .row{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .col-2{
        flex-basis: 50%; /*50% space for each column*/
        min-width: 300;
    }
    .col-2 img{
        max-width: 100%; /*Image sizing*/
        padding: 50px 0; 
    }
    .col-2 h1{
        font-size: 50px;
        line-height: 60px; /*Header line spacing*/
        margin: 25px 0; /*Spacing between header and paragraph*/
    }

    /*BUTTON*/
    .button{
        display: inline-block; /*Natural Line Flow*/
        background: #08c1f4; /*Button Color*/
        color: #fff; /*Text Color*/
        padding: 8px 30px; /*Text padding*/
        margin: 30px 0; /*Spacing from other elements - Top & Bottom*/
        border-radius: 30px; /*Rectangle Rounding*/
        /*Animation*/
        transition: background 0.5s;
    }

    .button:hover{
        background: #3b7cff;
    }

    .header{
        background: radial-gradient(#fff,#c1c1c1);
    }
    .header .row{
        margin-top: 70px; /*Margin from navbar and the next frame*/
    }

    .categories{
        margin: 70px 0;
    }
    .col-3{
        flex-basis: 30%;
        min-width: 250px;
        margin-bottom: 30px
    }
    .col-3 img{
        width: 100%;

    }
    .small-container{
        max-width: 1080px;
        margin: auto;
        padding-left: 25px;
        padding-right: 25px;
    }
</style>