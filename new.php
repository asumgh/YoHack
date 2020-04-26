<?php 
$text = $_REQUEST['q'];
$res = 0;
if ($text != "") {
    $text = "\n".  $text  . ",-";
    $res = file_put_contents('question.csv', $text, FILE_APPEND);
}
echo $res ?  'success': 'no';