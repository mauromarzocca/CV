<?php
if(isset($_POST['submit']))
{
$nome= trim(strip_tags($_POST['name']));
$email= trim(strip_tags($_POST['email']));
$messaggio= trim(strip_tags($_POST['messaggio']));
//email del ricevente
$header = "From: $email\n" . "Reply-To: $email\n";
$subject = "Contatto CV";
$email_to = "marzocca.mauro@gmail.com";
if(mail($email_to, $subject ,$messaggio ,$header ))
{
echo "mail inviata con successo";
}
else
{
echo "Problemi nell'invio della mail";
}
}
?>