function listuser() {
    fetch('http://localhost:3000/admin/user')
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
            row = table.insertRow();
        };
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
