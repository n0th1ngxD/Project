const informationDiv = document.querySelector("#information");

const productsLS = JSON.parse(localStorage.getItem("products"));
const usersLS = JSON.parse(localStorage.getItem("user"));

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
    <h3>4 Sold Products</h3>
</div>
`;