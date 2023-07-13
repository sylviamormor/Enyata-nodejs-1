

let movieType = "3D"
let age = 50
let seatSelection = "vip"

let ticketPrice = 0;

if (movieType === "regular") {
  if (age < 12) {
    ticketPrice = 8;
  } else if (age < 65) {
    ticketPrice = 12;
  } else {
    ticketPrice = 10;
  }
} else if (movieType === "3D") {
  if (age < 12) {
    ticketPrice = 10;
  } else if (age < 65) {
    ticketPrice = 15;
  } else {
    ticketPrice = 12;
  }
} else if (movieType === "IMAX") {
  if (age < 12) {
    ticketPrice = 12;
  } else if (age < 65) {
    ticketPrice = 18;
  } else {
    ticketPrice = 15;
  }
}

if (seatSelection === "VIP") {
  ticketPrice += 5;
}

console.log("Ticket price: $" + ticketPrice);



//question 2

let plan = "Basic"
let personalTrainer = "True"
let mealPlan = "False"

let baseCost = 0;
let additionalCost = 0;

switch (plan) {
  case "Basic":
    baseCost = 10;
    break;
  case "Standard":
    baseCost = 15;
    break;
  case "Premium":
    baseCost = 20;
    break;
}

if (personalTrainer && mealPlan) {
  additionalCost = 5 + 8 - 3;
} else if (personalTrainer || mealPlan) {
  additionalCost = 5 + 8;
}

let totalCost = baseCost + additionalCost;

console.log("Monthly subscription cost: $" + totalCost);
