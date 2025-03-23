// Your code here
document.addEventListener("DOMContentLoaded", main);

fetch ("http://localhost:3000/characters")
.then(function(response) {
    return response.json()
})
.then (function(characters) {
    const characterBar = document.getElementById('character-bar');

    characters.forEach(function(character) {
        const span = document.createElement('span')
        span.textContent = character.name;


        span.addEventListener("click", function() {
            showCharacterDetails(character);
    });

    characterBar.append(span)
        
    });

})
.catch(function(error) {
    console.log(error);
})

characterBar.addEventListener('click', function(e) {

})