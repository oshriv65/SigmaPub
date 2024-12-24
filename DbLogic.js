// Data Access Tier

function saveOrderToLocalMemory(key, value) {
  localStorage.setItem(key, value);
}

function clearAllDataFromLocalMemory() {
  localStorage.clear();
}

function getAllOrdersFromLocalMemory(key) {
  let data = "";
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i); // Get the key (which could be anything)
    data += localStorage.getItem(key); // Get the corresponding value
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
