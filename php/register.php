<?php

header('Content-Type: application/json');
//========================================================

$data = file_get_contents('php://input');

$data = json_decode($data, true);

if (is_array($data)) {

    $name    = strtoupper(trim($data['name']));
    $age     = trim($data['age']);
    $city    = strtoupper(trim($data['city']));
    $hobbies = strtoupper(trim($data['hobbies']));


    $link = mysqli_connect('localhost', 'root', '', 'Festival');

    if (mysqli_connect_errno($link)) {

        echo 'Error trying to connect to database ' . mysqli_connect_error();
        exit;
    }

    $saveData = mysqli_query($link, "INSERT INTO Assistants (name, age, city, hobbies, date) VALUES ('$name', '$age', '$city', '$hobbies', NOW())") or die (mysqli_error($link));

    if ($saveData) {

        echo json_encode(array('error' => false));

    } else {

        echo json_encode(array('error' => true, 'message' => 'Error saving data'));
    }

} else {

    echo json_encode(array('error' => true, 'message' => 'Error getting data'));
}

