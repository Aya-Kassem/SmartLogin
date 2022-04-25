// VARIABLES............
var signInBtn = document.querySelector("#signin");
var mailInput = document.querySelector("#signinmailInput");
var passInput = document.querySelector("#signinpassInput");

// GET DATA FROM LOCAL STORAGE........
if(localStorage.getItem("loginInfo") != null){
    var localData = JSON.parse(localStorage.getItem("loginInfo"));
    mailInput.value = localData[0].mail;
    passInput.value = localData[0].pass;
}

// SIGN IN FUNCTION............
signInBtn.addEventListener("click", signInFun);
function signInFun(){
    var nameValue;
    var mailValue = mailInput.value;
    var passValue = passInput.value;

    if (mailValue == "" || passValue == ""){
        document.getElementById("incorrect").innerHTML = "All inputs are required";
        document.getElementById("incorrect").style.display = "block";
    }
    else
    {
        document.getElementById("incorrect").style.display = "none";
        for(var i = 0; i < localData.length; i++){
            if(  mailValue != localData[i].mail || passValue != localData[i].pass){
                document.getElementById("incorrect").innerHTML = "incorrect email or password";
                document.getElementById("incorrect").style.display = "block";
            }
            else if(mailValue == localData[i].mail && passValue == localData[i].pass){
                document.getElementById("incorrect").style.display = "none";
                nameValue = localData[i].name;
                signInBtn.setAttribute('href',`main.html?userName=${nameValue}`)
            }
        }
    }
}


// WELCOME PAGE.........
function welcomeUser(){
    var url = new URLSearchParams(window.location.search); 
    var getIUserName = url.get('userName');
    document.getElementById("name").innerHTML = getIUserName;
}






