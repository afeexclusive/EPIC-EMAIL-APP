
// var jwt = localStorage.getItem('sjt');
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

        let url ='http://localhost:3000/user' + '/' + resetBody.prefEmail;

        const option = {
            headers: {'Content-Type':'application/json'},
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(resetBody)
        }

        fetch( url, option)
    //     .then((res) => res.json())
    //     .then((res) => {
    //         document.getElementById('dis').innerHTML = JSON.stringify(res);
    //    });

    }else{
        alert('Password Does Not Match. Please enter same password twice and try again')
    };

}