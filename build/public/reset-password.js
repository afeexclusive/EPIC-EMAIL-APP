
var jwt = localStorage.getItem('sjt');
// document.getElementById('dis').innerHTML = jwt;
// document.getElementById('reset').addEventListener('click', pReset);

function pReset(){
    // event.preventDefault();
    let prefEmail = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let conpass = document.getElementById('conpassword').value;
    if (pass === conpass){
        let resetBody ={
            prefEmail: prefEmail,
            password: pass
        }
        const param = resetBody.prefEmail;
        const url = 'https://thawing-plateau-13607.herokuapp.com/pass/user'+'/'+param;
        fetch(url, {
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'Authorization': jwt
            }),
            mode: 'cors',
            method: 'post',
            body: JSON.stringify(resetBody)
        }).then(res => res.json());
        document.getElementById('passmsg').innerHTML= ('<b>'+'Password Reset Successful'+'</b>');
        // .then((data) => document.getElementById('dis').innerHTML= JSON.stringify(data));
        // document.getElementById('dis').innerHTML = jwt;
        
    }else{
        alert('Password Does Not Match. Please enter same password twice and try again')
    };

}