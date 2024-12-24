function clearAllData() {
  clearAllDataFromLocalMemory();
  document.getElementById("message").innerHTML = "";
}
function getAllOrders() {
  let data = getAllOrdersFromLocalMemory();
  document.getElementById("message").innerHTML = data;
}
