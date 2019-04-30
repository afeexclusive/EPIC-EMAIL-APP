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
        fetch('http://localhost:3000/auth/signup',{
            headers:{"content-Type": "application/json; charset=utf-8"},
            method: 'post',
            body: JSON.stringify(reg)
            .then(response => response.json())
            .then(data => document.getElementById('dis').innerHTML = JSON.stringify(data))
        });
        // document.getElementById('dis').innerHTML = JSON.stringify(reg);
        // alert(reg.firstName+' '+reg.lastName+' '+ reg.gender+' '+reg.dateOfBirth+' '+reg.phone+' '+reg.prefEmail+' '+reg.password);
    }else{
        alert('Password does not match');
    };
};