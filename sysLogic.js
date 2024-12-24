function clearAllData() {
  clearAllDataFromLocalMemory();
  document.getElementById("message").innerHTML = "";
}
function getAllOrders() {
  let data = getAllOrdersFromLocalMemory("orderDetails");
  document.getElementById("message").innerHTML = data;
}
