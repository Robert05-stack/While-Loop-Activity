const correctNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
let guess = null;

while (guess !== correctNumber) {
  guess = parseInt(prompt("Guess a number between 1 and 10:"));

  if (isNaN(guess)) {
    console.log("Please enter a valid number.");
  } else if (guess < correctNumber) {
    console.log("Your guess is too low. Try again!");
  } else if (guess > correctNumber) {
    console.log("Your guess is too high. Try again!");
  } else {
    console.log("Congratulations! You guessed the correct number: " + correctNumber);
  }
