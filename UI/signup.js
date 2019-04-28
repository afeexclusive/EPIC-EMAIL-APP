function signup() {
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let gender = document.getElementById('gender').value;
    let dateOfBirth = document.getElementById('dob').value;
    let phone = document.getElementById('mobilenum').value;
    let prefEmail = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let conpass = document.getElementById('conpassword').value;
    if (pass === conpass){
        password = pass;
        let reg = {
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            phone: phone,
            prefEmail: prefEmail,
            dateOfBirth: dateOfBirth,
            password:password
        };
        alert(reg.firstName+' '+reg.lastName+' '+ reg.gender+' '+reg.dateOfBirth+' '+reg.phone+' '+reg.prefEmail+' '+reg.password);
    }else{
        alert('Password does not match');
    };
};