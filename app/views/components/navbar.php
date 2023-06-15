<?php
include './app/controllers/Variables.php';
include './app/config/config.php';

$suggestion = '';

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['search'])) {
    $searchTerm = $_GET['search'];

    if ($searchTerm === 'Napo') {
        echo '<script>console.log("oui fdp");</script>';
    } elseif ($searchTerm === 'Docs') {
        $suggestion = 'Suggestion : <a href="docs.php">Voir la page de documentation</a>';
    } else {
        echo '<script>console.log("non");</script>';
    }
}
?>


<nav class="header">
    <!-- Logo Link -->
    <a href="#Home" class="header__logo"><?php echo $Title?></a>
    <!-- Nav Link Section -->
    <ul class="header__navigation">
        <li class="header__navigation-item"><a href="#Home" rel="noopener noreferrer" class="header__navigation-link">Home</a></li>
        <li class="header__navigation-item"><a href="./app/views/site/Create.php" rel="noopener noreferrer" class="header__navigation-link">Create</a></li>
        <li class="header__navigation-item"><a href="#a" rel="noopener noreferrer" class="header__navigation-link">Docs</a></li>
        <li class="header__navigation-item"><a href="#Download" rel="noopener noreferrer" class="header__navigation-link">Login</a></li>
    </ul>
    <!-- SearchBar -->
    <div class="search-bar">
        <form method="get" action="<?php echo $_SERVER['PHP_SELF']; ?>">
            <input type="text" name="search" placeholder="Rechercher...">
            <button type="submit"><i class="fas fa-paper-plane"></i></button>
        </form>
        <?php echo $suggestion; ?> <!-- Affiche la suggestion ici -->
    </div>
    <!-- DarkMode Button -->
    <div class="dark-mode-toggle">
        <input type="checkbox" id="darkModeToggle" onChange="toggleDarkMode()">
        <label for="darkModeToggle">Mode sombre</label>
    </div>
</nav>
