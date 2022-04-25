// VARIABLES .........
var signUpBtn = document.querySelector("#signup");
var nameInput = document.querySelector("#nameInput");
var mailInput = document.querySelector("#mailInput");
var passInput = document.querySelector("#passInput");


var done = document.getElementById("success");


var allData = [];
if(localStorage.getItem("loginInfo") != null){
    allData = JSON.parse(localStorage.getItem("loginInfo"));
}


// SAVE USER DATA FUNCTION ............
signUpBtn.addEventListener("click", addUserData);
function addUserData(){

    var nameValue = nameInput.value;
    var mailValue = mailInput.value;
    var passValue = passInput.value;

    if (nameValue == "" || mailValue == "" || passValue == ""){
        document.getElementById("alert").innerHTML = "All inputs are required";
        document.getElementById("alert").style.display = "block";
        done.style.display = "none";
    }
    else{
        
        if(checkUserMail() != true){
            console.log("safe to go")
            document.getElementById("alert").style.display = "none";
            done.style.display = "block";


            var userData = {name: nameValue, mail: mailValue, pass: passValue};
            allData.push(userData);
            console.log(allData);
            localStorage.setItem("loginInfo",JSON.stringify(allData));
        }
    }

}


// CHECKING IF EMAIL ALREADY EXIST.........
function checkUserMail(){
    done.style.display = "none";

    for(var i = 0; i < allData.length; i++){
        if(mailInput.value == allData[i].mail){
            document.getElementById("alert").innerHTML = "Email already Exists";
            document.getElementById("alert").style.display = "block";
            return true;
        }
    }
}







