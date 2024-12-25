// Data Access Tier
function saveOrderToLocalMemory(key, value) {
  localStorage.setItem(key, value);
}

function clearAllDataFromLocalMemory() {
  localStorage.clear();
}

function getAllOrdersFromLocalMemory() {
  let data = "";
  for (let i = 0; i < localStorage.length; i++) {
    data += localStorage.getItem(localStorage.key(i)); // Get the corresponding value
  }
  return data || "אין הזמנות.."; // If no data, return empty string
}
function checkIfOrderExistsInLocalMemory(key) {
  if (localStorage.getItem(key) !== null) {
    return true;
  } else {
    return false;
  }
}
