<?php
$db_host = '127.0.0.1';
$db_user = 'root';
$db_password = 'root';
$db_db = 'SearchBar';
$db_port = 8889;

try {
    // Établir une connexion à la base de données avec PDO
    $conn = new PDO("mysql:host=$db_host;port=$db_port;dbname=$db_db", $db_user, $db_password);
    // Activer les erreurs PDO pour afficher les exceptions en cas de problème
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo '<script>console.log("Connecter avec succès");</script>';
} catch (PDOException $e) {
    die("Échec de la connexion à la base de données : " . $e->getMessage());
}

// Fermer la connexion à la base de données
$conn = null;
?>
