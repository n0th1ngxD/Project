const productDiv = document.querySelector("#product");
const openingPro = JSON.parse(localStorage.getItem("opening"));
const proData = JSON.parse(localStorage.getItem("products"));
const uCart = JSON.parse(localStorage.getItem("cart"));

let star;

for(let i = 0; i < proData.length; i++) {
    if(proData[i].id == openingPro) {
        if(proData[i].stars == 1) {
            star = `<i class="fa-solid fa-star" style="color: #f7bc00"></i>
            <i class="fa-regular fa-star" style="color: #f7bc00"></i>
            <i class="fa-regular fa-star" style="color: #f7bc00"></i>
            <i class="fa-regular fa-star" style="color: #f7bc00"></i>
            <i class="fa-regular fa-star" style="color: #f7bc00"></i>`
        } else if(proData[i].stars == 2) {
            star = `<i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-regular fa-star" style="color: #f7bc00"></i>
                    <i class="fa-regular fa-star" style="color: #f7bc00"></i>
                    <i class="fa-regular fa-star" style="color: #f7bc00"></i>`
        } else if(proData[i].stars == 3) {
            star = `<i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-regular fa-star" style="color: #f7bc00"></i>
                    <i class="fa-regular fa-star" style="color: #f7bc00"></i>`
        } else if(proData[i].stars == 4) {
            star = `<i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-regular fa-star" style="color: #f7bc00"></i>`
        } else if(proData[i].stars == 5) {
            star = `<i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-solid fa-star" style="color: #f7bc00"></i>
                    <i class="fa-solid fa-star" style="color: #f7bc00"></i>`
        }
        productDiv.innerHTML = `
        <img src="${proData[i].image}" alt="Not Found">
        <div class="p-infor">
            <h3>${proData[i].name}</h3>
            <h3>${proData[i].cost}</h3>
            <div class="des">
                <p>${proData[i].description}</p>
            </div>
            <h3>Stars: ${star}</h3>

            <input type="number" placeholder="Số lượng" id="cartNb"/>
            <button onclick="addToCart(${proData[i].id})"><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
        `;
    }
}

const cartQuantity = document.querySelector("#cartNb");

let check = 0;
let changeId;

function addToCart(cartId) {
    // uCart.push(
    //     {
    //         id: cartId,
    //         quantity: cartQuantity.value,
    //     },
    // );
    // localStorage.setItem("cart", JSON.stringify(uCart));
    for(let i = 0; i < uCart.length; i++) {
        if(cartId != uCart[i].id) {
            check += 1;
        }
    }
    if(check == uCart.length) {
        uCart.push(
            {
                id: cartId,
                quantity: cartQuantity.value,
            },
        );
        localStorage.setItem("cart", JSON.stringify(uCart));
    } else {
        changeId = uCart.findIndex((obj => obj.id == cartId));
        uCart[changeId].quantity = cartQuantity.value;
        localStorage.setItem("cart", JSON.stringify(uCart));
    }
}