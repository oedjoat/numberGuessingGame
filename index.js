console.clear()
let user = prompt(`Please enter your username: `)
console.clear()
let greeting = `Welcome ${user}! Would you like to play a Guessing Game?`
let underLine = `-`

underLine = underLine.repeat(greeting.length)
console.log(`${greeting}`)
console.log(`${underLine}`)
console.log()


let Y = "Yes"
let N = "No"
let accept = prompt(`Type ${Y} or ${N} `)
Y = "[Yy]es"
N = "[Nn]o"
const answerY = accept.match(Y)
const answerN = accept.match(N)
console.log()
let guessAttempt = []
let pointsGotten = "0"

console.log()
let startRange = "1"
console.log()
let stopRange = "2"
console.log()

startRange = parseInt(startRange, 10)
stopRange = parseInt(stopRange, 10)

let min = Math.ceil(startRange);
let max = Math.floor(stopRange);


//function block to check and Compare range values
function compareGuess(range, randomizer) {

  if (answerY) {

    range = max - min + 1

    randomizer = Math.floor(Math.random() * (range)) + min
    randomizer = Number(randomizer)

    let guess = prompt(`Enter a guess between ${min} and ${max}: `)
    guess = Number(guess)

    if (guess >= min && guess <= max) {
      console.log()
      console.log()
      console.log(`Your guess is: ${guess}`)
      console.log()
      console.log(`The actual guess is: ${randomizer}`)
      console.log()


      if (randomizer === guess) {
        console.log(`Your guess is correct`)
        console.log()
        guessAttempt.push(guess)
        guessList()
        console.log()
        addPoints()
        console.log()
        console.log(`Play again, you're doing a great job!`)
        console.log()
        compareGuess()
      } else {
        console.log(`Your guess is not correct`)
        console.log()
        console.log()
        console.log(`Let us try again`)
        console.log()
        compareGuess()
      }
    } else {
      reAttempt()
    }

  } else {
    console.log(`We hate to see you leave, come back and play again.`)
  }
}


//function to run a re-attempt when guess fails
function reAttempt() {
  console.log()
  console.log(`Your guess is invalid, try again please`)
  console.log()
  compareGuess()
}

function guessList() {
  if (guessAttempt.length < 2) {
    console.log(`This is your guess: ${guessAttempt} `)
  } else {
    console.log(`These are your guesses: ${guessAttempt} `)
  }
}

//function to add and update points gotten by player
function addPoints() {
  pointsInNumber = parseInt(pointsGotten, 10)
  for (i = 0; i < guessAttempt.length; i++) {
    pointsInNumber = guessAttempt.length

  }
  console.log(`Your guess point is ${pointsInNumber}`)
  console.log()
  if (pointsInNumber = 1) {
    newLevel()
  }
}

function newLevel() {
  console.log()
  let newGreeting = `Welcome to level ${guessAttempt.length + 1}`
  console.log(newGreeting)
  underLine = `-`
  underLine = underLine.repeat(newGreeting.length)
  console.log(underLine)
  pointsInNumber = guessAttempt.length
  max++
}

compareGuess()
