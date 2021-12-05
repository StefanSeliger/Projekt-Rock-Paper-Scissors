let round5 = document.getElementById("round5")
let round10 = document.getElementById("round10")
let round15 = document.getElementById("round15")
let round20 = document.getElementById("round20")

let rounds = document.getElementsByName("rounds")

let roundsPlayed = document.getElementById("roundsPlayed")
let result = document.getElementById("results")
let gameOutput = document.getElementById("gameOutput")
let roundSelection = document.getElementById("roundSelection")
let rock = "rock"
let paper = "paper"
let scissors = "scissors"

let compArray = ["rock", "paper", "scissors"]

let userWins = document.getElementById("userWins")
let userPoints = 0
let compWins = document.getElementById("compWins")
let compPoints = 0
let countRound = 0

let userChoice = (x) => {
    let compArrayRandom = compArray[Math.floor(Math.random() * 3)]
    roundSelection.style.display = "none"
    countRound += 1
    roundsPlayed.innerHTML = `${countRound} / rounds.value` 

    if (compArrayRandom == x) { // tie
        console.log("tie")
        gameOutput.innerHTML = "It's a tie!"
    } else if (compArrayRandom != x) { // computer wins
        if (compArrayRandom == rock && x == scissors || compArrayRandom == paper && x == rock || compArrayRandom == scissors && x == paper) {
            console.log("user looses")
            gameOutput.innerHTML = "The computer wins, user looses."
            compPoints +=1
            compWins.innerHTML = compPoints
        } else { // user wins
            console.log("user wins")
            gameOutput.innerHTML = "The user wins, computer looses."
            userPoints +=1
            userWins.innerHTML = userPoints
        }
    } 
}

let roundCalc = () => {  
    if (round5.checked) {
        return 5
    } else if (round10.checked) {
        return 10
    } else if (round15.checked) {
        return 15
    } else if (round20.checked) {
        return 20
    } 
}
