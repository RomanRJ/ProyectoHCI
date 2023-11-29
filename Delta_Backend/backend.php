<?php
header("Access-Control-Allow-Origin: https://delta-projecthci.netlify.app");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$dbhost = "sql112.infinityfree.com";
$dbusuario = "if0_35473957";
$dbclave = "tubXuwrbvukLKgx";
$dbnombre = "if0_35473957_deltahci";

$db = new mysqli($dbhost, $dbusuario, $dbclave, $dbnombre);
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}
echo "si";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = file_get_contents("php://input");
    $postData = json_decode($data, true);
    
    if ($postData === null) {
        echo "Error al decodificar JSON";
    } else {
        $actividad = $postData['actividad'];
        $distractor = $postData['distractor'];
        $usuario = $postData['usuario'];
        
        // Corregir la consulta SQL y ejecutarla
        $query = "INSERT INTO resultados (actividad, distractor, usuario) VALUES ('$actividad', '$distractor', '$usuario')";
        
        if ($db->query($query) === TRUE) {
            $response = array('message' => 'Datos insertados correctamente');
            header('Content-Type: application/json');
            echo json_encode($response);
        } else {
            $response = array('message' => 'Error al insertar datos: ' . $db->error);
            header('Content-Type: application/json');
            echo json_encode($response);
        }
    }
} else {
    echo "Método no permitido";
}
?>
