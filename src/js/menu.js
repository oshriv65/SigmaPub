// Define a function named 'calculateTotal' which will be called when the user clicks on the 'Calculate Total' button.
function calculateTotal() {
  let total = 0;
  let toppingError = false;
  // Calculate the price of selected food items. Use an object to store their prices and loop through it to add up the costs.
  let foodPrices = {
    food1: { price: 45, checked: false },
    food2: { price: 50, checked: false },
    food3: { price: 40, checked: false },
  };

  for (let foodId in foodPrices) {
    if (document.getElementById(foodId).checked) {
      total += foodPrices[foodId].price;
      foodPrices[foodId].checked = true;
    }
  }

  // Calculate the price of selected toppings. Use an object to store their prices and loop through it to add up the costs.
  let toppingPrices = {
    food1: { T1: 5, T2: 5, T3: 10, T4: 5 },
    food2: { T21: 7, T22: 7, T23: 10, T24: 7 },
    food3: { T31: 5, T32: 7, T33: 4, T34: 5 },
  };
  for (let food in toppingPrices) {
    let topping = toppingPrices[food];
    for (let toppingId in topping) {
      if (document.getElementById(toppingId).checked) {
        if (foodPrices[food].checked) total += topping[toppingId];
        else toppingError = true;
      }
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
  if (!toppingError) alert("הסכום הסופי: " + total + "₪");
  else alert("סומנה תוספת ללא מנה!");
}
