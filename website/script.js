//Get Data
const nameInput = document.querySelector("#formname");
const email = document.querySelector("#formemail");
const message = document.querySelector("#formmessage");
const phone = document.querySelector("#formphone");
const success = document.querySelector("#formsuccess");
const errorNodes = document.querySelectorAll(".error");


//Validate Data
function validateForm(){
    var flag = 0;
    clearMessages();

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        flag = 1;
    }
    if(emailValidate(email.value) === false){
        errorNodes[1].innerText = "Email Invalid";
        flag = 1;
    }
    if(phoneValidate(phone.value) === false){
        errorNodes[2].innerText = "Phone Number Invalid";
        flag = 1;
    }
    if(flag == 0){
        success.innerText = "Success!";
    }

}

function emailValidate(email){
        // Regular expression for email validation
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        // Test if the email matches the regular expression
        return emailRegex.test(email);
}

function phoneValidate(phoneNumber) {
    // Regular expression for phone number validation
    var phoneRegex = /^\d{10}$/; // Matches exactly 10 digits
    
    // Test if the phone number matches the regular expression
    return phoneRegex.test(phoneNumber);
}

//Clear success and errors message
function clearMessages(){
    for(let i=0; i<errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
}

