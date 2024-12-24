// Define a function named 'orderPlace' which will be called when the user clicks on the 'הזמנה' button.
function orderPlace() {
  // Retrieve the input values from the HTML elements with IDs 'name', 'phoneNum', 'numPeople', 'date', and 'time'.
  let name = document.getElementById("name").value;
  let numPeople = document.getElementById("numPeople").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let phoneNum = document.getElementById("phoneNum").value;

  // Initialize flags for validating the 'name' and 'phoneNum' fields. Initially, both are set to 1 (true).
  let nameFlag = 1;
  let phoneFlag = 1;

  // Validate the input in the 'name' field using a regular expression which checks if it matches Hebrew characters (א-ת) only.
  if (!/^[\sא-ת]+$/.test(name)) nameFlag = 0; // If the input is not valid, set the flag to 0 (false).
  // Validate the input in the 'phoneNum' field using a regular expression which checks if it consists of digits only and has exactly 10 characters.
  if (
    !/^[0-9]+$/.test(phoneNum) ||
    phoneNum.length != 10 ||
    checkIfOrderExistsInLocalMemory(phoneNum)
  )
    phoneFlag = 0; // If the input is not valid, set the flag to 0 (false).

  // Check if either the 'name' or 'phoneNum' field is invalid. If so, display an alert message accordingly.
  if (!nameFlag && !phoneFlag)
    alert("שם וטלפון נייד אינם תקינים"); // Display a message indicating that both fields are invalid.
  else if (!nameFlag)
    alert("שם אינו תקין"); // Display a message indicating that the 'name' field is invalid.
  else if (!phoneFlag)
    alert("טלפון נייד אינו תקין"); // Display a message indicating that the 'phoneNum' field is invalid.
  // If both fields are valid, construct a message with the order details and display it using an alert box.
  else {
    let message =
      "שם מלא: " +
      name +
      "<br>טלפון נייד: " +
      phoneNum +
      "<br>כמות אנשים: " +
      numPeople +
      "<br>תאריך: " +
      date +
      "<br>שעה: " +
      time;
    let existingOrders = getAllOrdersFromLocalMemory("orderDetails");
    let UpdatedOrders = existingOrders + "</br></br>" + message;
    saveOrderToLocalMemory("orderDetails", UpdatedOrders);
    alert(
      "ההזמנה הושלמה" +
        "\n" +
        "שם מלא: " +
        name +
        "\n" +
        "טלפון נייד: " +
        phoneNum +
        "\n" +
        "כמות אנשים: " +
        numPeople +
        "\n" +
        "תאריך: " +
        date +
        "\n" +
        "שעה: " +
        time,
    );
  }
}

// Define a function named 'clearForm' which will be called when the user clicks on the 'Clear Form' button.
function clearForm() {
  // Reset all input fields to their initial values.
  document.getElementById("orderForm").reset();
  // Clear any previously displayed order details in the HTML element with ID 'message'.
  document.getElementById("message").innerHTML = "";
}
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
