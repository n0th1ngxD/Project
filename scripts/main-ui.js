const cU = JSON.parse(localStorage.getItem("cUser"));
console.log(cU);

// Nav

const navDiv = document.querySelector("#nav");
navDiv.innerHTML = `
<a href="./index.html"><i class="fa-solid fa-house"></i><span style="color: rgb(201, 0, 0)">H</span>ome</a>
<a href="./store.html"><i class="fa-solid fa-bag-shopping"></i><span style="color: rgb(201, 1, 1)">S</span>tore</a>
<a href="./cart.html"><i class="fa-solid fa-cart-shopping"></i><span style="color: rgb(201, 1, 1)">C</span>art</a>
`;

// user

const userDiv = document.querySelector("#ua");
if(cU.length == 0) {
    console.log("no");
    userDiv.innerHTML = `<div id="nUser"><a href="../html/signin.html"><i class="fa-solid fa-right-to-bracket"></i> <span style="color: rgb(201, 1, 1)">S</span>ign in</a><p>/ </p><a href="../html/signup.html"> <i class="fa-solid fa-user-plus"></i> <span style="color: rgb(201, 1, 1)">S</span>ign up</a></div>`;
} else if(cU.length != 0 && cU[0].password != "nothinghere") {
    userDiv.innerHTML = 
    `<div id="user">
        <div class="area">
            <img src="${cU[0].avatar}" alt="" class="userAvt">
            <p>${cU[0].name}</p>
        </div>
        <div class="drop" tabindex="0">
            <a href="../html/profile.html"><div><p><i class="fa-solid fa-user"></i> View Profile</p></div></a>
            <a href="../html/cart.html"><div><p><i class="fa-solid fa-cart-shopping"></i> View Cart</p></div></a>
            <button onclick="signout()"><i class="fa-solid fa-right-from-bracket"></i> Sign Out</button>
        </div>
    </div>`;
}

if(cU.length != 0) {
    if(cU[0].role == "owner" || cU[0].role == "admin") {
        console.log("owner");
        userDiv.innerHTML = 
        `<div id="user">
            <div class="area">
                <img src="${cU[0].avatar}" alt="" class="userAvt">
                <p>${cU[0].name}<i class="fa-solid fa-crown fa-fade" style="color: aqua;"></i></p>
            </div>
            <div class="drop" tabindex="0">
                <a href="../html/profile.html"><div><p><i class="fa-solid fa-user"></i> View Profile</p></div></a>
                <a href="../html/cart.html"><div><p><i class="fa-solid fa-cart-shopping"></i> View Cart</p></div></a>
                <a href="../html/admin.html"><div><p><i class="fa-solid fa-crown fa-fade" style="color: aqua;"></i> Admin</p></div></a>
                
                <button onclick="signout()"><i class="fa-solid fa-right-from-bracket"></i> Sign Out</button>
            </div>
        </div>`;
    }
}

function signout() {
    cU.length = 0;
    localStorage.setItem("cUser", JSON.stringify(cU));
    location.href = "../html/index.html";
}

const footerDiv = document.querySelector("#footer");

footerDiv.innerHTML = `
<div class="upper-footer">
    <div class="social">
        <div class="f-title f-social">
            <p>Social</p>
        </div>
        <div class="social-infor">
            <div class="facebook">
                <i class="fa-brands fa-facebook fa-xl"></i>
                <a href="https://facebook.com"><span style="color: #0866ff;">F</span>acebook</a>
            </div>
            <div class="twitter">
                <i class="fa-brands fa-twitter fa-xl"></i>
                <a href="https://twitter.com/"><span style="color: #1d9bf0">T</span>witter</a>
            </div>
            <div class="instagram">
                <i class="fa-brands fa-instagram fa-xl"></i>
                <a href="https://www.instagram.com/"><span style="color: #cb2052;">I</span>nstagram</a>
            </div>
        </div>
    </div>
    <div class="about">
        <div class="f-title f-about">About</div>
        <div class="about-infor">
            <div class="pos">
                <i class="fa-solid fa-location-dot fa-xl"></i>
                <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div class="phone">
                <i class="fa-solid fa-phone fa-xl"></i>
                <p>+48 1234567890</p>
            </div>
            <div class="mail">
                <i class="fa-solid fa-paper-plane fa-xl"></i>
                <p>nothing@gmail.com</p>
            </div>
            <form>
                <div class="subscribe">
                    <input type="text" id="s-mail" class="myTextInput" placeholder="Email">
                    <button type="submit" onclick="thanks()" class="myBtn"><i class="fa-solid fa-paper-plane fa-xl"></i></button>
                </div>
            </form>
        </div>
    </div>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25191.89092021054!2d-122.16708444670964!3d37.884001561129516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808562f5e5cb3379%3A0xea804552d230d382!2sMountain%20View%2C%20Lafayette%2C%20California%2094549%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1704374379403!5m2!1svi!2s"
        width="580" height="300" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
<div class="lower-footer">
    <p>© 2024 All Rights Reserved</p>
    <img src="https://ecommerce-vanillajs-mindx.netlify.app/assets/payment-option.png" alt="PayMethod...">
</div>
`;

const home = document.querySelector(".home");

home.innerHTML += `
    <button onclick="topFunction()" id="backtotop" title="Go to top" class="myBtn"><i class="fa-solid fa-arrow-up fa-bounce"></i></button>
`

const mailIp = document.querySelector("#s-mail");

function thanks() {
    alert(`Sent to ${mailIp.value}! Thanks you!`);
}

let mybutton = document.getElementById("backtotop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}