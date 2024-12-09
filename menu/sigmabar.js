function calculateTotal() {
var total = 0;

// Calculate the price of selected food items
var foodPrices = { "food1": 45, "food2": 50, "food3": 40 };
for (var foodId in foodPrices) {
    if (document.getElementById(foodId) && document.getElementById(foodId).checked) {
        total += foodPrices[foodId];
    }
}

// Calculate the price of selected toppings
var toppingPrices = { 
    "T1": 5, "T2": 5, "T3": 10, "T4": 5, 
    "T21": 7, "T22": 7, "T23": 10, "T24": 7, 
    "T31": 5, "T32": 7, "T33": 4, "T34": 5
};
for (var toppingId in toppingPrices) {
    if (document.getElementById(toppingId) && document.getElementById(toppingId).checked) {
        total += toppingPrices[toppingId];
    }
}

// Calculate the price of selected drinks
var drinkPrices = { "Damount1": 8, "Damount2": 24, "Damount3": 20 };
for (var drinkId in drinkPrices) {
    var drinkQuantity = parseInt(document.getElementById(drinkId).value); // Ensure numeric value or default to 0
    total += drinkQuantity * drinkPrices[drinkId];
}

// Update the total price display
alert("הסכום הסופי: " + total + "₪");
}
	