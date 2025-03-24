// Your code here
document.addEventListener("DOMContentLoaded", main)
function main() {

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

    const votesForm = document.getElementById("votes-form")
    votesForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const voteCount = document.getElementById("vote-count");
        const votes = document.getElementById("votes");


        const currentVotes = voteCount.textContent;

        const newVotes = votesInput.value

        voteCount.textContent = +currentVotes + +newVotes;

        votesInput.value = "";


    })


    })

    function showCharacterDetails(character) {
        const name = document.getElementById("name")
        const Image = document.getElementById("image")
        const voteCount = document.getElementById("vote-count")

        name.textContent = character.name;
        Image.src = character.Image;
        voteCount.textContent = character.votes;
    }

};


