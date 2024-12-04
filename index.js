function orderPlace(){
    var name = document.getElementById('name').value;
    var nf = 1, idf = 1;
    if (!(/^[\sא-ת]+$/.test(name)))
        nf = 0;
    var ID = document.getElementById('IDnum').value;
    if (!(/^[0-9]+$/.test(ID)) || ID.length != 9)
        idf = 0;
    var numPeople = document.getElementById('numPeople').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    if (!nf && !idf)
        alert("שם ותעודת זהות אינם תקינים")
    else if (!nf)
        alert("שם אינו תקין")
    else if (!idf)
        alert("תעודת זהות אינה תקינה")
    else {
        var message = "ההזמנה הושלמה" + "<br>" +
            "שם מלא: " + name + "<br>" +
            "תעודת זהות: " + ID + "<br>" +
            "כמות אנשים: " + numPeople + "<br>" +
            "תאריך: " + date + "<br>" +
            "שעה: " + time;
        alert("ההזמנה הושלמה" + "\n" + "שם מלא: " + name + "\n" + "תעודת זהות: " + ID + "\n" + "כמות אנשים: " + numPeople + "\n" + "תאריך: " + date + "\n" + "שעה: " + time);
        document.getElementById('message').innerHTML = message;
    }
}

function clearForm(){
     document.getElementById('orderForm').reset();
}   