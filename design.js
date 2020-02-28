const form = document.getElementById('form')
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

const password2 = document.getElementById('password2');

form.addEventListener('submit',(e) =>{
	e.preventDefault(); 
	checkInputs();
});
function checkInputs(){
	const usernameValue = username.value.trim();
	const emailValue =email.value.trim();
	const passWordValue =password.value.trim();
	const passWord2Value =password2.value.trim();
	if (usernameValue === ''){
		setErrorFor(username,'username cannot be empty')
	} else{
		setSuccessFor(username)
	}
	if(emailValue === ''){
		setErrorFor(email,'email cannot be blank')
	} else if(!isEmail(emailValue)){
		setErrorFor(email, 'email is not correct')
	} else{
		setSuccessFor(email)
	}
	if(passWordValue === ''){
		setErrorFor(password,'password cannot be empty')
	} 
	else{
		setSuccessFor(password)
	}

	if(passWord2Value === ''){
		setErrorFor(password2,'password cannot be empty')
	}else if(passWordValue !== passWord2Value){
		setErrorFor(password2,'password must be equal')
	}
	 else{
		setSuccessFor(password2)
	}

	checkLength(passWordValue, 6, 12);
	form.reset();

}
function setErrorFor(input, message){
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	small.innerText = message;
	formControl.className = "form-control error";
	//console.log(small)
}
function setSuccessFor(input){
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}
function isEmail(email){
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}

function checkLength(input, min, max) {
	if (input.length < min) {
		setErrorFor(password,'password must be less than ' + min )
	} else if (input.length > max) {
		setErrorFor(password,'password must be equal')
	} else {
		setSuccessFor(password)
	}
	};

  
  