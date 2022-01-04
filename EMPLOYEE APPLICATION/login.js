const form=document.querySelector('#login-account-form');
const emailInput=document.querySelector('#email');
const passwordInput=document.querySelector('#password');


form.addEventListener('submit',(event)=>{

	validateForm();

	if(isFormValid()==true)
	{
		form.submit();
	}
	else
	{
		event.preventDefault();
		/*return false;*/
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
function isEmail(email)
{
	const emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailPattern.test(email);
}
function isPassword(password)
{
	const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passwordPattern.test(password);
}
