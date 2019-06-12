function listUser() {
    fetch('https://thawing-plateau-13607.herokuapp.com/admin/user')
    .then(response => response.json())
    .then((data) => {
        let table = document.createElement("table");
        let row = table.insertRow();
        for (var i=0; i<data.length; i++){
            let cell1 = row.insertCell();
            cell1.innerHTML = data[i].id
            let cell2 = row.insertCell();
            cell2.innerHTML = data[i].firstName
            let cell3 = row.insertCell();
            cell3.innerHTML = data[i].lastName
            let cell4 = row.insertCell();
            cell4.innerHTML = data[i].prefEmail
            let cell5 = row.insertCell();
            cell5.innerHTML = data[i].phone
            let cell6 = row.insertCell();
            cell6.innerHTML = data[i].createdDate
            cell4.addEventListener('click', tableDetails)
            row = table.insertRow();
            localStorage.setItem('email', data[i].prefEmail )
            
        };
        document.getElementById('userlist').appendChild(table);
        
    });

}

function userDetails() {
    document.getElementById('subemail').style.display = 'block';
    document.getElementById('subdetails').style.display = 'block';
        
}


function tableDetails(){
    let prefEmail = localStorage.getItem('email')
            
    let url ='https://thawing-plateau-13607.herokuapp.com/admin/user' + '/' + prefEmail;
        
    const option = {
        headers: {'Content-Type': 'application/json'},
        method: 'GET',
        mode: 'cors', //cors, same-origin, no-cors
    }

    fetch( url, option)
    .then(response => response.json())
    .then((response) => {
        
        let table = document.createElement('table');
        let row = table.insertRow();
        let cid1 = row.insertCell();
        cid1.innerHTML = 'User Id number';
        let cid2 = row.insertCell();
        cid2.innerHTML = response.id;

        row = table.insertRow();
        let cfn1 = row.insertCell();
        cfn1.innerHTML = 'First Name';
        let cfn2 = row.insertCell();
        cfn2.innerHTML = response.firstName;

        row = table.insertRow();
        let cln1 = row.insertCell();
        cln1.innerHTML = 'Last Name';
        let cln2 = row.insertCell();
        cln2.innerHTML = response.lastName;

        row = table.insertRow();
        let cem1 = row.insertCell();
        cem1.innerHTML = 'Email Address';
        let cem2 = row.insertCell();
        cem2.innerHTML = response.prefEmail;

        row = table.insertRow();
        let cpw1 = row.insertCell();
        cpw1.innerHTML = 'Password';
        let cpw2 = row.insertCell();
        cpw2.innerHTML = '***... hidden' ;

        row = table.insertRow();
        let cph1 = row.insertCell();
        cph1.innerHTML = 'Mobile Phone Number';
        let cph2 = row.insertCell();
        cph2.innerHTML = response.phone;

        row = table.insertRow();
        let cdob1 = row.insertCell();
        cdob1.innerHTML = 'Date of Birth';
        let cdob2 = row.insertCell();
        cdob2.innerHTML = response.dateOfBirth;

        row = table.insertRow();
        let csex1 = row.insertCell();
        csex1.innerHTML = 'Gender';
        let csex2 = row.insertCell();
        csex2.innerHTML = response.gender;

        row = table.insertRow();
        let ccd1 = row.insertCell();
        ccd1.innerHTML = 'SignUp Date';
        let ccd2 = row.insertCell();
        ccd2.innerHTML = response.createdDate;

        row = table.insertRow();
        let cud1 = row.insertCell();
        cud1.innerHTML = 'Last Updated';
        let cud2 = row.insertCell();
        cud2.innerHTML = response.modifiedDate;

        document.getElementById('userlist').appendChild(table);
    });

    // alert(prefEmail);
}



function fetchDetail(){
    let prefEmail = document.getElementById('subemail').value;
            
    let url ='https://thawing-plateau-13607.herokuapp.com/admin/user' + '/' + prefEmail;
    
    const option = {
        headers: {'Content-Type': 'application/json'},
        method: 'GET',
        mode: 'cors', //cors, same-origin, no-cors
    }

    fetch( url, option)
    .then(response => response.json())
    .then((response) => {
        
        let table = document.createElement('table');
        let row = table.insertRow();
        let cid1 = row.insertCell();
        cid1.innerHTML = 'User Id number';
        let cid2 = row.insertCell();
        cid2.innerHTML = response.id;

        row = table.insertRow();
        let cfn1 = row.insertCell();
        cfn1.innerHTML = 'First Name';
        let cfn2 = row.insertCell();
        cfn2.innerHTML = response.firstName;

        row = table.insertRow();
        let cln1 = row.insertCell();
        cln1.innerHTML = 'Last Name';
        let cln2 = row.insertCell();
        cln2.innerHTML = response.lastName;

        row = table.insertRow();
        let cem1 = row.insertCell();
        cem1.innerHTML = 'Email Address';
        let cem2 = row.insertCell();
        cem2.innerHTML = response.prefEmail;

        row = table.insertRow();
        let cpw1 = row.insertCell();
        cpw1.innerHTML = 'Password';
        let cpw2 = row.insertCell();
        cpw2.innerHTML = response.password;

        row = table.insertRow();
        let cph1 = row.insertCell();
        cph1.innerHTML = 'Mobile Phone Number';
        let cph2 = row.insertCell();
        cph2.innerHTML = response.phone;

        row = table.insertRow();
        let cdob1 = row.insertCell();
        cdob1.innerHTML = 'Date of Birth';
        let cdob2 = row.insertCell();
        cdob2.innerHTML = response.dateOfBirth;

        row = table.insertRow();
        let csex1 = row.insertCell();
        csex1.innerHTML = 'Gender';
        let csex2 = row.insertCell();
        csex2.innerHTML = response.gender;

        row = table.insertRow();
        let ccd1 = row.insertCell();
        ccd1.innerHTML = 'SignUp Date';
        let ccd2 = row.insertCell();
        ccd2.innerHTML = response.createdDate;

        row = table.insertRow();
        let cud1 = row.insertCell();
        cud1.innerHTML = 'Last Updated';
        let cud2 = row.insertCell();
        cud2.innerHTML = response.modifiedDate;

        document.getElementById('userlist').appendChild(table);
    });

    
}




    // function addCell(tr, val) {
    //     var td = document.createElement('td');
    //     td.innerHTML = val;
    //     tr.appendChild(td)
    // }

    // function addRow(tbl, val_1, val_2, val_3) {
    //     var tr = document.createElement('tr');
    //     addCell(tr, val_1);
    //     addCell(tr, val_2);
    //     addCell(tr, val_3);
    //     tbl.appendChild(tr)
    // }

    // tbl = document.getElementById('ulist');
    // addRow(tbl, 'foo', 'bar', 'baz');
    // addRow(tbl, 'one', 'two', 'three');
    // data.forEach(user => {
        // document.getElementById('userlist').innerHTML = data;
    // });
