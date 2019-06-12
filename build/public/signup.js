document.getElementById('btnsignup').addEventListener('click', signup);

function signup(event) {
    event.preventDefault();
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
            password: password
        };
        fetch('https://thawing-plateau-13607.herokuapp.com/auth/signup',{
            headers: {"Content-Type": "application/json"},
            method: "POST",
            mode: "cors", //cors, same-origin, no-cors
            body: JSON.stringify(reg)
            // .then((res) => res.json()) NOTE: Never try to recieve server returned json
            // .then((data) => JSON.stringify(data)) NOTE: if posible dont return data from your endpoint (you may need to do so because cause of testing)
            // .catch((error) => alert(error))
        });
        alert('Successful sign up thanks');
        window.location= 'https://thawing-plateau-13607.herokuapp.com/userlogin.html';
        
    }else{
        alert('Password does not match');
    };
};