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

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (checkIfUserExists(username, password)) {
    alert("התחברת בהצלחה!");
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("managerSystem").style.display = "block";
    document.getElementById("loginForm").reset();
  } else alert("שם משתמש או סיסמה שגויים");
}
