let password = document.getElementById("password");
let strength = document.getElementById("strength");
let message = document.getElementById("message");

let upper = document.getElementById("upper");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");
let length = document.getElementById("length");

let generateBtn = document.getElementById("generateBtn");
let eye = document.getElementById("eye");

password.addEventListener("input", checkStrength);

function checkStrength(){

let pass = password.value;
let score = 0;

if(/[A-Z]/.test(pass)){
upper.classList.add("valid");
score++;
}else{
upper.classList.remove("valid");
}

if(/[0-9]/.test(pass)){
number.classList.add("valid");
score++;
}else{
number.classList.remove("valid");
}

if(/[!@#$%^&*]/.test(pass)){
symbol.classList.add("valid");
score++;
}else{
symbol.classList.remove("valid");
}

if(pass.length >= 8){
length.classList.add("valid");
score++;
}else{
length.classList.remove("valid");
}

if(score <= 1){
strength.style.width="30%";
strength.style.background="red";
message.innerText="Weak Password";
}
else if(score <= 3){
strength.style.width="60%";
strength.style.background="orange";
message.innerText="Medium Password";
}
else{
strength.style.width="100%";
strength.style.background="green";
message.innerText="Strong Password";
}

}


// GENERATE PASSWORD

generateBtn.addEventListener("click", function(){

let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

let newPassword="";

for(let i=0;i<12;i++){

newPassword+=chars[Math.floor(Math.random()*chars.length)];

}

password.value=newPassword;

checkStrength();

});


// SHOW / HIDE PASSWORD

eye.addEventListener("click", function(){

if(password.type === "password"){
password.type = "text";
}
else{
password.type = "password";
}

});