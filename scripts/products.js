const proDiv = document.querySelector("#t-products");
const st_pro = JSON.parse(localStorage.getItem("products"));

let star;

for(let key of st_pro) {
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
    proDiv.innerHTML += `
        <div class="t-ps" onclick="openPro(${key.id})">
            <img src="${key.image}" alt="Not Found">
            <div class="i4">
                <h3>Name: ${key.name}</h3>
                <h3>Cost: ${key.cost}000đ</h3>
                <h3>Star: ${star}</h3>
            </div>
        </div>
    `;
}