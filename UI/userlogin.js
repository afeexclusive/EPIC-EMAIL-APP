
document.getElementById('btsignin').addEventListener('click', login)
function login(event){
    event.preventDefault();
    let prefEmail = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let pLogin = {
        prefEmail: prefEmail,
        password: password
    };

    fetch('http://localhost:3000/user/login',{
    headers: {"Content-Type": "application/json"},
    method: "POST",
    mode: "cors", //cors, same-origin, no-cors
    body: JSON.stringify(pLogin)
    }).then((res) => res.json())
    .then((data) => { 
        let jtoken = JSON.stringify(data)
        if (jtoken.length < 70){
            document.getElementById('dis').innerHTML = jtoken;
            localStorage.setItem('sjt', jtoken);
        }else{
            let ptoken = JSON.parse(jtoken);
            let mainToken = ptoken.AccessToken;
            let dtoken = 'Bearer'+ ' ' +mainToken;
            document.getElementById('dis').innerHTML = dtoken;
            localStorage.setItem('sjt', dtoken);
        }
        
    });
    
}
