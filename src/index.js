document.addEventListener("DOMContentLoaded", main);

// Here we fetch the characters data
function main() {
    fetch("https://fluttercuties-db.vercel.app/characters")
        .then(function (response) {
            return response.json();
        })
        .then(function (characters) {
            const characterBar = document.getElementById('character-bar');


            // Here we loop through the characters and we create spans
            characters.forEach(function (character) {
                const span = document.createElement('span');
                span.textContent = character.name;


                // Here we add a click event listener to show character details
                span.addEventListener("click", function () {
                    showCharacterDetails(character);
                });

                characterBar.append(span);
            });
        })
        .catch(function (error) {
            console.log(error);
        });

    
    // This handles the vote form submission
    const votesForm = document.getElementById("votes-form");
    votesForm.addEventListener("submit", function (e) {
        e.preventDefault(); //This prevents the form from reloading


        //This gets the current vote count and the new votes
        const voteCount = document.getElementById("vote-count");
        const votesInput = document.getElementById("votes");

        fetch(`https://fluttercuties-db.vercel.app/characters/${currentCharacterId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                votes: +voteCount.textContent + +votesInput.value
            })
        })
        .then(res => res.json())
        .then(updatedCharacter => {
            voteCount.textContent = updatedCharacter.votes;
            votesInput.value = "";
        })
        .catch(error => console.error("Error updating votes:", error));
    });

    // This is for the reset button click event
    const resetBtn = document.getElementById("reset-btn");
    resetBtn.addEventListener("click", function () {
        const voteCount = document.getElementById("vote-count");
        voteCount.textContent = 0;
    });
}


// This displays the character details
function showCharacterDetails(character) {
    const name = document.getElementById("name");
    const image = document.getElementById("image");
    const voteCount = document.getElementById("vote-count");

    name.textContent = character.name;
    image.src = character.image; 
    voteCount.textContent = character.votes;
}