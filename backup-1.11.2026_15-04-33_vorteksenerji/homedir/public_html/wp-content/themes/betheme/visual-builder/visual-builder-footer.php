<script id="mfn-bebuilder-fields">var edited_item = false; <?php $mfnVbBulder = new MfnVisualBuilder(); echo $mfnVbBulder->fieldsToJS(); ?></script>
<?php

do_action( 'in_admin_footer' );
do_action( 'admin_footer' );
do_action( 'admin_print_footer_scripts' );

?>
</body>
</html>
