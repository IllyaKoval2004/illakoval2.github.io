function checkForm(el) {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    var error = "";

    if(name == "" || phone == "" || email == "")
        error = "empty";

    if(error != "") {
        alert("Форму не записано");
        return false; 
    }
    else {
        if(confirm('Підтвердити надсилання форми?')){
            alert("Форму записано");
            return true; 
        }
        else {
            alert("Форму не записано");
            return false;
        }
    }
}
