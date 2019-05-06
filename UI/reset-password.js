document.getElementById('btnreset').addEventListener('click', reset);

function reset(event) {
    event.preventDefault();
    let prefEmail = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let conpass = document.getElementById('conpassword').value;
    if (pass === conpass){
        password = pass;
        let pReset = {
            prefEmail: prefEmail,
            password: password
        };
        fetch('http://localhost:3000/user/:prefEmail',{
            headers: {"Content-Type": "application/json"},
            method: "PUT",
            mode: "cors", //cors, same-origin, no-cors
            body: JSON.stringify(pReset)
            // .then((res) => res.json()) NOTE: Never try to recieve server returned json
            // .then((data) => JSON.stringify(data)) NOTE: if posible dont return data from your endpoint (you may need to do so because cause of testing)
            .catch((error) => alert(error))
        });
        
    }else{
        alert('Password does not match');
    };
};