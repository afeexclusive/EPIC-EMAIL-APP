// document.getElementById('btsignin').addEventListener('click', signin);

function signin(event) {
    event.preventDefault();
    let prefEmail = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let pLogin = {
        prefEmail: prefEmail,
        password: password
    };
    alert('amen');

    
    // fetch('http://localhost:3000/user/login',{
    //     headers: {"Content-Type": "application/json"},
    //     method: "POST",
    //     mode: "cors", //cors, same-origin, no-cors
    //     body: JSON.stringify(pLogin)
    //     // .then((res) => res.json()) //NOTE: Never try to recieve server returned json
    //     // .then((data) => document.getElementById('exp').innerHTML = JSON.stringify(data)) //NOTE: if posible dont return data from your endpoint (you may need to do so because cause of testing)
    //     // .catch((error) => alert(error))
        
    // }).then((res) => res.json()) //NOTE: Never try to recieve server returned json
    //NOTE: if posible dont return data from your endpoint (you may need to do so because cause of testing)
};