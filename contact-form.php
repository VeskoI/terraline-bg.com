<?php

if (isset($_POST['inputName']) && isset($_POST['inputEmail']) && isset($_POST['inputSubject']) && isset($_POST['inputMessage'])) {

    //check if any of the inputs are empty
    if (empty($_POST['inputName']) || empty($_POST['inputEmail']) || empty($_POST['inputSubject']) || empty($_POST['inputMessage'])) {
        $data = array('success' => false, 'message' => 'Please fill out the form completely.');
        echo json_encode($data);
        exit;
    }

    $name = trim($_POST['inputName']);
    $email = trim($_POST['inputEmail']);
    $subject = trim($_POST['inputSubject']);
    $message = trim($_POST['inputMessage']);

    // Send to my personal email first
    $emailTo = 'tapi22@gmail.com';
    $body = "Name: $name \n\nEmail: $email \n\nSubject: $subject \n\nMessage:\n $message";
    $body = wordwrap($body, 80);
    $headers = 'From: Terraline Website <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;

    mail($emailTo, $subject, $body, $headers);

    // Send to Terraline mail
    $emailTo = 'info@terraline-bg.com';
    mail($emailTo, $subject, $body, $headers);

    $data = array('success' => true, 'message' => 'Благодарим Ви! Съобщението Ви е изпратено успешно!');
    echo json_encode($data);

} else {

    $data = array('success' => false, 'message' => 'Грешка при изпращане на съобщението. Моля опитайте отново!');
    echo json_encode($data);

}