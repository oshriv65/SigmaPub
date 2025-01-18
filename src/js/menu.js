// Define a function named 'calculateTotal' which will be called when the user clicks on the 'Calculate Total' button.
function calculateTotal() {
  let total = 0;

  // Calculate the price of selected food items. Use an object to store their prices and loop through it to add up the costs.
  let foodPrices = { food1: 45, food2: 50, food3: 40 };
  for (let foodId in foodPrices) {
    if (
      document.getElementById(foodId) &&
      document.getElementById(foodId).checked
    ) {
      total += foodPrices[foodId];
    }
  }

  // Calculate the price of selected toppings. Use an object to store their prices and loop through it to add up the costs.
  let toppingPrices = {
    T1: 5,
    T2: 5,
    T3: 10,
    T4: 5,
    T21: 7,
    T22: 7,
    T23: 10,
    T24: 7,
    T31: 5,
    T32: 7,
    T33: 4,
    T34: 5,
  };
  for (let toppingId in toppingPrices) {
    if (
      document.getElementById(toppingId) &&
      document.getElementById(toppingId).checked
    ) {
      total += toppingPrices[toppingId];
    }
  }

  // Calculate the price of selected drinks. Use an object to store their prices and loop through it to add up the costs.
  let drinkPrices = { Damount1: 8, Damount2: 24, Damount3: 20 };
  for (let drinkId in drinkPrices) {
    // Ensure the value of the 'drink' field is numeric or default to 0 if not.
    let drinkQuantity = parseInt(document.getElementById(drinkId).value);
    total += drinkQuantity * drinkPrices[drinkId];
  }

  // Display the total price using an alert box.
  alert("הסכום הסופי: " + total + "₪");
}
