<?php 
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];

    $email_from = 'Portfolio';
    $email_subject = "Ny besked";
    $email_body = "Fra: $firstname.\n". 
                  "Efternavn: $lastname.\n".
                  "Email: $email.\n".
                  "Besked: $subject.\n";

                  $to = "thomaswpedersen@hotmail.com";
                  $headers = "From: $email_from \r\n";
                  $headers .= "Svar til: $visitor_email \r\n";
                  mail($to,$email_subject,$email_body,$headers);

                  header("Location: index.html");

    ?>