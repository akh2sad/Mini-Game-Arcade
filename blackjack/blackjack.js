function updateLog(message) {
    const logElement = document.getElementById('log');
    logElement.innerHTML += message + '<br>';
}

function clearLog(){
    const logElement = document.getElementById('log')
    logElement.innerHTML = '';

}
var hit2 = 0;
    var hit = document.getElementById('hit')
    var stand = document.getElementById('stand')


        hit.addEventListener("click", function playGame(){
            let randomNumber = Math.floor(Math.random() * 10) + 1; // Generate a random card value (1-10)

            
            hit2 += randomNumber;
            updateLog("You drew a " + randomNumber + ". Your hand: " + hit2);

            if (hit2 > 21) {
                updateLog("You're over 21, YOU LOSE!");
                endGame();
            } else if (hit2 === 21) {
                updateLog("Nice, you got "+hit2);
                test();
            }
        });  
    
        stand.addEventListener("click", function(){
            updateLog("You have " + hit2 + " hand");
            test();
        })
        
        
    



function test() {
    updateLog(hit2)
    var house = 0;
    while (house < 21) {
        var randomNumber = Math.floor(Math.random() * 10) + 1;
        house += randomNumber;
        updateLog("House drew a " + randomNumber + ". House hand: " + house);

        if (house > 21) {
            house = house - randomNumber;
            updateLog("House drew a " + randomNumber + ". House hand: " + house);
            break;
        }
    }

    if (hit2 > house) {
        updateLog("Congrats, you win! You had " + hit2 + " and the house had " + house);
    } else if (house > hit2) {
        updateLog("Aww shucks, you lost. But you know what they say... the dealer always wins. the dealer had " + house + " and you had " +hit2);

    } else {
        updateLog("looks like it's a draw")
    }
    
}

function endGame() {
    // Disable the submit button when the game ends
    //document.getElementById('submit').disabled = true;
    hit2 = 0;  
         
        
}

document.getElementById('start-game').addEventListener('click', function () {
    // Enable the submit button and start the game
    hit2 = 0;
    //document.getElementById('submit').disabled = false;
    clearLog();
    updateLog("Game started. You can hit or stand.");
    playGame();
});
