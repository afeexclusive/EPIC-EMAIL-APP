function listuser() {
    fetch('http://localhost:3000/admin/user')
    .then(response => response.json())
    .then(data => document.getElementById('userlist').innerHTML = JSON.stringify(data))
}
