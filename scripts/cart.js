const cUr = JSON.parse(localStorage.getItem("cUser"));
const uCart = JSON.parse(localStorage.getItem("cart"));
const cartDiv = document.querySelector("#container");
const aPro = JSON.parse(localStorage.getItem("products"));

if(cUr.length == 0) {
    location.href = "../html/signin.html";
}

let star;

let proQuan;

function displayCart() {
    for(let key of uCart) {
        proQuan = key.quantity;
        if(key.stars == 1) {
            star = `<i class="fa-solid fa-star" style="color: #f7bc00"></i>
            <i class="fa-regular fa-star" style="color: #f7bc00"></i>
            <i class="fa-regular fa-star" style="color: #f7bc00"></i>
            <i class="fa-regular fa-star" style="color: #f7bc00"></i>
            <i class="fa-regular fa-star" style="color: #f7bc00"></i>`
        } else if(key.stars == 2) {
            star = `<i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-regular fa-star" style="color: #f7bc00"></i>
                    <i class="fa-regular fa-star" style="color: #f7bc00"></i>
                    <i class="fa-regular fa-star" style="color: #f7bc00"></i>`
        } else if(key.stars == 3) {
            star = `<i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-regular fa-star" style="color: #f7bc00"></i>
                    <i class="fa-regular fa-star" style="color: #f7bc00"></i>`
        } else if(key.stars == 4) {
            star = `<i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-regular fa-star" style="color: #f7bc00"></i>`
        } else if(key.stars == 5) {
            star = `<i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-solid fa-star" style="color: #f7bc00"></i>`
        }
        cartDiv.innerHTML += `
            <div class="pro">
                <img src="${key.image}" alt="Bruh">
                <div class="c-infor">
                    <h3>${key.name}</h3>
                    <h3>${key.cost}</h3>
                    <span>${star}</span>
                    <div class="after">
                        <div class="quantity">
                            <button onclick="minus()">-</button>
                            <input type="number" id="quantt" value="${proQuan}">
                            <button onclick="add()">+</button>
                        </div>
                    <button onclick="removeFromCart(${key.id})" class="remove">Remove</button>
                    </div>
                </div>
            </div>
            `;
    }
}

// const quantt = document.querySelector("#quantt");

function minus() {
    proQuan -= 1;
    displayCart();
}

displayCart();