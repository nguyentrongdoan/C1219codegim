function Phone(phoneID) {
    this.phoneID = phoneID;
    this.showInList = function () {
        let str = "";
        str += "<td>" + this.phoneID + "</td>";
        str += "<td>Edit | Delete</td>";
        str = "<tr id='"+this.phoneID+"'>" + str + "</tr>";

        let tbody = document.getElementById("content").getElementsByTagName("tbody")[0];
        let newRow = tbody.insertRow();
        newRow.innerHTML = str;
    }
}

function aProduct() {
    let id = document.getElementById(`id`).value;

    let s = new Phone(id);
    s.showInList();
}