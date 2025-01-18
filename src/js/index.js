// Define a function named 'orderPlace' which will be called when the user clicks on the 'הזמנה' button.
function orderPlace() {
  // Retrieve the input values from the HTML elements with IDs 'name', 'phoneNum', 'numPeople', 'date', and 'time'.
  let name = document.getElementById("name").value;
  let numPeople = document.getElementById("numPeople").value;
  let date = document.getElementById("datePicker").value;
  let time = document.getElementById("time").value;
  let phoneNum = document.getElementById("phoneNum").value;
  // Initialize flags for validating the 'name' and 'phoneNum' fields. Initially, both are set to 1 (true).
  let nameFlag = 1;
  let phoneFlag = 1;
  // Validate the input in the 'name' field using a regular expression which checks if it matches Hebrew characters (א-ת) only.
  if (!/^[\sא-ת]+$/.test(name)) nameFlag = 0; // If the input is not valid, set the flag to 0 (false).
  // Validate the input in the 'phoneNum' field using a regular expression which checks if it consists of digits only and has exactly 10 characters.
  if (
    !/^[0-9]+$/.test(phoneNum) ||
    phoneNum.length != 10 ||
    checkIfOrderExistsInLocalMemory(phoneNum)
  )
    phoneFlag = 0; // If the input is not valid, set the flag to 0 (false).

  // Check if either the 'name' or 'phoneNum' field is invalid. If so, display an alert message accordingly.
  if (!nameFlag && !phoneFlag) alert("שם וטלפון נייד אינם תקינים");
  // Display a message indicating that both fields are invalid.
  else if (!nameFlag) alert("שם אינו תקין");
  // Display a message indicating that the 'name' field is invalid.
  else if (!phoneFlag) alert("טלפון נייד אינו תקין");
  // Display a message indicating that the 'phoneNum' field is invalid.
  // If both fields are valid, construct a message with the order details and display it using an alert box.
  else {
    let message =
      "שם מלא: " +
      name +
      "<br>" +
      "טלפון נייד: " +
      phoneNum +
      "<br>" +
      "כמות אנשים: " +
      numPeople +
      "<br>" +
      "תאריך: " +
      date +
      "<br>" +
      "שעה: " +
      time +
      "<br><br>";
    saveOrderToLocalMemory(phoneNum, message); // Save the order details to local memory.
    alert(
      "ההזמנה הושלמה" +
        "\n" +
        "שם מלא: " +
        name +
        "\n" +
        "טלפון נייד: " +
        phoneNum +
        "\n" +
        "כמות אנשים: " +
        numPeople +
        "\n" +
        "תאריך: " +
        date +
        "\n" +
        "שעה: " +
        time
    ); // Display the order completion message.
  }
}

// Define a function named 'clearForm' which will be called when the user clicks on the 'Clear Form' button.
function clearForm() {
  // Reset all input fields to their initial values.
  document.getElementById("orderForm").reset();
}
