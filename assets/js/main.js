let form = document.getElementById("formId")

// Round Selection
let round5 = document.getElementById("round5")
let round10 = document.getElementById("round10")
let round15 = document.getElementById("round15")
let round20 = document.getElementById("round20")
let roundSelection = document.getElementById("roundSelection")

let roundsPlayed = document.getElementById("roundsPlayed")
let result = document.getElementById("result")
let gameOutput = document.getElementById("gameOutput")

// User Choices
let rockId = document.getElementById("rockId")
let paperId = document.getElementById("paperId")
let scissorsId = document.getElementById("scissorsId")
let rock = "rock"
let paper = "paper"
let scissors = "scissors"

// Computer Choices
let compArray = ["rock", "paper", "scissors"]

// Counting Wins & Rounds
let userWins = document.getElementById("userWins")
let userPoints = 0
let compWins = document.getElementById("compWins")
let compPoints = 0
let countRound = 0

let userChoice = (x) => {
    let formRounds = form.rounds.value
    let compArrayRandom = compArray[Math.floor(Math.random() * 3)]
    roundSelection.style.display = "none"
    countRound += 1
    roundsPlayed.innerHTML = `${countRound} / ${formRounds}` 
    

    if (compArrayRandom == x) { // tie
        gameOutput.innerHTML = "It's a tie!"
    } else if (compArrayRandom != x) { // computer wins
        if (compArrayRandom == rock && x == scissors || compArrayRandom == paper && x == rock || compArrayRandom == scissors && x == paper) {
            gameOutput.innerHTML = `You chose ${x}, Computer chose ${compArrayRandom}.`
            compPoints +=1
            compWins.innerHTML = compPoints
        } else { // user wins
            gameOutput.innerHTML = `You chose ${x}, Computer chose ${compArrayRandom}.`
            userPoints +=1
            userWins.innerHTML = userPoints
        }
    } 

    if (countRound == formRounds) {
        rockId.disabled = true
        paperId.disabled = true
        scissorsId.disabled = true
        if (compPoints < userPoints) {
            result.innerHTML = "User Wins"
        } else if (compPoints > userPoints) {
            result.innerHTML = "Computer Wins"
        } else {
            result.innerHTML = "It's a tie!"
        }
    }
}



