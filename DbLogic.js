//const users = { admin: "admin" };
function loadDB() {
  if (!localStorage.length) {
    localStorage.setItem("users", JSON.stringify({ admin: "admin" }));
    localStorage.setItem("orders", JSON.stringify({}));
  }
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
  /*
  localStorage.setItem(key, value);
  */
}

// Clears all data from local memory
function clearAllDataFromLocalMemory() {
  let orders = JSON.parse(localStorage.getItem("orders"));
  orders = {};
  localStorage.setItem("orders", JSON.stringify(orders));
}

// Retrieves all orders from local memory and concatenates them into a single string
function getAllOrdersFromLocalMemory() {
  let orders = JSON.parse(localStorage.getItem("orders"));
  let data = "";
  for (const key in orders) {
    data += orders[key]; // Prints each value
  }
  /*
  for (let i = 0; i < localStorage.length; i++) {
    data += localStorage.getItem(localStorage.key(i)); // Get the corresponding value
  }
  */
  return data || "אין הזמנות..."; // If no data, return a message indicating that there are no orders
}

// Checks if an order exists in local memory by key
function checkIfOrderExistsInLocalMemory(key) {
  let orders = JSON.parse(localStorage.getItem("orders"));
  console.log(key in orders);
  return key in orders;
  /*
  return localStorage.getItem(key) !== null;
  */
}

// Retrieves an order from local memory by key
function getOrderFromLocalMemory(key) {
  let orders = JSON.parse(localStorage.getItem("orders"));
  return orders[key];
  /*
  return localStorage.getItem(key);
*/
}
