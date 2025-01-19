// Initializes the database with default users and orders
function loadDB() {
  localStorage.setItem("users", JSON.stringify({ admin: "admin" })); // Sets default admin user
  localStorage.setItem("orders", JSON.stringify({})); // Initializes orders as an empty object
}

// Checks if a user exists in the database with the given username and password
function checkIfUserExists(username, password) {
  let users = JSON.parse(localStorage.getItem("users")); // Retrieves users from local storage
  return users[username] === password; // Checks if the username and password match
}

// Saves an order to local memory with the given key and value
function saveOrderToLocalMemory(key, value) {
  let orders = JSON.parse(localStorage.getItem("orders")); // Retrieves orders from local storage
  orders[key] = value; // Adds or updates the order with the given key and value
  localStorage.setItem("orders", JSON.stringify(orders)); // Saves the updated orders back to local storage
}

// Clears all data from local memory
function clearAllDataFromLocalMemory() {
  localStorage.setItem("orders", JSON.stringify({})); // Resets orders to an empty object
}

// Retrieves all orders from local memory and concatenates them into a single string
function getAllOrdersFromLocalMemory() {
  let orders = JSON.parse(localStorage.getItem("orders")); // Retrieves orders from local storage
  let data = "";
  for (const key in orders) {
    data += orders[key]; // Concatenates each order value to the data string
  }
  return data || "אין הזמנות..."; // If no data, return a message indicating that there are no orders
}

// Checks if an order exists in local memory by key
function checkIfOrderExistsInLocalMemory(key) {
  let orders = JSON.parse(localStorage.getItem("orders")); // Retrieves orders from local storage
  return key in orders; // Checks if the key exists in the orders object
}

// Retrieves an order from local memory by key
function getOrderFromLocalMemory(key) {
  let orders = JSON.parse(localStorage.getItem("orders")); // Retrieves orders from local storage
  return orders[key]; // Returns the order value for the given key
}
// Retrieves an order from local memory by key
function deleteOrderFromLocalMemory(key) {
  let orders = JSON.parse(localStorage.getItem("orders")); // Retrieves orders from local storage
  delete orders[key];
  localStorage.setItem("orders", JSON.stringify(orders)); // Saves the updated orders back to local storage
}
