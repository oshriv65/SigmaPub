// Saves an order to local memory with the given key and value
function saveOrderToLocalMemory(key, value) {
  localStorage.setItem(key, value);
}

// Clears all data from local memory
function clearAllDataFromLocalMemory() {
  localStorage.clear();
}

// Retrieves all orders from local memory and concatenates them into a single string
function getAllOrdersFromLocalMemory() {
  let data = "";
  for (let i = 0; i < localStorage.length; i++) {
    data += localStorage.getItem(localStorage.key(i)); // Get the corresponding value
  }
  return data || "אין הזמנות..."; // If no data, return a message indicating that there are no orders
}

// Checks if an order exists in local memory by key
function checkIfOrderExistsInLocalMemory(key) {
  return localStorage.getItem(key) !== null;
}

// Retrieves an order from local memory by key
function getOrderFromLocalMemory(key) {
  return localStorage.getItem(key);
}
