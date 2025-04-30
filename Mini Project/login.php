<?php
session_start();
$conn = new mysqli("localhost", "root", "", "placement_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Check user in the database
    $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = $conn->query($query);

    if ($result->num_rows == 1) {
        $_SESSION['username'] = $username;
        header("Location: dashboard.html"); // Corrected redirection
        exit();
    } else {
        echo "Invalid username or password.";
    }
}
$conn->close();
?>
