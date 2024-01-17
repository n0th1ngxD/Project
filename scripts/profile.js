const us = document.querySelector(".us");

const userList = JSON.parse(localStorage.getItem("user"));
const curntUser = JSON.parse(localStorage.getItem("cUser"));

let cN = `<h4>Name: ${cU[0].name} <input type="button" value="Change Name" onclick="changeName()"></h4>`;
let cE = `<h4>Email: ${cU[0].gmail} <input type="button" value="Change Email" onclick="changeEmail()"></h4>`;
let cPT = "";
let changePass = `<input type="button" value="Change Password" onclick="changePassword()">`;
let cP;

for(let i = 0; i < curntUser[0].password.length; i++) {
    cPT += "*"
}
console.log("cPT: ", cPT);
let cPass;
cP = `${cPT}`;
cPass = `<h4>Password: ${cP} <button onclick="showPass()" class="showHideButton myBtn"><i class="fa-solid fa-eye"></i></button></h4>`;

function displayProfile() {
    cPT = "";
    us.innerHTML = `
    <div class="img">
        <img src="${curntUser[0].avatar}" alt="Not Found" class="pavt">
    </div>
    <div class="uin4">
        ${cN}
        ${cE}
        ${cPass} ${changePass}
    </div>
    `;
}

// <h4>Password: ${cP} <button onclick="hidePass()"><i class="fa-solid fa-eye"></i></button></h4>

function changeName() {
    cN = `<h4>Name: <input type="text" value="${curntUser[0].name}" id="c-name"/><input type="button" value="Change Name" onclick="changedName()"></h4>`;
    displayProfile();
}
function changeEmail() {
    // cE = `<h4>Email: <input type="text" value="${cU[0].gmail}" id="c-email"/><input type="button" value="Change Email" onclick="changedEmail()"></h4>`;
    // displayProfile();
    alert("Wait!");
    alert("YOU CANNOT CHANGE YOUR EMAIL!!!");
}
function changedName() {
    curntUser[0].name = document.querySelector("#c-name").value;
    localStorage.setItem("cUser", JSON.stringify(curntUser));
    cN = `<h4>Name: ${curntUser[0].name} <input type="button" value="Change Name" onclick="changeName()"></h4>`;
    for(i = 0; i < userList.length; i++) {
        if(userList[i].gmail == curntUser[0].gmail) {
            userList[i].name = curntUser[0].name;
            console.log("casdasdasd");
            localStorage.setItem("user", JSON.stringify(userList));
        }
    }
    displayProfile();
}

function showPass() {
    cP = "";
    cP = curntUser[0].password;
    cPass = `<h4>Password: ${cP} <button onclick="hidePass()" class="showHideButton myBtn"><i class="fa-solid fa-eye-slash"></i></button></h4>`;
    displayProfile();
}

function hidePass() {
    cP = "";
    for(let i = 0; i < curntUser[0].password.length; i++) {
        cP += "*"
    }
    cPass = `<h4>Password: ${cP} <button onclick="showPass()" class="showHideButton myBtn"><i class="fa-solid fa-eye"></i></button></h4>`;
    displayProfile();
}

function changePassword() {
    changePass = `<input type="password" value="${curntUser[0].password}" id="c-pass"> <input type="button" value="Change Password" onclick="changedPassword()">`;
    displayProfile();
}

function changedPassword() {
    curntUser[0].password = "";
    curntUser[0].password = document.querySelector("#c-pass").value;
    localStorage.setItem("cUser", JSON.stringify(curntUser));
    changePass = `<input type="button" value="Change Password" onclick="changePassword()">`;
    for(let i = 0; i < curntUser[0].password.length; i++) {
        cP += "*"
    }

    cPass = `<h4>Password: ${cP} <button onclick="showPass()" class="showHideButton myBtn"><i class="fa-solid fa-eye"></i></button></h4>`;
    for(i = 0; i < userList.length; i++) {
        if(userList[i].gmail == curntUser[0].gmail) {
            userList[i].password = curntUser[0].password;
            console.log("casdasdasd");
            localStorage.setItem("user", JSON.stringify(userList));
        }
    }
    displayProfile();
}
// function changedEmail() {
//     cU[0].gmail = document.querySelector("#c-email").value;
//     localStorage.setItem("cUser", JSON.stringify(cU));
//     cE = `<h4>Email: ${cU[0].gmail} <input type="button" value="Change Email" onclick="changeEmail()"></h4>`;
//     displayProfile();
// }

displayProfile();