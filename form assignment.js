
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i,z,a,b,c, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
 /* z = document.getElementById("firstname");
  a = document.getElementById("email");
  b = document.getElementById("password");
  c = document.getElementById("confirm-password");
  if(z.value.trim()=='')
	{
		setError(z,'Username cannot be blank');
	}
	else if(!isUserName(z.value))
	{
		setError(z,"Username should contain only characters,numbers,underscore,dot and hypen")
	}
	else if(z.value.trim().length<5||z.value.trim().length>15)
	{
		setError(z,'Username must be 5 to 18 characters long.');
	}
	else
	{
		setSuccess(z,'Valid username');
	}
  if(a.value.trim()=='')
	{
		setError(a,'Email cannot be blank');
	}
	else if(!isEmail(a.value))
	{
		setError(a,"Not a valid Email ID");
	}
	else
	{
		setSuccess(a,'Valid email');
	}
	if(b.value.trim()=='')
    {
    	setError(b,'Password cannot be blank');
    }
    else if(!isPassword(b.value))
    {
    	setError(b,'Not a valid Password');
    }
    else
    {
    	setSuccess(b,"Valid password");
    }
    if(c.value.trim()=='')
    {
		setError(c,'Password cannot be blank');
    }
    else if(isConfirmPassword(c)!==isPassword(b))
    {
		setError(c,'Password does not match');
    }
    else
    {
    	setSuccess(c,'Password matched');
    }
}
  function setError(element,errorMessage)
{
	const parent=element.parentElement;
	parent.classList.add('error');
	if(parent.classList.contains('success'))
	{
		parent.classList.remove('success');
	}
	const message=parent.querySelector('p3');
	message.textContent=errorMessage;
}
function setSuccess(element,successMessage)
{
	const parent=element.parentElement;
	parent.classList.add('success');
	if(parent.classList.contains('error'))
	{
		parent.classList.remove('error');
	}
	const message=parent.querySelector('p3');
	message.textContent=successMessage;
}
function isUserName(z)
{
	const zPattern = /^[a-zA-Z0-9\._-]+$/;
	return zPattern.test(z);
}
function isEmail(a)
{
	const aPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return aPattern.test(a);
}
function isPassword(b)
{
	const bPattern =/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return bPattern.test(b);
}
function isConfirmPassword(c)
{
	const cPattern =/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return cPattern.test(c);
}
*/
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
    //return validateForm();
  }
   // return the valid status

}
function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
 }

