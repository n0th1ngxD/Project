
const st_pro = JSON.parse(localStorage.getItem("products"));
const searchButton = document.querySelector("#searchBtn");
let proV = "";

let star = ``;

let isShowed = false;
check();



function check() {
    if(isShowed == false) {
    document.querySelector(".filter-option").style.opacity = 0;
    document.querySelector(".filter-option").style.visibility = "hidden";
    }
    if(isShowed == true) {
        document.querySelector(".filter-option").style.opacity = 1;
        document.querySelector(".filter-option").style.visibility = "visible";
    }
}

function showHideFilter() {
    if(isShowed == false) {
        isShowed = true;
        // console.log("showed");
        // console.log("isShowed: ", isShowed);
        check();
    } else if(isShowed == true) {
        isShowed = false;
        check();
    }
}

const filterCost = document.querySelector("#cost");
const filterCategories = document.querySelector("#categories");
const filterStars = document.querySelector("#stars");

document.addEventListener("input", function(event) {
    if(event.target.id !== "cost") return;

    console.log(document.querySelector("#cost").value);

    for(let j = 0; j < st_pro.length; j++) {
        if(document.querySelector("#cost").value == "allCost" && document.querySelector("#categories").value == st_pro[j].type && document.querySelector("#stars").value == st_pro[j].stars) {
            proDiv.innerHTML = ``;
            proDiv.innerHTML += `
            <div class="t-ps" onclick="openPro(${st_pro[j].id})">
                <img src="${st_pro[j].image}" alt="Not Found">
                <div class="i4">
                    <h3>Name: ${st_pro[j].name}</h3>
                    <h3>Cost: ${st_pro[j].cost}000đ</h3>
                    <h3>Star: ${star}</h3>
                </div>
            </div>
            `;
            star = ``;
            console.log(".");
        } else {
            console.log("..");
        }
    }

}, false);

// searchButton.addEventListener("click", function() {
//     // console.log("asdasdkl");
//     // console.log(event.target.value);
//     // console.log("proDiv: ", proDiv);
//     proDiv = ``;
//     search();
// });

let storeItems = "";
function search() {
    
    const proDiv = document.querySelector("#t-products");
    const searchBox = document.querySelector("#searchPro").value.toLowerCase();

    proV = ``;
    // proDiv.innerHTML = proV;
    
    const results = st_pro.filter(function(item) {
        return (item.name.toLowerCase().includes(searchBox))
    })
    
    console.log(results);

    if(results.length != st_pro.length) {
        // proV = ``;
        // proDiv.innerHTML = proV;
        // console.log("proV: ", proV);

        // console.log("> 0");
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
            // console.log("2proV: ", proV);
            // console.log("2proDiv: ", proDiv);
            // proDiv = storeItems;
        }
        proV = storeItems;
        storeItems = "";
        proDiv.innerHTML = proV;
    } else {
        if(results.length == st_pro.length) {
            // console.log("true");
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
            // console.log("done");
            proV = storeItems;
            storeItems = "";
            proDiv.innerHTML = proV;
        }
    }
}

search();