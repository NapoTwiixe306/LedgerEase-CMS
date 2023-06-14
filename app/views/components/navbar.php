
<?php 
    $Title = "LedgerEase-CMS";
?>

<nav class="header">
    <!-- Logo Link -->
  <a href="#Home" class="header__logo"><?php echo $Title?></a>
    <!-- Nav Link Section -->
  <ul class="header__navigation">
    <li class="header__navigation-item"><a href="#Home" rel="noopener noreferrer" class="header__navigation-link">Link 1</a></li>
    <li class="header__navigation-item"><a href="#MySkill" rel="noopener noreferrer" class="header__navigation-link">Link 2</a></li>
    <li class="header__navigation-item"><a href="#Download" rel="noopener noreferrer" class="header__navigation-link">Link 3</a></li>
    <li class="header__navigation-item"><a href="#Download" rel="noopener noreferrer" class="header__navigation-link">Login</a></li>
  </ul>
    <!-- SearchBar -->
  <div class="search-bar">
    <input type="text" placeholder="Rechercher...">
    <button type="submit">Rechercher</button>
  </div>
    <!-- DarkMode Button -->
  <div class="dark-mode-toggle">
    <input type="checkbox" id="darkModeToggle">
    <label for="darkModeToggle">Mode sombre</label>
  </div>
</nav>