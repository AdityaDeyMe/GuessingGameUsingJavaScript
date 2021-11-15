const targetNumber = 7;

while (true) {
    let userGuess = Number(prompt("Guess A Number Between 1 And 10"));
    if (userGuess === targetNumber) {
        console.log("You Win!!!!!!!")
        break;
    } else if (userGuess > targetNumber) {
        console.log("Your Number Is Higher Than The Target Number!")
    } else if (userGuess < targetNumber) {
        console.log("Your Number Is Lower Than The Target Number!")
    } 
}