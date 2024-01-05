const user = JSON.parse(localStorage.getItem("user"));
// console.log("user: ", user[0].gmail);

const curUser = JSON.parse(localStorage.getItem("cUser"));

// const iGmail = document.querySelector("#iGmail");
const iName = document.querySelector("#iName");
const iPassword = document.querySelector("#iPassword");
const uUsername = document.querySelector("#uUsername");
const uGmail = document.querySelector("#uGmail");
const uPassword = document.querySelector("#uPassword");
const uCfPassword = document.querySelector("#uCfPassword");
const iS = document.querySelector("#iS");
const uS = document.querySelector("#uS");

/////////////////////////
//Sign In

function signin() {
    for(let i = 0; i < user.length; i++) {
        if(iName.value == user[i].name && iPassword.value == user[i].password) {
            // console.log(user[i].gmail);
            curUser.length = 0;
            console.log("curUser: ", curUser);
            curUser.push(
                {
                    name: user[i].name,
                    gmail: user[i].gmail,
                    password: user[i].password,
                    avatar: user[i].avatar,
                }
            );
            localStorage.setItem("cUser", JSON.stringify(curUser));
            // setTimeout(1000);
            location.href = "../html/index.html";
        }
        // } else if(iGmail.value != user[i].gmail || iPassword.value != user[i].password) {
        //     console.log("no");
        // }
    }
}

function signup() {
    // for(let i = 0; i < user.length; i++) {
        
    // }

    if(uPassword.value == uCfPassword.value) {
        user.push(
            {
                name: uUsername.value,
                gmail: uGmail.value,
                password: uPassword.value,
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOJ1Tp4uMgO83lKjiK5dXxoR_uKL2rswaMDprr9TeFQ&s",
            }
        );
        curUser.push(
            {
                name: uUsername.value,
                gmail: uGmail.value,
                password: uPassword.value,
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOJ1Tp4uMgO83lKjiK5dXxoR_uKL2rswaMDprr9TeFQ&s",
            }
        );
        localStorage.setItem("cUser", JSON.stringify(curUser));
        localStorage.setItem("user", JSON.stringify(user));
        location.href = "../html/index.html";
    } else {
        console.log("Not match");
    }
}