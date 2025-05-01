<?php
    /*
        To run this file you need to first create a database as well as a table called person in mysql datavase. You also need to insert data into the table person in order to be able to display it using the code in this php file.
    */


    //////////////////////
    // Connect to database
    //////////////////////
    $server = 'db';
    $username = 'root'; 
    $password = 'csym019';
    //The name of the schema/database we created earlier in Adminer //If this schema/database does not exist you will get an error! 
    $schema = 'Internet_programming';
    $pdo = new PDO('mysql:dbname=' . $schema . ';host=' . $server, $username, $password, [ PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    
    //////////////////////
    // Run an SQL query to retrieve the data from the person table
    //////////////////////
    $results = $pdo->query('SELECT * FROM person');

    //////////////////////
    // use a foreach loop to print the data retuned by the query, to the browser windo (web page with a .php extension)
    //////////////////////
    $cssFileName = 'style.css';
    echo '<!DOCTYPE html>';
    echo '<html lang="en">';
    echo '<head>';
    echo '    <meta charset="UTF-8">';
    echo '    <meta http-equiv="X-UA-Compatible" content="IE=edge">';
    echo '    <meta name="viewport" content="width=device-width, initial-scale=1.0">';
    echo '    <link rel="stylesheet" href="'. $cssFileName . '">';
    echo '    <title>Test connectionn to database</title>';
    echo '</head>';
    echo '<body>';
    foreach ($results as $row) {
        //echo "it works";
        echo '<p>' . $row['Firstname'] . '</p>';
    }        
    echo '</body>';
    echo '</html>';
?>