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

// When the user clicks the button, open the modal 
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
