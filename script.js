var userName = document.getElementById('username');

var email = document.getElementById('email');

var age = document.getElementById('ageInput');

var genders = document.querySelectorAll("input[type='radio']");

var hObbies = document.querySelectorAll("input[type='checkbox']");

var buTton = document.getElementById('submit');

buTton.addEventListener("click", info);

let gender;
let hobby= [];


function info(){
    hobby = [];

    for (let i =0; i < genders.length; i++){
        if (genders[i].checked){
            gender = genders[i].value;
        }
    }
    console.log(gender);

    for (let i = 0; i < hObbies.length; i++) {
        if (hObbies[i].checked) {
            hobby.push(" " + hObbies[i].value);
        }
    }
    console.log(hObbies);

    outPut.innerHTML = userName.value + " " + email.value + " " + age.value + " " + genders.value + " " + hObbies.value + " " + buTton.value;
}
var outPut = document.getElementById('output');
//console.log(outPut);


const element = document.getElementById('mybtn');