<?php
​
    $array = array("f_nom" => "", "f_email" => "", "f_message" => "", "f_nomError" => "", "f_emailError" => "", "f_messageError" => "", "isSuccess" => false);
    $emailTo = "1097457668@qq.com";
​
    if ($_SERVER["REQUEST_METHOD"] == "POST") 
    { 
        $array["f_nom"] = test_input($_POST["f_nom"]);
        $array["f_email"] = test_input($_POST["f_email"]);
        $array["f_message"] = test_input($_POST["f_message"]);
        $array["isSuccess"] = true; 
        $emailText = "";
        
        if (empty($array["f_nom"]))
        {
            $array["f_nomError"] = "Je veux connaitre votre prénom et nom!";
            $array["isSuccess"] = false; 
        } 
        else
        {
            $emailText .= "Vous appellez: {$array['f_nom']}\n";
        }
​
       
​
        if(!isEmail($array["f_email"])) 
        {
            $array["f_emailError"] = "T'essaies de me rouler ? C'est pas un email ça  !";
            $array["isSuccess"] = false; 
        } 
        else
        {
            $emailText .= "Email: {$array['f_email']}\n";
        }
​
​
        if (empty($array["f_message"]))
        {
            $array["fmessageError"] = "Qu'est-ce que tu veux me dire ?";
            $array["isSuccess"] = false; 
        }
        else
        {
            $emailText .= "Message: {$array['message']}\n";
        }
        
        if($array["isSuccess"]) 
        {
            $headers = "From: {$array['firstname']} {$array['name']} <{$array['email']}>\r\nReply-To: {$array['email']}";
            mail($emailTo, "Un message de votre site", $emailText, $headers);
        }
        
        echo json_encode($array);
        
    }
​
    function isEmail($email) 
    {
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }
    function isPhone($phone) 
    {
        return preg_match("/^[0-9 ]*$/",$phone);
    }
    function test_input($data) 
    {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }
 
?>
​
