
var basic = document.getElementById("basic");
var others = document.getElementById("others");
var work = document.getElementById("work");
var education = document.getElementById("education");
var team = document.getElementById("team");
var final_step = document.getElementById("final_step");

var others_btn = document.getElementById("others_btn");
var work_btn = document.getElementById("work_btn");
var education_btn = document.getElementById("education_btn");
var team_btn = document.getElementById("team_btn");

var mail = document.getElementById("mail");
var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");
var first_name = document.getElementById("first_name");
var last_name = document.getElementById("last_name");

   //Basic step

var alphaNumericFormat = /([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,5})?$/;
var alphaFormat = /^[a-zA-Z ]+$/;

var pageOneCheck1 = 0;
var pageOneCheck2 = 0;
var pageOneCheck3 = 0;
var pageOneCheck4 = 0;
var pageOneCheck5 = 0;

function validateEmail() {

    if (!mail.value.length) {
        document.getElementById("mail_error").innerHTML = "This field is neccessary";
        document.getElementById("mail").style.border = "2px solid red";
        pageOneCheck1 = 0;
        return false;
    }
    else if (alphaNumericFormat.test(mail.value) == false) {
        document.getElementById("mail_error").innerHTML = "Invalid mailId";
        document.getElementById("mail").style.border = "2px solid red";
        pageOneCheck1 = 0;
        return false;
    }
    else if (alphaNumericFormat.test(mail.value)) {
        document.getElementById("mail_error").innerHTML = " ";
        document.getElementById("mail").style.border = "2px solid green";
        pageOneCheck1 = 1;

    }
}
function validateFirstName() {

    if (!first_name.value.length) {
        document.getElementById("first_name").style.border = "2px solid red";
        document.getElementById("firstname_error").innerHTML = "This field is neccessary";
        pageOneCheck2 = 0;

        return false;
    }
    else if (alphaFormat.test(first_name.value) == false) {
        return false;
    }
    else if (first_name.value.length < 2) {
        document.getElementById("first_name").style.border = "2px solid red";
        document.getElementById("firstname_error").innerHTML = "First Name cannot be too short";
        pageOneCheck2 = 0;
        return false;
    }
    else {
        document.getElementById("firstname_error").innerHTML = " ";
        document.getElementById("first_name").style.border = "2px solid green";
        pageOneCheck2 = 1;

    }
}

function validateLastName() {

    if (last_name.value.length == 0) {
        document.getElementById("lastname_error").innerHTML = " ";
        document.getElementById("last_name").style.border = "2px solid green";
        pageOneCheck3 = 1;
    }
    else if (alphaFormat.test(last_name.value) == false) {
        document.getElementById("lastname_error").innerHTML = "Last Name must be only alphabets ";
        document.getElementById("last_name").style.border = "2px solid red";
        pageOneCheck3 = 0;
        return false;
    }
    else {
        document.getElementById("lastname_error").innerHTML = " ";
        document.getElementById("last_name").style.border = "2px solid green";
        pageOneCheck3 = 1;

    }
}
var alphaNumericFormat1= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
function validatePassword() {
    if (!password.value.length) {
        document.getElementById("password").style.border = "2px solid red";
        document.getElementById("password_error").innerHTML = "This field is neccessary";
        pageOneCheck4 = 0;

        return false;
    }
    else if(alphaNumericFormat1.test(password.value) == false){
        document.getElementById("password_error").innerHTML = "Password must contain one numeric value,one uppercase letter and one lowercase letter";
        document.getElementById("password").style.border = "2px solid red";
        pageOneCheck3 = 0;

        return false;
    }
    else{
        document.getElementById("password_error").innerHTML = " ";
        document.getElementById("password").style.border = "2px solid green";
        pageOneCheck4 = 1;
    }
}
function validateConfirmPassWord() {
    if (!confirm_password.value.length) {
        document.getElementById("confirm_password").style.border = "2px solid red";
        document.getElementById("confirm_password_error").innerHTML = "Please Re-Enter the password";
        pageOneCheck5 = 0;
        return false;
    }
    else if (password.value != confirm_password.value) {
        document.getElementById("confirm_password_error").innerHTML = "Passwords did not match";
        document.getElementById("confirm_password").style.border = "2px solid red";
        pageOneCheck5 = 0;
        return false;
    }
    else {
        document.getElementById("confirm_password_error").innerHTML = " ";
        document.getElementById("confirm_password").style.border = "2px solid green";
        pageOneCheck5 = 1;
    }
}
function Page1() {
    if(pageOneCheck1==1 && pageOneCheck2==1 && pageOneCheck3==1 && pageOneCheck4==1 && pageOneCheck5==1){
       others_btn.onclick = function () {
       basic.style.left = "-450px"; 
       others.style.left = "40px";
       }
    }
    else{
        alert("Please fill all the required details to move to the next step");
    }
}
//others step
var dob = document.getElementById("date_of_birth");
var phoneNo = document.getElementById("phone_no");
var getValue = document.getElementById('state');
var numericFormat = /^[6-9]\d{9}$/;
var pageTwoCheck1 = 0;
var pageTwoCheck2 = 0;
var pageTwoCheck3 = 0;

function validateAge() {
    if (!dob.value.length) {
        document.getElementById("date_error").innerHTML = "This field is necessary";
        document.getElementById("date_of_birth").style.border = "2px solid red";
        pageTwoCheck1 = 0;
    }
    else if (calculateAge() >= 18 && calculateAge() <= 60) {
        document.getElementById("date_error").innerHTML = "<span style='color: green;'>Your age is " + calculateAge() + " .You are eligible</span>";
        document.getElementById("date_of_birth").style.border = "2px solid green";
        pageTwoCheck1 = 1;
    }
    else if (calculateAge() < 18 && calculateAge() >= 0) {
        document.getElementById("date_error").innerHTML = "Your age is " + calculateAge() + ".You are not eligible";
        document.getElementById("date_of_birth").style.border = "2px solid red";
        pageTwoCheck1 = 0;
    }
    else if (calculateAge() < 0) {
        document.getElementById("date_error").innerHTML = "Future dates are not accepted.";
        document.getElementById("date_of_birth").style.border = "2px solid red";
        pageTwoCheck1 = 0;
    }
    else if (calculateAge() > 60) {
        document.getElementById("date_error").innerHTML = "Sorry you are not eligible."
        document.getElementById("date_of_birth").style.border = "2px solid red";
        pageTwoCheck1 = 0;
    }
}

function calculateAge() {
    const birthDay = document.getElementById("date_of_birth").value;
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
        document.getElementById("phone_error").innerHTML = "This field is neccessary";
        document.getElementById("phone_no").style.border = "2px solid red";
        pageTwoCheck3 = 0;
        return false;
    }
    else if (phoneNo.value.length < 10) {
        document.getElementById("phone_error").innerHTML = "Please ensure the given phone number is in 10 digit ";
        document.getElementById("phone_no").style.border = "2px solid red";
        pageTwoCheck3 = 0;
        return false;
    }
    else if (numericFormat.test(phoneNo.value) == false) {
        document.getElementById("phone_error").innerHTML = "Invalid Phone number";
        document.getElementById("phone_no").style.border = "2px solid red";
        pageTwoCheck3 = 0;
        return false;
    }
    else if (numericFormat.test(phoneNo.value)) {
        document.getElementById("phone_error").innerHTML = " ";
        document.getElementById("phone_no").style.border = "2px solid green";
        pageTwoCheck3 = 1;
    }
}

function Page2() {
    if(pageTwoCheck1 == 1 && pageTwoCheck2 == 1 && pageTwoCheck3 == 1){
    work_btn.onclick = function () {
        others.style.left = "-450px";
        work.style.left = "40px";
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
//education
var grade = document.getElementById('graduation');
var passoutyr = document.getElementById('pass_out_year');
var pageFourCheck1 = 0;
var pageFourCheck2 = 0;
var passoutyrFormat =  /^(0[1-9]|1[012])[\/\-](19[5-9]\d|20[0-3]\d|2040)$/;

function validateGraduation()
{
    if(!grade.value.length){
        alert("Please choose your grade");
        pageFourCheck1 = 0;
    }
    else{
        pageFourCheck1 = 1;
    }
}

function validatePassoutYear() {
    if(!passoutyr.value.length){
        document.getElementById("pass_error").innerHTML = "This fiels is necessary";
        document.getElementById("pass_out_year").style.border = "2px solid red";
        pageFourCheck2 = 0;
    }
    else if (passoutyrFormat.test(passoutyr.value) == false) {
        document.getElementById("pass_error").innerHTML = "Invalid date format";
        document.getElementById("pass_out_year").style.border = "2px solid red";
        pageFourCheck2 = 0;
    }
    else{
        document.getElementById("pass_error").innerHTML = " ";
        document.getElementById("pass_out_year").style.border = "2px solid green";
        pageFourCheck2 = 1;
    }
}
function Page3() {
    if(pageFourCheck1 == 1 && pageFourCheck2 == 1){
        team_btn.onclick = function () {
            education.style.left = "-450px";
            team.style.left = "40px";
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
//team step
var department = document.getElementById('department');
var checkBox = document.getElementById('check');

function Page4(){
    
    if(checkBox.checked==false)
    {
        alert("Please accept the terms and condition");
    }
    else{
        submit_btn.onclick = function () {
            team.style.left = "-450px";
            final_step.style.left = "40px";
        }
    }
}
var back_basic_btn = document.getElementById("back_basic_btn");
var back_other_btn = document.getElementById("back_other_btn");
var back_work_btn = document.getElementById("back_work_btn");
var back_education_btn = document.getElementById("back_eduction_btn");

back_basic_btn.onclick = function () {
    basic.style.left = "40px";
    others.style.left = "450px";
}
back_other_btn.onclick = function () {
    others.style.left = "40px";
    work.style.left = "450px";  
}
back_work_btn.onclick = function () {
    work.style.left = "40px";
    education.style.left = "450px";   
}
education_btn.onclick = function () {
    work.style.left = "-450px";
    education.style.left = "40px";
}
back_education_btn.onclick = function () {
    education.style.left = "40px";
    team.style.left = "450px";
}