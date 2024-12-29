// Clears all data from local memory and resets the message display
function clearAllData() {
  clearAllDataFromLocalMemory(); // Clear all data from local memory
  document.getElementById("message").innerHTML = ""; // Reset the message display
}

// Retrieves all orders from local memory and displays them
function getAllOrders() {
  let data = getAllOrdersFromLocalMemory(); // Get all orders from local memory
  document.getElementById("message").innerHTML = data; // Display the orders
}

// Searches for an order by phone number and displays the result
function searchByPhoneNum() {
  let phoneNum = document.getElementById("phoneNum").value; // Get the phone number from the input field
  // Validate the phone number format
  if (!/^[0-9]+$/.test(phoneNum) || phoneNum.length != 10)
    alert(
      "טלפון נייד אינו תקין"
    ); // Display an error message if the phone number is invalid
  else
    document.getElementById("message").innerHTML =
      getOrderFromLocalMemory(phoneNum) || "ההזמנה לא קיימת!"; // Display the order or a message if it doesn't exist
}

// Handles user login
function login() {
  const username = document.getElementById("username").value; // Get the username from the input field
  const password = document.getElementById("password").value; // Get the password from the input field
  // Check if the user exists
  if (checkIfUserExists(username, password)) {
    alert("התחברת בהצלחה!"); // Display a success message
    document.getElementById("loginForm").style.display = "none"; // Hide the login form
    document.getElementById("managerSystem").style.display = "block"; // Show the manager system
    document.getElementById("loginForm").reset(); // Reset the login form
  } else alert("שם משתמש או סיסמה שגויים"); // Display an error message if the login fails
}
