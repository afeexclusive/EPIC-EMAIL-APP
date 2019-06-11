
document.getElementById('btsignin').addEventListener('click', login)
function login(event){
    event.preventDefault();
    let prefEmail = document.getElementById('username').value;
    localStorage.setItem('currentUser', prefEmail);
    let password = document.getElementById('password').value;
    let pLogin = {
        prefEmail: prefEmail,
        password: password
    };
    
    fetch('http://localhost:5000/user/login',{
    headers: {"Content-Type": "application/json"},
    method: "POST",
    mode: "cors", //cors, same-origin, no-cors
    body: JSON.stringify(pLogin)
    }).then((res) => res.json())
    .then((data) => { 
        let jtoken = JSON.stringify(data)
        if (jtoken.length < 70){
            // document.getElementById('dis').innerHTML = jtoken;
            // localStorage.setItem('sjt', jtoken);
            let alat = JSON.parse(jtoken);
            alert(alat.message);

        }else{
            let ptoken = JSON.parse(jtoken);
            let mainToken = ptoken.AccessToken;
            let dtoken = 'Bearer'+ ' ' +mainToken;
            // document.getElementById('dis').innerHTML = dtoken;
            localStorage.setItem('sjt', dtoken);
            alert('Login Success');
            window.location= 'file:///C:/Users/afe%20kunle/epicrepo/EPIC-EMAIL-APP/UI/inbox.html';
        }
        
    });
    
}
