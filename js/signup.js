/*
    Signup Form Script
    This script will load the state select list and validate the form before submission
*/
"use strict";

document.addEventListener('DOMContentLoaded', onReady);
function onReady() {
	var theForm = document.getElementById("signup");
	var elem = document.getElementById("states");
	for (var i = 0; i < usStates.length; i++) {   
	    var opt = document.createElement("option");	   
	    var theCurlyBrasketThings = usStates[i];
	    var stateName = theCurlyBrasketThings["name"];
	    var stateCode = theCurlyBrasketThings["code"];
		opt.value = stateCode;
		
		var text = document.createTextNode(stateName);
        opt.appendChild(text);
        elem.appendChild(opt);
	}
	occupation.addEventListener("change", occupationChooseOther);
	document.getElementById("cancelButton").addEventListener('click', goToGoogle);
	theForm.addEventListener('submit', onSubmit);
}

function occupationChooseOther() {
	if (document.getElementById("occupation").value != "other") {
		document.getElementById("occupationOther").style.display = "none";
	} else {
		document.getElementById("occupationOther").style.display = "inherit";
	}
}

function goToGoogle() {
	window.confirm("You are going to Google!");
	window.location.href = "http://google.com";
}

function onSubmit(evt) {
    var valid = true;
    try {
	    valid = validateForm(this);
	}
	catch (e) {
		alert("Exception");
	}
   
    if (!valid && evt.preventDefault) {
        evt.preventDefault();
    }
    evt.returnValue = valid;
    return valid;
} 

function validateForm(form) {
	var requiredFields = ['firstName', 'lastName', 'address1', 'city', 'state','occupationOther'];
	var valid = true;
	for (var i = 0; i < requiredFields.length; i++) {
		valid &= validateRequiredField(requiredFields[i], form);
	}
	valid &= validateZip('zip', form);
	valid &= validateBirthDate('birthdate', form);
	return valid;
}

function validateRequiredField(field, form) {
    if (0 == form[field].value.trim().length) {
        form[field].className = 'invalid-field form-control';
        return false;
    } else {
        form[field].className = 'form-control';
        return true;
    }
} 

function validateZip(field, form) {
	var zip = form[field].value.trim(); 
	var zipRegExp = new RegExp('\\d{5}'); 

	if (!zipRegExp.test(zip) || zip / 10000 > 10) { 
		form[field].className = 'invalid-field form-control';
        return false;
	} else {
       form[field].className = 'form-control';
        return true;																	
    }    
}

function validateBirthDate(field, form) {
	var currentDate = new Date();
   	if (form[field].value.toString() == "") {
   		form[field].className = 'invalid-field form-control';
        return false;
   	}
   	var dateEntered = Date.parse(form[field].value);
	var birthdateEntered = new Date(dateEntered);

	var day = currentDate.getDate() - (birthdateEntered.getDate());;
	var month = currentDate.getMonth() - (birthdateEntered.getMonth());
	var year = currentDate.getFullYear() - (birthdateEntered.getFullYear());	
	if (day < 0) {
		month -= 1;
	} 
	if (month < 0) {
		year -= 1;
	}
	if (year < 13) {
		document.getElementById("birthdateMessage").innerHTML = 
			"You're only " + year + " years old, must be 13 to submit";
		form[field].className = 'invalid-field form-control';
        return false;
	} else {
		document.getElementById("birthdateMessage").innerHTML = "";
        form[field].className = 'form-control';
        return true;																	
    }   
}