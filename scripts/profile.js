const us = document.querySelector(".us");

function displayProfile() {
    us.innerHTML = `
    <div class="img">
        <img src="${cU[0].avatar}" alt="Not Found" class="pavt">
    </div>
    <div class="uin4">
        <h4>Name: ${cU[0].name}</h4>
        <h4>Email: ${cU[0].gmail}</h4>
    </div>
    <a href="../html/changeProfile.html"><input type="button" value="Change Profile Information"></a>
    `;
}

displayProfile();