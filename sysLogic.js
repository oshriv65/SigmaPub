// Clears all data from local memory and resets the message display
function clearAllData() {
  clearAllDataFromLocalMemory();
  document.getElementById("message").innerHTML = "";
}

// Retrieves all orders from local memory and displays them
function getAllOrders() {
  let data = getAllOrdersFromLocalMemory();
  document.getElementById("message").innerHTML = data;
}

// Searches for an order by phone number and displays the result
function searchByPhoneNum() {
  let phoneNum = document.getElementById("phoneNum").value;
  if (!/^[0-9]+$/.test(phoneNum) || phoneNum.length != 10)
    alert("טלפון נייד אינו תקין");
  else
    document.getElementById("message").innerHTML =
      getOrderFromLocalMemory(phoneNum) || "ההזמנה לא קיימת!";
}
