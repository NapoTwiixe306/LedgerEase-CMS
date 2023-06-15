<?php 
  include './app/controllers/Variables.php';
  include './app/config/config.php';
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
        <input type="text" placeholder="Rechercher..." onkeydown="handleKeyPress(event)">
        <button type="submit" onClick="handleSearch()"><i class="fas fa-paper-plane"></i></button>
    </div>
    <!-- DarkMode Button -->
    <div class="dark-mode-toggle">
        <input type="checkbox" id="darkModeToggle" onChange="toggleDarkMode()">
        <label for="darkModeToggle">Mode sombre</label>
    </div>
</nav>
