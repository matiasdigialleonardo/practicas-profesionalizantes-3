<?php

class WCCalculatorModel
{
    public function __construct() {}

    
    public function calculate($expression)
    {
        return eval($expression);
    }
}

header('Content-Type: application/json');
$json_body = file_get_contents('php://input');
$data = json_decode($json_body);

$instance = new WCCalculatorModel();
$result = $instance->calculate($data->expression);


echo $result;

?>
