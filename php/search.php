<?php

header('Content-Type: application/json');
//========================================================

$search = strtoupper(trim($_GET['search']));
$type   = trim($_GET['type']);

if (!empty($search)) {

    $link = mysqli_connect('localhost', 'root', '', 'Festival');

    if (mysqli_connect_errno($link)) {

        echo 'Error trying to connect to database ' . mysqli_connect_error();
        exit;
    }

    if ($type == 1) {

        $getAssistant = mysqli_query($link, "SELECT * FROM Assistants WHERE name LIKE '%$search%'") or die (mysqli_error($link));
    }
    
    if ($type == 2) {

        $getAssistant = mysqli_query($link, "SELECT * FROM Assistants WHERE id = $search") or die (mysqli_error($link));
    }
    
    $exists = mysqli_num_rows($getAssistant);

    if ($exists) {

        $data = array();

        while ($assistant = mysqli_fetch_assoc($getAssistant)) {

            $data[] = array(
                'id'   => $assistant['id'],
                'name' => $assistant['name'],
                'age'  => $assistant['age'],
                'city' => $assistant['city'],
                'hobbies' => $assistant['hobbies'],
                'date' => $assistant['date']
            );
        }

        echo json_encode(array('error' => false, 'data' => $data));

    } else {

        echo json_encode(array('error' => true, 'message' => 'Assistant was not found.'));
    }

} else {

    echo json_encode(array('error' => true, 'message' => 'Error searching assistant.'));
}