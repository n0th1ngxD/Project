const cU = JSON.parse(localStorage.getItem("cUser"));
console.log(cU);

// Nav

const navDiv = document.querySelector("#nav");
navDiv.innerHTML = `
<a href="./index.html"><span style="color: rgb(201, 0, 0)">H</span>ome</a>
<a href="./store.html"><span style="color: rgb(201, 1, 1)">S</span>tore</a>
<a href="./cart.html"><span style="color: rgb(201, 1, 1)">C</span>art</a>
`;

// user

const userDiv = document.querySelector("#ua");
if(cU.length == 0) {
    console.log("no");
    userDiv.innerHTML = `<div id="nUser"><a href="../html/signin.html"><span style="color: rgb(201, 1, 1)">S</span>ign in</a><p>/ </p><a href="../html/signup.html"> <span style="color: rgb(201, 1, 1)">S</span>ign up</a></div>`;
} else if(cU.length != 0 && cU[0].password != "nothinghere") {
    userDiv.innerHTML = 
    `<div id="user">
        <div class="area">
            <img src="${cU[0].avatar}" alt="" class="userAvt">
            <p>${cU[0].name}</p>
        </div>
        <div class="drop" tabindex="0">
            <a href="../html/profile.html"><div><p>View Profile</p></div></a>
            <a href="../html/cart.html"><div><p>View Cart</p></div></a>
            <input type="button" value="Sign Out" onclick="signout()">
        </div>
    </div>`;
}

if(cU.length != 0 && cU[0].password == "nothinghere") {
    userDiv.innerHTML = 
    `<div id="user">
        <div class="area">
            <img src="${cU[0].avatar}" alt="" class="userAvt">
            <p>${cU[0].name}<i class="fa-solid fa-crown" style="color: aqua;"></i></i></p>
        </div>
        <div class="drop" tabindex="0">
            <a href="../html/profile.html"><div><p>View Profile</p></div></a>
            <a href="../html/cart.html"><div><p>View Cart</p></div></a>
            <a href="../html/admin.html"><div><p>Admin</p></div></a>
            <input type="button" value="Sign Out" onclick="signout()">
        </div>
    </div>`;
}

function signout() {
    cU.length = 0;
    localStorage.setItem("cUser", JSON.stringify(cU));
    location.href = "../html/index.html";
}