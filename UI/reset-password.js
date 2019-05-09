
var jwt = localStorage.getItem('sjt');
// document.getElementById('dis').innerHTML = jwt;

document.getElementById('reset').addEventListener('click', pReset);
function pReset(event){
    event.preventDefault();
    let prefEmail = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let conpass = document.getElementById('conpassword').value;
    if (pass === conpass){
        let resetBody ={
            prefEmail: prefEmail,
            password: pass
        }
        
        let url = 'http://localhost:3000/user/' + prefEmail;
        // document.getElementById('dis').innerHTML = (url);

        fetch(url,{
        headers: {
            "Content-Type": "application/json",
            "Authentication": jwt,
        },
        method: "PUT",
        mode: "cors", //cors, same-origin, no-cors
        body: JSON.stringify(resetBody)
        }).then((res) => res.json())
        .then((data) => {
            let updated = JSON.stringify(data)
        document.getElementById('dis').innerHTML = updated;
    });

    }else{
        alert('Password Does Not Match. Please enter same password twice and try again')
    };

}