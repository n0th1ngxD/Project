const informationDiv = document.querySelector("#information");

const productsLS = JSON.parse(localStorage.getItem("products"));
const usersLS = JSON.parse(localStorage.getItem("user"));
const ownersDiv = document.querySelector("#owners");
const adminsDiv = document.querySelector("#admins");
const aCurrentUser = JSON.parse(localStorage.getItem("cUser"));
let soldPros = JSON.parse(localStorage.getItem("soldProducts"));

for(let i = 0; i < aCurrentUser.length; i++) {
    if(aCurrentUser[i].role != "admin") {
        location.href = "../html/index.html";
    }
}

informationDiv.innerHTML = `
    <div>
        <i class="fa-solid fa-shirt"></i>
        <h3>${productsLS.length} Products</h3>
    </div>
    <div>
        <i class="fa-solid fa-user"></i>
        <h3>${usersLS.length} Users</h3>
    </div>
    <div>
        <i class="fa-solid fa-bag-shopping"></i>
        <h3>${soldPros} Sold Products</h3>
    </div>
`;

for(let i = 0; i < usersLS.length; i++) {
    if(usersLS[i].role == "admin") {
        adminsDiv.innerHTML += `
        <div class="oa">
            <img src="${usersLS[i].avatar}" alt="" class="oa-avt">
            <p>${usersLS[i].name}</p>
        </div>
        `;
    }
}