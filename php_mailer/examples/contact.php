<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['email'])) {$email = $_POST['email'];}
    if (isset($_POST['message'])) {$message = $_POST['message'];}
    $to = "sayapov.ainur@mail.ru"; /*Укажите ваш адрес электронной почты*/
    $headers = "Content-type: text/plain; charset = utf-8";
    $message = "Откуда: $email \n\nОтправитель: $name \n\nСообщение: $message";


date_default_timezone_set('Etc/UTC');
require '../PHPMailerAutoload.php';
$mail = new PHPMailer();
$mail->CharSet = "UTF-8";
$mail->Encoding = 'base64';
$mail->isSMTP();
$mail->SMTPDebug = 2;
$mail->Debugoutput = 'html';
$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = 'tls';
$mail->Port = 25;
$mail->SMTPAuth = true;
$mail->Username = "carryitthroughlife@gmail.com";
$mail->Password = "Zaq1polk";
/** **/
$mail->setFrom($email, $name);
$mail->addReplyTo($email, $name);
$mail->addAddress($to, 'Для Федерации BJJ России');
$mail->Subject = "Вопрос к Федерации BJJ России.";
$mail->msgHTML($message);

if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>
