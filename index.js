function orderPlace(){
    var name = document.getElementById('name').value;
    if (!(/^[\sא-ת]+$/.test(name)))
        alert("שם לא תקין")
    var ID = document.getElementById('IDnum').value;
    if (!(/^[0-9]+$/.test(ID)) || ID.length!=9)
        alert("מספר תעודת זהות לא תקין")
    var numPeople = document.getElementById('numPeople').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    alert ("ההזמנה הושלמה"+"\n"+name+"\n"+ID+"\n"+numPeople+"\n"+date+"\n"+time);
}

function clearForm(){
     document.getElementById('orderForm').reset();
}   