function validarEmail(){
  var email = document.querySelector('#email');
  var error = document.querySelector('#error-email');
  
  if(!email.checkValidity()){
    error.innerText = "Please enter a valid email address";  
  }
   
}

function redefinirMsg(){
  var error = document.querySelector('#error-email');
  if (error.innerText == "Please enter a valid email address"){
    error.innerText = "";
  }
}