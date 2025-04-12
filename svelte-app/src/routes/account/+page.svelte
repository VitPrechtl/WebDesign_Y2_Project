<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Account Page Loaded");
    });
</script>


<!-- My Account Header -->
<div class="container-1">
    <div class="row-1">
        <h1 class="H1">My Account</h1>
        <img src="ButterflyPattern.png" alt="Pattern of Butterflies">
    </div>
    <div class="row-2">
        <h3>Account Details</h3>
    </div>
    <hr>
</div>

<!-- My Account Settings -->
<div class="container-2">
    <div class="col-1">
        <div class="account-options-menu">
            <div class="menu-option">
                <p>Account Details</p>
            </div>
            <div class="menu-option">
                <p>Change Password</p>
            </div>
            <div class="menu-option">
                <p>Orders</p>
            </div>
            <div class="menu-option">
                <p>Logout</p>
            </div>
        </div>
    </div>
    <div class="account-details-container">
        <div class="col-2">
            <div class="detail-box">
                <div class="info_box">
                    <p>FIRST NAME</p>
                    <div class="input-box"></div>
                </div>
                <div class="info_box">
                    <p>ADDRESS</p>
                    <div class="input-box"></div>
                </div>
                <div class="info_box">
                    <p>COUNTRY</p>
                    <div class="input-box"></div>
                </div>
                <div class="info_box">
                    <p>PHONE NUMBER</p>
                    <div class="input-box"></div>
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="detail-box">
                <div class="info_box">
                    <p>SECOND NAME</p>
                    <div class="input-box"></div>
                </div>
                <div class="info_box">
                    <p>CITY</p>
                    <div class="input-box"></div>
                </div>
            </div>

            <div class="button">
                <p>SAVE</p>
            </div>
        </div>
    </div>
</div>



<style>
    /*My Account Header*/
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
        font-size: 24px;
        text-align: left;
        transform: translate(50px, -25px);
    }
    hr {
        margin-top: -20px;
    }

    /*Column 1 - My Account Menu*/
    .container-2 {
        width: 1440px;
        margin: auto;
        transform: translateX(90px);
    }
    .account-options-menu {
        width: 250px;
        background-color: black;
        padding: 10px;
        border-radius: 20px;
    }
    .menu-option {
        text-align: center;
        font-weight: bold;
        color: white;
        padding: 10px;
        transition: 0.25s;
    }
    .menu-option:hover {
        border-radius: 10px;
        background-color: #FF7429;
    }

    /* Column 2 - Details */
    .account-details-container {
        display: flex;
        gap: 20px;
    }
    .detail-box{
        transform: translate(600px, -250px);
        
    }

    .info_box {
        text-align: left;
        font-weight: bold;
        margin-top: 10px;
    }
    .input-box{
        width: 300px;
        height: 45px;
        border: solid;
        border-radius: 10px;
        margin-top: -10px;
        color: #7F7F7F;
    }

    /* Save Button */
    /* Button */
.button {
    display: flex;
    margin-top: 0px;
    padding: 0;
    transform: translate(280px, -50px);
}
.button p {
    background-color: black;
    padding: 10px 20px 10px 20px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    text-align: center;
    justify-items: center;
    transition: 0.5s;
}
.button p:hover {
    text-decoration: none;
    background-color: #FF7429;
}
</style>