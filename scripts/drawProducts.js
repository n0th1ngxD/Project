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
        document.title = proData[i].name
        productDiv.innerHTML = `
        <img src="${proData[i].image}" alt="Not Found">
        <div class="p-infor">
            <h3>${proData[i].name}</h3>
            <h3>Cost: ${proData[i].cost}000đ</h3>
            <div class="des">
                <p>${proData[i].description}</p>
            </div>
            <h3>Stars: ${star}</h3>

            <input type="number" placeholder="Số lượng" id="cartNb" class="myTextInput"/>
            <button onclick="addToCart(${proData[i].id})" class="myBtn cartBtn"><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
        </div>
        `;
    }
}

const cartQuantity = document.querySelector("#cartNb");

let check = 0;
let check2 = 0;
let changeId = 0;

function addToCart(cartId) {
    console.log("cartId: ", cartId);

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
    check2 = check;
    check = 0;
    console.log("checked: ", check2);
    // prId = uCart.findIndex((obj => obj.id == cartId));
    if(check2 == uCart.length) {
        console.log("check: ", check);
        console.log("uCart: ", uCart.length);
        uCart.push(
            {
                name: proData[cartId].name,
                cost: proData[cartId].cost,
                stars: proData[cartId].stars,
                image: proData[cartId].image,
                id: cartId,
                quantity: Number(cartQuantity.value),
            },
        );
        console.log(`added id: ${cartId}`);
        localStorage.setItem("cart", JSON.stringify(uCart));
    } else {
        // changeId = uCart.findIndex((obj => obj.id == cartId));
        uCart[cartId].quantity = Number(cartQuantity.value);
        localStorage.setItem("cart", JSON.stringify(uCart));
        console.log(`changed id: ${cartId}!`);
    }
}