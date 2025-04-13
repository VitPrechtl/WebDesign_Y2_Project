<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("About Page Loaded");
    });
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<div class="container-1">
    <div class="about title">
        <h2 class="icon-heading">About Us</h2>
    </div>
    
    <div class="paragraph">
        <h2 class="paragraph-title">NABI-Streetwear for everyone!</h2>
        <p>The streetwear brand Nabi not only promotes the best streetwear it also promotes self-improvement and motivation to inspire people to become the best version of themselves</p>
        <div class="explore-btn">
            Explore Now <span class="icon">→</span> 
        </div>
    </div>

    <div class="paragraph2-container">
        <div class="paragraph2">
            <img class="paragraph2-butterfly" src="/ButterflyPattern.png" alt="Butterfly pattern">
            <p class="paragraph2-text">Success isn't about greatness. It's about consistency, so we're here to remind yourself to become better everyday!</p>
        </div>
        <div class="image-row"><img src="butterfly.png" alt="butterfly"></div>
    </div>

    <div class="motivational-image">
        <img src="motivation.png" alt="climbing">
        <div class="motivational-text">
            <p>Success isn't about greatness. It's about consistency, so we're here to remind yourself to become better everyday!</p>
        </div>
    </div>

    <div class="community-section">
        <div class="community-text">
            <h2>The NABI community</h2>
            <p>Our community is a global squad of hustlers, creatives, and go-getters who wear their ambition as boldly as their fits. Here, every stitch represents progress, and every drop fuels the next level.</p>
        </div>
        <img class="community-img" src="community.jpg" alt="community">
    </div>
</div>

<style>
    /* Base Styles */
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    .container-1 {
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
        padding: 1rem;
        position: relative;
    }

    /* About Title Section */
    .about.title {
        text-align: left;
        margin: 2rem 0 3rem 0;
        padding-left: 1rem;
    }

    .icon-heading {
        font-size: clamp(2rem, 5vw, 3rem);
        margin-bottom: 1rem;
    }

    /* First Paragraph Section */
    .paragraph {
        padding-left: 1rem;
        margin-bottom: 3rem;
        position: relative;
    }

    .paragraph-title {
        font-size: clamp(1.8rem, 4vw, 2.5rem);
        font-weight: bold;
        margin-bottom: 1rem;
        text-align: left;
    }

    .paragraph p {
        font-size: clamp(1rem, 2vw, 1.2rem);
        text-align: left;
        line-height: 1.5;
        max-width: 800px;
    }

    .explore-btn {
        position: absolute;
        left: 1rem;
        margin-top: 1rem;
        font-size: 1rem;
        color: #fff;
        background-color: rgb(255, 116, 41);
        padding: 10px 24px;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    .explore-btn:hover {
        transform: scale(1.05);
    }

    /* Second Paragraph Section */
    .paragraph2-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin: 3rem 0;
        padding-left: 1rem;
        position: relative;
    }

    .paragraph2 {
        position: absolute;
        top: -50px;
        right: 200px;
        text-align: right;
        max-width: 400px;
    }

    .paragraph2-butterfly {
        height: 3rem;
        margin-bottom: 0.5rem;
    }

    .paragraph2-text {
        font-size: clamp(1rem, 2vw, 1.2rem);
        text-align: right;
        line-height: 1.4;
    }

    .image-row {
        margin-left: auto;
    }

    .image-row img {
        width: 200px;
        height: auto;
        border-radius: 8px;
    }

    /* Motivational Section */
    .motivational-image {
        width: 100%;
        position: relative;
        margin: 3rem 0;
    }

    .motivational-image img {
        width: 100%;
        height: auto;
        display: block;
    }

    .motivational-text {
        position: absolute;
        bottom: 10%;
        left: 5%;
        color: white;
        font-size: clamp(1rem, 3vw, 1.5rem);
        max-width: 50%;
        text-align: left;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 1rem;
        border-radius: 8px;
    }

    /* Community Section */
    .community-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 3rem 1rem;
        background-color: rgb(200, 236, 255);
        margin: 3rem 0;
    }

    .community-text {
        flex: 1;
        min-width: 300px;
        padding-right: 2rem;
    }

    .community-section h2 {
        font-size: clamp(1.8rem, 4vw, 2.5rem);
        margin-bottom: 1rem;
        text-align: left;
    }

    .community-section p {
        font-size: clamp(1rem, 2vw, 1.2rem);
        text-align: left;
        line-height: 1.5;
        max-width: 600px;
    }

    .community-img {
        flex: 1;
        min-width: 300px;
        max-width: 500px;
        height: auto;
        border-radius: 8px;
        object-fit: cover;
    }

    /* Mobile Responsiveness */
    @media (max-width: 768px) {
        .about.title, 
        .paragraph, 
        .paragraph2-container, 
        .community-text {
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .paragraph2 {
            position: static;
            max-width: 100%;
            text-align: left;
            margin-bottom: 1rem;
        }

        .paragraph2-butterfly {
            height: 2.5rem;
        }

        .paragraph2-text {
            text-align: left;
        }

        .paragraph2-container {
            flex-direction: column;
        }

        .image-row {
            margin: 1rem auto 0 auto;
        }

        .motivational-text {
            position: static;
            max-width: 100%;
            margin-top: 0;
            background-color: rgba(0, 0, 0, 0.7);
        }

        .community-section {
            flex-direction: column-reverse;
        }

        .community-text {
            padding-right: 0;
            margin-top: 1.5rem;
        }

        .community-img {
            max-width: 100%;
            margin: 0 auto;
        }

        .explore-btn {
            position: relative;
            left: 0;
            margin-top: 1.5rem;
        }
    }

    @media (max-width: 480px) {
        .about.title, 
        .paragraph-title, 
        .community-section h2 {
            font-size: 1.8rem;
        }

        .paragraph p, 
        .paragraph2-text, 
        .community-section p {
            font-size: 1rem;
        }

        .image-row img {
            width: 150px;
        }
    }
</style>