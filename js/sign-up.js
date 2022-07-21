// EMAIL VERIFICATION
function ValidateEmail(inputText) {
  //regExpression
  var mailformat = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
  var email = document.getElementById("email");
  var emailValidation = document.getElementById("validation");
  var errCircle = document.getElementById("err-circle");

  // email address empty
  if(inputText.value.length == 0) {
    // response to empty input box
    emailValidation.innerHTML = 
    "Oops! Please add your email";
    // style color red borderBottom & input
    email.style.color = "rgba(240, 91, 91, 1)";
    email.style.borderBottom = "2px solid rgba(240, 91, 91, 1)";
    emailValidation.style.color = "rgba(240, 91, 91, 1)";
    // err-circle visibility
    errCircle.style.opacity = "1";
    // style margin for empty response
    emailValidation.style.marginLeft = 
    "-55px";
    emailValidation.style.marginTop = 
    "0";
    // styles become in focus for the document name="form" & name="email"
    document.form.email.focus();

  // email address valid
  } else if(inputText.value.match(mailformat)) {
    // response to valid input
    emailValidation.innerHTML = "Valid email address!";
    email.style.borderBottom = "2px solid rgba(81, 117, 255, 1)";
    email.style.color = "rgba(81, 117, 255, 1)";
    // style color accent blue (button color)
    emailValidation.style.color = "rgba(81, 117, 255, 1)";
    // style margin for empty response
    emailValidation.style.marginLeft = "-55px";
    emailValidation.style.marginTop = "0";
    // styles become in focus for the document name="form" & name="email"
    document.form.email.focus();

  //email address invalid
  } else {
    // response to invalid input
    emailValidation.innerHTML = "Oops! That doesn't look like a valid email address";
    email.style.color = "rgba(240, 91, 91, 1)";
    // style color red borderBottom & input, err-circle visible
    email.style.borderBottom = "2px solid rgba(240, 91, 91, 1)";
    emailValidation.style.color = "rgba(240, 91, 91, 1)";
    // err-circle visibility
    errCircle.style.opacity = 
    "1";
    // style width & margin for invalid response
    emailValidation.style.width = "250px";
    emailValidation.style.marginLeft = "15px";
    emailValidation.style.marginTop = "0";
    // styles become in focus for the document name="form" & name="email"
    document.form.email.focus();
  }
}


// DROPDOWN SELECTION | EVENT LISTENER | CLICK
const pack = document.getElementById('pack');

pack.addEventListener('click', function displayOptions() {
  const el = document.querySelector('.select_ul');
  el.classList.toggle('active');
});
