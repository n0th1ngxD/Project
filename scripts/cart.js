const cUr = JSON.parse(localStorage.getItem("cUser"));
let uCart = JSON.parse(localStorage.getItem("cart"));
const aPro = JSON.parse(localStorage.getItem("products"));
let soldPro = JSON.parse(localStorage.getItem("soldProducts"));

if(cUr.length == 0) {
    location.href = "../html/signin.html";
}

let star;

let proQuan;

let subtotal = 0;

function displayCart() {
    const cartDiv = document.querySelector("#cart-products");
    const totalDiv = document.querySelector("#totalDiv");
    const main = document.querySelector(".main");
    console.log(uCart);
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
                    <span>Đánh giá: ${star}</span>
                    <div class="after">
                        <p>Số lượng: ${key.quantity}</p>
                    <button onclick="removeProductInCart(${key.id})" class="remove">Remove</button>
                    </div>
                </div>
            </div>
            `;
            subtotal = subtotal + key.cost*key.quantity;
        }

    if(uCart.length != 0) {
        totalDiv.innerHTML = `
        <div class="lower-cart">
            <button onclick="clearCart()" class="clear-cart myBtn"><i class="fa-solid fa-x"></i> Clear Cart</button>
            <div class="total">
                <div class="t-cost">
                    <p>Subtotal: ${subtotal}000đ</p>
                    <p>Shipping: 13000đ</p>
                    <p>Total: ${subtotal + 13}000đ</p>
                </div>
                <button class="checkout myBtn" onclick="checkout()">Checkout <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
        `;
    } else {
        totalDiv.innerHTML = ``;
        main.innerHTML += `<p style="margin-top: 20px">Your cart is empty</p>`;
    }
}


function clearCart() {
    uCart = [];
    localStorage.setItem("cart", JSON.stringify(uCart));
    displayCart();
}

function checkout() {
    for(let key of uCart) {
        soldPro += (key.quantity);
    }
    alert("Checked out: " + subtotal + 13 + "đ");
    uCart = [];
    localStorage.setItem("cart", JSON.stringify(uCart));
    localStorage.setItem("soldProducts", JSON.stringify(soldPro));
    displayCart();
}

let removeId;

function removeObjectInArrayWithId(list, id) {
    const productId = list.findIndex((obj) => obj.id === id);

    if(productId > -1) {
        list.splice(productId, 1);
    }

    return list;
}

function removeProductInCart(proId) {
    removeObjectInArrayWithId(uCart, proId);
    localStorage.setItem("cart", JSON.stringify(uCart));
    displayCart();

    console.log("Removed!");
}

displayCart();