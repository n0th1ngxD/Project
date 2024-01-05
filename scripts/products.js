const proDiv = document.querySelector("#product");
const products = JSON.parse(localStorage.getItem("products"));

let star;

for(let key of products) {
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
    trendingDiv.innerHTML += `
        <div class="t-ps" onclick="openPro(${key.id})">
            <a href=""><img src="${key.image}" alt="Not Found"></a>
            <div class="i4">
                <h3><a href="">Name: ${key.name}</a></h3>
                <h3>Cost: ${key.cost}</h3>
                <h3>Star: ${star}</h3>
            </div>
        </div>
    `;
}