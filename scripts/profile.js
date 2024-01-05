const us = document.querySelector(".us");

const userList = JSON.parse(localStorage.getItem("user"));
const curntUser = JSON.parse(localStorage.getItem("cUser"));

let cN = `<h4>Name: ${cU[0].name} <input type="button" value="Change Name" onclick="changeName()"></h4>`;
let cE = `<h4>Email: ${cU[0].gmail} <input type="button" value="Change Email" onclick="changeEmail()"></h4>`;

function displayProfile() {
    us.innerHTML = `
    <div class="img">
        <img src="${cU[0].avatar}" alt="Not Found" class="pavt">
    </div>
    <div class="uin4">
        ${cN}
        ${cE}
    </div>
    `;
}

function changeName() {
    cN = `<h4>Name: <input type="text" value="${cU[0].name}" id="c-name"/><input type="button" value="Change Name" onclick="changedName()"></h4>`;
    displayProfile();
}
function changeEmail() {
    cE = `<h4>Email: <input type="text" value="${cU[0].gmail}" id="c-email"/><input type="button" value="Change Email" onclick="changedEmail()"></h4>`;
    displayProfile();
}
function changedName() {
    cU[0].name = document.querySelector("#c-name").value;
    localStorage.setItem("cUser", JSON.stringify(cU));
    cN = `<h4>Name: ${cU[0].name} <input type="button" value="Change Name" onclick="changeName()"></h4>`;
    for(i = 0; i < userList.length; i++) {
        if(userList[i].gmail == cU[0].gmail) {
            userList[i].name = cU[0].name;
        }
    }
    displayProfile();
}
function changedEmail() {
    cU[0].gmail = document.querySelector("#c-email").value;
    localStorage.setItem("cUser", JSON.stringify(cU));
    cE = `<h4>Email: ${cU[0].gmail} <input type="button" value="Change Email" onclick="changeEmail()"></h4>`;
    displayProfile();
}

displayProfile();