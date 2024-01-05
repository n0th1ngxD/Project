const proData = JSON.parse(localStorage.getItem("products"));

function openPro(proId) {
    console.log(proId);
    localStorage.setItem("opening", JSON.stringify(proId));
    location.href = "../html/products.html";
}