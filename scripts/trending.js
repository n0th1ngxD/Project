const pro = JSON.parse(localStorage.getItem("products"));
const trendingDiv = document.querySelector("#t-products");

for(let key of pro) {
    trendingDiv.innerHTML += `
            <div class="t-ps" onclick="openPro()">
                <a href=""><img src="${key.image}" alt="Not Found"></a>
                <div class="i4">
                    <h3><a href="">Name: ${key.name}</a></h3>
                    <h3>Cost: ${key.cost}</h3>
                    <h3>Star: ${key.stars}</h3>
                </div>
            </div>
    `;
}

// function out() {
//     console.log("aa");
// }