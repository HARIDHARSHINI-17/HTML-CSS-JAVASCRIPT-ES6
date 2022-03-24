const form=document.querySelector('#form-validation');
const usernameInput=document.querySelector('#username');
const emailInput=document.querySelector('#email');
const mobilenumberInput=document.querySelector('#mobilenumber');
const passwordInput=document.querySelector('#password');
const confirmpasswordInput=document.querySelector('#confirm-password');

form.addEventListener('submit',(event)=>{
	validateForm();
	if(isFormValid()==true)
	{
		form.submit();
	}
	else
	{
		event.preventDefault();
		return false;
	}
});
function isFormValid()
{
	const inputContainers=form.querySelectorAll('.input-group')
	let result=true;
	inputContainers.forEach((container)=>{
		if(container.classList.contains('error'))
		{
			result=false;
		}
	})
	return result;
}
function validateForm()
{
	if(usernameInput.value.trim()=='')
	{
		setError(usernameInput,'Username cannot be blank');
	}
	else if(!isUserName(usernameInput.value))
	{
		setError(usernameInput,"Username should contain only characters,numbers,underscore,dot and hypen")
	}
	else if(usernameInput.value.trim().length<5||usernameInput.value.trim().length>15)
	{
		setError(usernameInput,'Username must be 5 to 18 characters long.');
	}
	else
	{
		setSuccess(usernameInput,'Valid username');
	}
	if(emailInput.value.trim()=='')
	{
		setError(emailInput,'Email cannot be blank');
	}
	else if(!isEmail(emailInput.value))
	{
		setError(emailInput,"Not a valid Email ID");
	}
	else
	{
		setSuccess(emailInput,'Valid email');
	}
	if(mobilenumberInput.value.trim()=='')
	{
		setError(mobilenumberInput,'Mobile Number cannot be blank');
	}
	else if(!isMobileNumber(mobilenumberInput.value))
	{
		setError(mobilenumberInput,"Not a valid Mobile Number");
	}
	else
	{
		setSuccess(mobilenumberInput,'Valid mobilenumber');
	}
	if(passwordInput.value.trim()=='')
    {
    	setError(passwordInput,'Password cannot be blank');
    }
    else if(!isPassword(passwordInput.value))
    {
    	setError(passwordInput,'Not a valid Password');
    }
    else
    {
    	setSuccess(passwordInput,"Valid password");
    }
    if(confirmpasswordInput.value.trim()=='')
    {
		setError(confirmpasswordInput,'Password cannot be blank');
    }
    else if(isConfirmPassword(confirmpasswordInput)!==isPassword(passwordInput))
    {
		setError(confirmpasswordInput,'Password does not match');
    }
    else
    {
    	setSuccess(confirmpasswordInput,'Password matched');
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
	const message=parent.querySelector('p');
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
	const message=parent.querySelector('p');
	message.textContent=successMessage;
}
function isUserName(username)
{
	const usernamePattern = /^[a-zA-Z0-9\._-]+$/;
	return usernamePattern.test(username);
}
function isEmail(email)
{
	const emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailPattern.test(email);
}
function isMobileNumber(mobilenumber)
{
	const mobilenumberPattern=/^(0|[+91]{3})?[7-9][0-9]{9}$/;
	return mobilenumberPattern.test(mobilenumber);
}
function isPassword(password)
{
	const passwordPattern =/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passwordPattern.test(password);
}
function isConfirmPassword(confirmpassword)
{
	const confirmpasswordPattern =/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return confirmpasswordPattern.test(confirmpassword);
}