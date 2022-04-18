var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");
var step4 = document.getElementById("step4");
var step5 = document.getElementById("step5");
var step6 = document.getElementById("step6");

var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var next3 = document.getElementById("next3");
var next4 = document.getElementById("next4");

var mail = document.getElementById("mail");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");

var alphaNumericFormat = /([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,5})?$/;
var alphaFormat = /^[a-zA-Z ]+$/;

var pageOneCheck1 = 0;
var pageOneCheck2 = 0;
var pageOneCheck3 = 0;
var pageOneCheck4 = 0;
var pageOneCheck5 = 0;

function validateEmail() {

    if (!mail.value.length) {
        document.getElementById("mailerror").innerHTML = "This field is neccessary";
        document.getElementById("mail").style.border = "2px solid red";
        pageOneCheck1 = 0;
        return false;
    }
    else if (alphaNumericFormat.test(mail.value) == false) {
        document.getElementById("mailerror").innerHTML = "Invalid mailId";
        document.getElementById("mail").style.border = "2px solid red";
        pageOneCheck1 = 0;
        return false;
    }
    else if (alphaNumericFormat.test(mail.value)) {
        document.getElementById("mailerror").innerHTML = " ";
        document.getElementById("mail").style.border = "2px solid green";
        pageOneCheck1 = 1;

    }
}
function validateFname() {

    if (!fname.value.length) {
        document.getElementById("fname").style.border = "2px solid red";
        document.getElementById("fnameerror").innerHTML = "This field is neccessary";
        pageOneCheck2 = 0;

        return false;
    }
    else if (alphaFormat.test(fname.value) == false) { overflow: hidden;
        return false;
    }
    else if (fname.value.length < 2) {
        document.getElementById("fname").style.border = "2px solid red";
        document.getElementById("fnameerror").innerHTML = "First Name cannot be too short";
        pageOneCheck2 = 0;
        return false;
    }
    else {
        document.getElementById("fnameerror").innerHTML = " ";
        document.getElementById("fname").style.border = "2px solid green";
        pageOneCheck2 = 1;

    }
}

function validateLname() {

    if (lname.value.length == 0) {
        document.getElementById("lnameerror").innerHTML = " ";
        document.getElementById("lname").style.border = "2px solid green";
        pageOneCheck3 = 1;
    }
    else if (alphaFormat.test(lname.value) == false) {
        document.getElementById("lnameerror").innerHTML = "Last Name must be only alphabets ";
        document.getElementById("lname").style.border = "2px solid red";
        pageOneCheck3 = 0;
        return false;
    }
    else {
        document.getElementById("lnameerror").innerHTML = " ";
        document.getElementById("lname").style.border = "2px solid green";
        pageOneCheck3 = 1;

    }
}
var alphaNumericFormat1= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
function validatePsw() {
    if (!password.value.length) {
        document.getElementById("password").style.border = "2px solid red";
        document.getElementById("pswerror").innerHTML = "This field is neccessary";
        pageOneCheck4 = 0;

        return false;
    }
    else if(alphaNumericFormat1.test(password.value) == false){
        document.getElementById("pswerror").innerHTML = "Password must contain one numeric value,one uppercase letter and one lowercase letter";
        document.getElementById("password").style.border = "2px solid red";
        pageOneCheck3 = 0;

        return false;
    }
    else{
        document.getElementById("pswerror").innerHTML = " ";
        document.getElementById("password").style.border = "2px solid green";
        pageOneCheck4 = 1;
    }
}
function validateCpsw() {
    if (!confirmPassword.value.length) {
        document.getElementById("confirmPassword").style.border = "2px solid red";
        document.getElementById("cpswerror").innerHTML = "Please Re-Enter the password";
        pageOneCheck5 = 0;
        return false;
    }
    else if (password.value != confirmPassword.value) {
        document.getElementById("cpswerror").innerHTML = "Passwords did not match";
        document.getElementById("confirmPassword").style.border = "2px solid red";
        pageOneCheck5 = 0;
        return false;
    }
    else {
        document.getElementById("cpswerror").innerHTML = " ";
        document.getElementById("confirmPassword").style.border = "2px solid green";
        pageOneCheck5 = 1;
    }
}
function Page1() {
    if(pageOneCheck1==1 && pageOneCheck2==1 && pageOneCheck3==1 && pageOneCheck4==1 && pageOneCheck5==1){
    next1.onclick = function () {
        step1.style.left = "-450px"; 
        step2.style.left = "40px";
    }
    }
    else{
        alert("Please fill all the required details to move to the next step");
    }
}
var dob = document.getElementById("dob");
var phoneNo = document.getElementById("phoneNo");
var getValue = document.getElementById('state');
var numericFormat = /^[6-9]\d{9}$/;
var pageTwoCheck1 = 0;
var pageTwoCheck2 = 0;
var pageTwoCheck3 = 0;

function validateAge() {
    if (!dob.value.length) {
        document.getElementById("age").innerHTML = "This field is necessary";
        document.getElementById("dob").style.border = "2px solid red";
        pageTwoCheck1 = 0;
    }
    else if (calculateAge() >= 18 && calculateAge() <= 60) {
        document.getElementById("age").innerHTML = "<span style='color: green;'>Your age is " + calculateAge() + " .You are eligible</span>";
        document.getElementById("dob").style.border = "2px solid green";
        pageTwoCheck1 = 1;
    }
    else if (calculateAge() < 18 && calculateAge() >= 0) {
        document.getElementById("age").innerHTML = "Your age is " + calculateAge() + ".You are not eligible";
        document.getElementById("dob").style.border = "2px solid red";
        pageTwoCheck1 = 0;
    }
    else if (calculateAge() < 0) {
        document.getElementById("age").innerHTML = "Future dates are not accepted.";
        document.getElementById("dob").style.border = "2px solid red";
        pageTwoCheck1 = 0;
    }
    else if (calculateAge() > 60) {
        document.getElementById("age").innerHTML = "Sorry you are not eligible."
        document.getElementById("dob").style.border = "2px solid red";
        pageTwoCheck1 = 0;
    }
}

function calculateAge() {
    const birthDay = document.getElementById("dob").value;
    const birthDate = new Date(birthDay);
    const birth_date = birthDate.getDate();
    const birth_month = (birthDate.getMonth()) + 1;
    const birth_year = birthDate.getFullYear();

    const today_day = new Date();
    const today_date = today_day.getDate();
    const today_month = (today_day.getMonth()) + 1;
    const today_year = today_day.getFullYear();

    var calculatedAge = 0;

    if (today_month > birth_month) {
        calculatedAge = today_year - birth_year;
    }
    else if (today_month == birth_month) {
        if (today_date >= birth_date)
            calculatedAge = today_year - birth_year;
        else calculatedAge = today_year - birth_year - 1;
    }
    else calculatedAge = today_year - birth_year - 1;
    return calculatedAge;
}

function validateState() {
    if (!getValue.value.length) {
        alert("Please choose your state");
        pageTwoCheck2 = 0;
        return false;
    }
    else {
        pageTwoCheck2 = 1;
    }
}

function validatePhoneNo() {
    if (!phoneNo.value.length) {
        document.getElementById("phoneErr").innerHTML = "This field is neccessary";
        document.getElementById("phoneNo").style.border = "2px solid red";
        pageTwoCheck3 = 0;
        return false;
    }
    else if (phoneNo.value.length < 10) {
        document.getElementById("phoneErr").innerHTML = "Please ensure the given phone number is in 10 digit ";
        document.getElementById("phoneNo").style.border = "2px solid red";
        pageTwoCheck3 = 0;
        return false;
    }
    else if (numericFormat.test(phoneNo.value) == false) {
        document.getElementById("phoneErr").innerHTML = "Invalid Phone number";
        document.getElementById("phoneNo").style.border = "2px solid red";
        pageTwoCheck3 = 0;
        return false;
    }
    else if (numericFormat.test(phoneNo.value)) {
        document.getElementById("phoneErr").innerHTML = " ";
        document.getElementById("phoneNo").style.border = "2px solid green";
        pageTwoCheck3 = 1;
    }
}

function Page2() {
    if(pageTwoCheck1 == 1 && pageTwoCheck2 == 1 && pageTwoCheck3 == 1){
    next2.onclick = function () {
        step2.style.left = "-450px";
        step3.style.left = "40px";
    }
     }
    else if(pageTwoCheck2==0)   
    {
        alert("Please choose your state");
    } 
    else{
        alert("Please fill all the required details to move to the next step");
    }
}
var grade = document.getElementById('grade');
var passoutyr = document.getElementById('passoutyr');
var pageFourCheck1 = 0;
var pageFourCheck2 = 0;
var passoutyrFormat =  /^(0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;

function validateGrade()
{
    if(!grade.value.length){
        alert("Please choose your grade");
        pageFourCheck1 = 0;
    }
    else{
        pageFourCheck1 = 1;
    }
}

function validatepassoutyr() {
    if(!passoutyr.value.length){
        document.getElementById("passoutyrErr").innerHTML = "This fiels is necessary";
        document.getElementById("passoutyr").style.border = "2px solid red";
        pageFourCheck2 = 0;
    }
    else if (passoutyrFormat.test(passoutyr.value) == false) {
        document.getElementById("passoutyrErr").innerHTML = "Invalid date format";
        document.getElementById("passoutyr").style.border = "2px solid red";
        pageFourCheck2 = 0;
    }
    else{
        document.getElementById("passoutyrErr").innerHTML = " ";
        document.getElementById("passoutyr").style.border = "2px solid green";
        pageFourCheck2 = 1;
    }
}
function Page3() {
    if(pageFourCheck1 == 1 && pageFourCheck2 == 1){
        next4.onclick = function () {
            step4.style.left = "-450px";
            step5.style.left = "40px";
        }
    }
    else if(pageFourCheck1==0)   
    {
        alert("Please choose your grade");
    } 
    else{
        alert("Please fill all the required details to move to the next step");
    }
}
var dept = document.getElementById('dept');
var checkBox = document.getElementById('check');

function Page4(){
    
    if(checkBox.checked==false)
    {
       // console.log("lasta1");
        alert("Please accept the terms and condition");
    }
    else{
        submit.onclick = function () {
        console.log("lasta2");

            step5.style.left = "-450px";
            step6.style.left = "40px";
        }
    }

}
var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");
var back3 = document.getElementById("back3");
var back4 = document.getElementById("back4");

back1.onclick = function () {
    step1.style.left = "40px";
    step2.style.left = "450px";
}

back2.onclick = function () {
    step2.style.left = "40px";
    step3.style.left = "450px";  
}

back3.onclick = function () {
    step3.style.left = "40px";
    step4.style.left = "450px";   
}
next3.onclick = function () {
    step3.style.left = "-450px";
    step4.style.left = "40px";
}

back4.onclick = function () {
    step4.style.left = "40px";
    step5.style.left = "450px";
    progress.style.width = "288px";
}