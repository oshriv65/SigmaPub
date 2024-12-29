function loadDB() {
  localStorage.setItem("users", JSON.stringify({ admin: "admin" }));
  localStorage.setItem("orders", JSON.stringify({}));
}
function checkIfUserExists(username, password) {
  let users = JSON.parse(localStorage.getItem("users"));
  return users[username] === password;
}

// Saves an order to local memory with the given key and value
function saveOrderToLocalMemory(key, value) {
  let orders = JSON.parse(localStorage.getItem("orders"));
  orders[key] = value;
  localStorage.setItem("orders", JSON.stringify(orders));
}

// Clears all data from local memory
function clearAllDataFromLocalMemory() {
  localStorage.setItem("orders", JSON.stringify({}));
}

// Retrieves all orders from local memory and concatenates them into a single string
function getAllOrdersFromLocalMemory() {
  let orders = JSON.parse(localStorage.getItem("orders"));
  let data = "";
  for (const key in orders) {
    data += orders[key]; // Prints each value
  }

  return data || "אין הזמנות..."; // If no data, return a message indicating that there are no orders
}

// Checks if an order exists in local memory by key
function checkIfOrderExistsInLocalMemory(key) {
  let orders = JSON.parse(localStorage.getItem("orders"));
  return key in orders;
}

// Retrieves an order from local memory by key
function getOrderFromLocalMemory(key) {
  let orders = JSON.parse(localStorage.getItem("orders"));
  return orders[key];
}
