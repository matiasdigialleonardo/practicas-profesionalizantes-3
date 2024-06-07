<?php

class WCCalculatorModel
{
    public function calculate($expression)
    {
        return eval('return ' . $expression . ';');
    }
}

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'));

$instance = new WCCalculatorModel();
$result = $instance->calculate($data->expression);

echo json_encode(['result' => $result]);

?>
