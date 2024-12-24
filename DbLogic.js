// Data Access Tier

function saveOrderToLocalMemory(key, value) {
  localStorage.setItem(key, value);
}

function clearAllDataFromLocalMemory() {
  localStorage.clear();
}

function getAllOrdersFromLocalMemory(key) {
  return localStorage.getItem(key) || ""; // If no data, return empty string
}
