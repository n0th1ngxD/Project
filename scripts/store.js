const st_pro = JSON.parse(localStorage.getItem("products"));
const searchButton = document.querySelector("#searchBtn");
let proV = "";

let star = ``;

let storeItems = "";
function search() {
    
    const proDiv = document.querySelector("#t-products");
    const searchBox = document.querySelector("#searchPro").value.toLowerCase();

    proV = ``;
    const results = st_pro.filter(function(item) {
        return (item.name.toLowerCase().includes(searchBox))
    })
    
    console.log(results);

    if(results.length != st_pro.length) {
        for(let key of results) {
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
            storeItems += `
            <div class="t-ps" onclick="openPro(${key.id})">
                <img src="${key.image}" alt="Not Found">
                <div class="i4">
                <h3>Name: ${key.name}</h3>
                <h3>Cost: ${key.cost}000đ</h3>
                <h3>Star: ${star}</h3>
                </div>
            </div>
            `;
            star = ``;
        }
        proV = storeItems;
        storeItems = "";
        proDiv.innerHTML = proV;
    } else {
        if(results.length == st_pro.length) {
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
                storeItems += `
                <div class="t-ps" onclick="openPro(${key.id})">
                    <img src="${key.image}" alt="Not Found">
                    <div class="i4">
                        <h3>Name: ${key.name}</h3>
                        <h3>Cost: ${key.cost}000đ</h3>
                        <h3>Star: ${star}</h3>
                    </div>
                </div>
                `;
                star = ``;
            }
            proV = storeItems;
            storeItems = "";
            proDiv.innerHTML = proV;
        }
    }
}

search();