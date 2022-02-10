<?php
$name = $_POST['name'];
$surname = $_POST['surname'];
$job_position = $_POST['job_position'];
$phone = $_POST['phone'];
$email = $_POST['email'];   

if (mail("igor.dragunov99@gmail.com", "Заявка на стажировку", "ФИО:".$name." ".$surname.
                            ". Телефон:".$phone.". E-mail: ".$email ,"From: international.intrenship@gmail.com \r\n"))
 {     echo "сообщение успешно отправлено"; } 
 else {
    echo "при отправке сообщения возникли ошибки";
}
?>