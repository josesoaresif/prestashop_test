<?php

$useSSL = true;

include(dirname(__FILE__).'/../../../config/config.inc.php');
include(dirname(__FILE__).'/../../../header.php');
include(dirname(__FILE__).'/../multibanco.php');

if (!$cookie->isLogged(true))
    Tools::redirect('authentication.php?back=order.php');
$multibanco = new multibanco();
echo $multibanco ->execPayment($cart);

include_once(dirname(__FILE__).'/../../../footer.php');

?>
