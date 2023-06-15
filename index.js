function handleSearch() {
    var searchTerm = document.querySelector('.search-bar input').value;
    console.log("Recherche : " + searchTerm);
}

function handleKeyPress(event) {
    if (event.keyCode === 13) { //touche pressée est la touche Entrée (keyCode 13)
        handleSearch();
    }
}

function toggleDarkMode(){
  let body = document.body;
  body.classList.toggle('dark-mode')
}