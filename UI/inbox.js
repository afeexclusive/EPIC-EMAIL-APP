

var from = localStorage.getItem('currentUser');
alert('Welcome to your inbox ' +from);

let url = 'http://localhost:3000/messages/unread' + '/' + from
fetch(url)
    .then(response => response.json())
    .then((data) => {
        let table = document.createElement("table");
        table.setAttribute('id', 'incomingmail')
        let row = table.insertRow();
        for (var i=0; i<data.length; i++){
            let cell1 = row.insertCell();
            cell1.innerHTML = data[i].id
            let cell2 = row.insertCell();
            cell2.innerHTML = data[i].from
            let cell3 = row.insertCell();
            cell3.innerHTML = data[i].subject
            let cell4 = row.insertCell();
            cell4.innerHTML = data[i].createdOn
            
            // cell3.addEventListener('click', tableDetails)
            row = table.insertRow();
            // localStorage.setItem('email', data[i].prefEmail )
            
        };
        document.getElementById('Inbox').appendChild(table);
        
    });



function sendMessage(){
  let to = document.getElementById('toemail').value;
  let subject = document.getElementById('subject').value;
  let messageBody = document.getElementById('messBody').value;
  let postMessage = {
    from: from,
    to: to,
    subject: subject,
    messageBody: messageBody
  }
  // alert(JSON.stringify(postMessage))
  if(!postMessage.messageBody){
    alert('Message needs to have body')
  }else if(to==='example@epicmail.com'){
    alert('Opps, you forgot to specify the recipient')
    document.getElementById('toemail').value = ""
  }else{
    fetch('http://localhost:3000/messages',{
      headers: {"Content-Type": "application/json"},
      method: "POST",
      mode: "cors", //cors, same-origin, no-cors
      body: JSON.stringify(postMessage)
      });
      closespan();
  }
}

function showSent(){
  let from = localStorage.getItem('currentUser');
  let url = 'http://localhost:3000/messages/sent' + '/' + from
  // document.getElementById('Sent').innerHTML = url;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            let table = document.createElement("table");
            table.setAttribute('id', 'incomingmail')
            let row = table.insertRow();
            for (var i=0; i<data.length; i++){
                let cell1 = row.insertCell();
                cell1.innerHTML = data[i].id
                let cell2 = row.insertCell();
                cell2.innerHTML = data[i].to
                let cell3 = row.insertCell();
                cell3.innerHTML = data[i].subject
                let cell4 = row.insertCell();
                cell4.innerHTML = data[i].createdOn
                
                // cell3.addEventListener('click', tableDetails)
                row = table.insertRow();
                // localStorage.setItem('email', data[i].prefEmail )
                
            };
            document.getElementById('Sent').appendChild(table);
            
        });

}





function openDiv(evt, inboxMenu) {
  // Declare all variables
  let i;
  let tabcontent;
  let tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(inboxMenu).style.display = 'block';
  evt.currentTarget.className += 'active';
}

// When the user clicks the compose button, open the modal 
function composemail() {
  let modal = document.getElementById('myModal');
  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName('close')[0];
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
function closespan() {
 let cls = document.getElementsByClassName('close')[0];
 document.getElementById('myModal').style.display = 'none';
}

function createGroup(){
  // bring up and style the element
  document.getElementById('email').style.display='block';
  document.getElementById('adduser').style.display='block';
  document.getElementById("creategroupbtn").style.display='block';
  document.getElementById('groupname').style.display='block';
}

