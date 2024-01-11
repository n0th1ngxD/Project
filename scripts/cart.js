const cUr = JSON.parse(localStorage.getItem("cUser"));
let uCart = JSON.parse(localStorage.getItem("cart"));
const cartDiv = document.querySelector("#container");
const aPro = JSON.parse(localStorage.getItem("products"));

if(cUr.length == 0) {
    location.href = "../html/signin.html";
}

let star;

let proQuan;

let subtotal = 0;

function displayCart() {
    cartDiv.innerHTML = "";
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
                    <h3>${key.cost}000đ</h3>
                    <span>${star}</span>
                    <div class="after">
                        <p>${key.quantity}</p>
                    <button onclick="removeProductInCart(${key.id})" class="remove">Remove</button>
                    </div>
                </div>
            </div>
            `;
            subtotal = subtotal + key.cost*key.quantity;
        }
    // console.log("subtotal: ", subtotal);

    if(uCart.length != 0) {
        cartDiv.innerHTML += `
        <button onclick="clearCart()" class="clear-cart myBtn"><i class="fa-solid fa-x"></i> Clear Cart</button>
        <div class="lower-cart">
            <div class="total">
                <div class="t-cost">
                    <p>Subtotal: ${subtotal}000đ</p>
                    <p>Shipping: 13đ</p>
                    <p>Total: ${subtotal + 13}000đ</p>
                </div>
                <button class="checkout myBtn" onclick="checkout()">Checkout <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
        `;
    } else {
        cartDiv.innerHTML += `Your cart is empty`;
    }
}


function clearCart() {
    uCart = [];
    localStorage.setItem("cart", JSON.stringify(uCart));
    displayCart();
}

function checkout() {
    alert("Checked out: " + subtotal + 13 + "đ");
    uCart = [];
    localStorage.setItem("cart", JSON.stringify(uCart));
    displayCart();
}

let removeId;

// let ar = [{a: "a"}, {b: "b"}, {c: "c"}];
// console.log("ar: ", ar);
// ar.findIndex((ar[0].a == "a"));
// console.log("ar: ", ar);

// function removeFromCart(key) {
//     uCart.splice(key, key);
//     localStorage.setItem("cart", JSON.stringify(uCart));
//     displayCart();

//     console.log("removed");
// }

function removeObjectInArrayWithId(list, id) {
    const productId = list.findIndex((obj) => obj.id === id);

    if(productId > -1) {
        list.splice(productId, 1);
    }

    return list;
}

const cAlert = document.querySelector('#alert');
const cDPAlert = document.querySelector('#DPalert');

function removeProductInCart(proId) {
    removeObjectInArrayWithId(uCart, proId);
    localStorage.setItem("cart", JSON.stringify(uCart));
    displayCart();

    cAlert.innerHTML = `Removed!`;
    cDPAlert.style.display = "unset";
    console.log("Removed!");
}

displayCart();