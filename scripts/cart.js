const cUr = JSON.parse(localStorage.getItem("cUser"));

if(cUr.length == 0) {
    location.href = "../html/signin.html";
}