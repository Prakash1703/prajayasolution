<?php
    ini_set('display_errors', 1);
    error_reporting(E_ALL);
    ini_set('SMTP', 'smtp.gmail.com');
    ini_set('smtp_port', 25);
?>
<?php 
    
    $to = 'prakashvaghela700@gmail.com';
    $from = "prajayasolutions<info@prajayasolutions.com>";
    $subject = "Prajaya Solutions : Inquiry Received";
    $subject2 = "Thanks For Inquire Us";
    
    $email = $_POST['email_contact'];
    $name = $_POST['name_contact']; // Get Mobile No
    $phone = $_POST['Phone_Number']; // Get Mobile No
    $msg = $_POST['description_Contact']; // Get Message Value
    $fullDatials="Phone: ".$phone."<br>Email: ".$email."<br>Message: ".$msg;
  
    if ($email!='') {
        echo $email;
        die();
        $header = "From: $email \r\n";
        $header .= "MIME-Version: 1.0\r\n";
        $header .= "Content-type: text/html\r\n";
        $header .= "X-Mailer: PHP \r\n";
        $message = "<html><body>$msg</body></html>";
        if (mail($to, $subject, $fullDatials, $header)) {
            echo "<script>alert('Thanks For Applying at Prajaya Solutions.com Our team will contact you soon');window.location = 'http://".$_SERVER['SERVER_NAME']."/';</script>";
        } else {
            die();
        }
    }
?>