<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>NABI - Frequently Asked Questions</title>
<style>


.faq-container {
    max-width: 1440px;
        width: 100%;
        margin: 0 auto;
        padding: 1rem;
        position: relative;



}



body {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: #333;
  line-height: 1.6;
}

h1 {
  color: #000;
  text-align: center;
  margin-bottom: 40px;
  font-size: 42px; /* Larger font size */
  font-weight: 700; /* Bolder weight */
  letter-spacing: -1px; /* Slightly tighter letter spacing */
  text-transform: uppercase; /* Uppercase for impact */
}

ul, #myUL {
  list-style-type: none;
}

#myUL {
  margin: 0;
  padding: 0;
}

.caret {
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-weight: bold;
  font-size: 18px;
  padding: 12px 0;
  transition: all 0.2s ease;
}

.caret:hover {
  color: #555; /* Hover effect */
}

.caret::before {
  content: "\25B6";
  color: #000;
  display: inline-block;
  margin-right: 12px;
  transition: transform 0.2s ease;
}

.caret-down::before {
  -ms-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);  
}

.nested {
  display: none;
  padding-left: 24px;
  margin-bottom: 15px;
}

.active {
  display: block;
}

.faq-answer {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin: 15px 0;
  border-left: 4px solid #000; /* Accent border */
}

.faq-subheading {
  font-weight: bold;
  margin: 15px 0 8px 0;
  color: #555;
  font-size: 16px;
}

a {
  color: #000;
  font-weight: bold;
  text-decoration: underline;
}
</style>
</head>
<body>

    <div class = faq-container>
    <h1>FAQ</h1>

<ul id="myUL">
  <li><span class="caret">About NABI</span>
    <ul class="nested">
      <li><span class="caret">How is NABI different to other brands?</span>
        <div class="nested faq-answer">
          We're not just selling clothes we're fueling a mindset. Every drop includes a motivational message to level up your life.
        </div>
      </li>
      <li><span class="caret">Who designs NABI's graphics?</span>
        <div class="nested faq-answer">
          <div class="faq-subheading">Our Creative Process</div>
          Our in-house creative team collaborates with underground artists worldwide. Each collection tells a story about growth - follow our Instagram for design deep-dives.
        </div>
      </li>
    </ul>
  </li>
  
  <li><span class="caret">Orders & Shipping</span>
    <ul class="nested">
      <li><span class="caret">When will I receive my order?</span>
        <div class="nested faq-answer">
          Orders typically ship within 1-2 business days (Mon-Fri).<br><br>
          During launches: 3-5 business days (we hand-check every piece).
        </div>
      </li>
    </ul>
  </li>
  
  <li><span class="caret">Returns & Exchanges</span>
    <ul class="nested">
      <li><span class="caret">What if my clothing doesn't fit properly?</span>
        <div class="nested faq-answer">
          We offer free size exchanges within 30 days for unworn items with tags attached.<br><br>
          Email <a href="mailto:returns@nabi.com">returns@nabi.com</a> with your order number and fit photos for priority processing.
        </div>
      </li>
    </ul>
  </li>
  
  <li><span class="caret">Payment & Security</span>
    <ul class="nested">
      <li><span class="caret">What payment methods do you accept?</span>
        <div class="nested faq-answer">
          We accept all major credit cards, PayPal, and select cryptocurrency payments.
        </div>
      </li>
    </ul>
  </li>
</ul>

<script>
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}
</script>

</div>
</body>
</html>