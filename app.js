let form_main = document.getElementById("form-main");
form_main.addEventListener("submit", function (e) {
    e.preventDefault();
    formValidation();
});
function formValidation() {
    let me = document.getElementById("Name").value;
    let Cls = document.getElementById("Class").value;
    let Nbr = document.getElementById("Number").value;

    if (me === "" || Cls === "" || Nbr === "") {
        console.log("Please fill all the fields.");
    } else {
        getData(me, Cls, Nbr);
    }
}
function getData(me, Cls, Nbr) {
    let newRow = document.createElement("tr");

    let nameCell = document.createElement("td");
    nameCell.textContent = me;
    newRow.appendChild(nameCell);

    let classCell = document.createElement("td");
    classCell.textContent = Cls;
    newRow.appendChild(classCell);

    let rollCell = document.createElement("td");
    rollCell.textContent = Nbr;
    newRow.appendChild(rollCell);

    let table = document.querySelector(".main-body table");
    table.appendChild(newRow);

    clearForm();
}

function clearForm() {
    document.getElementById("Name").value = "";
    document.getElementById("Class").value = "";
    document.getElementById("Number").value = "";
}
