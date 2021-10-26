<?php 
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];

    $email_from = 'thomaswwpedersen@hotmail.com';
    $email_subject = "New Form Submission";
    $email_body = "Fra: $firstname.\n". 
                  "Efternavn: $lastname.\n".
                  "Email: $email.\n".
                  "Besked: $subject.\n";

                  $to = "thomaswpedersen@hotmail.com";
                  $headers = "From: $email_from \r\n";
                  $headers .= "Reply-To: $visitor_email \r\n";
                  mail($to,$email_subject,$email_body,$headers);

                  header("Location: index.html");

    ?>