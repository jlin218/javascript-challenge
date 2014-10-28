/*
    Signup Form Script
    This script will load the state select list and validate the form before submission
*/
"use strict";

document.addEventListener('DOMContentLoaded', onReady);
function onReady() {
	var elem = document.getElementById("states");
	for (var i = 0; i < usStates.length; i++) {   
	    var opt = document.createElement("option");
	   
	    var theCurlyBrasketThings = usStates[i];
	    var stateName = theCurlyBrasketThings["name"];
	    var stateCode = theCurlyBrasketThings["code"];

	    //console.log(i);

		opt.value = stateCode;
		
		var text = document.createTextNode(stateName);
        opt.appendChild(text);
        elem.appendChild(opt);
	}
	occupation.addEventListener("change", occupationChooseOther);
	document.getElementById("cancelButton").addEventListener('click', goToGoogle);
	//document.getElementById("signup").addEventListener('submitButton', onSubmit);
}
function occupationChooseOther(){
	//console.log("get in 1");
	if (document.getElementById("occupation").value != "other") {
		document.getElementById("occupationOther").style.display = "none";
	//	console.log("get in 2");
	} else {
		document.getElementById("occupationOther").style.display = "inherit";
	}
}
function goToGoogle(){
	window.confirm("You are going to Google!");
	window.location.href = "http://google.com";
}
/*function onSubmit(evt){
	var valid = validateForm(this);
    console.log("This works");
    if (!valid && evt.preventDefault) {
    	evt.preventDefault();
    }
    evt.returnValue = valid;
    return valid;

}
function validateForm(form) {
	var requiredFields = ['firstName', 'lastName', 'address1', 'city', 'state','occupationOther'];
	    //console.log("get in 1");

	var checkFields = requiredFields.forEach(validateRequiredFields, form);
	/*var checkZip = validateZip('zip');
	if (chcekZip && checkFields){
		return true;
	} else {
		return false;
	}
	
	//occupation
	//var checkBirthDate = validateBirthDate('birthdate');
}
function validateRequiredField(field) {

    if (0 == this[field].value.trim().length){

        this[field].className = 'invalid-field form-control';
        return false;
    } else {
        this[field].className = 'form-control';

        return true;
    }
} 
function validateZip(field){
	var zip = field.value; 
	var zipRegExp = new RegExp('\\d{5}');
	var zipRegExp2 = new RegExp('[a-z|A-Z]+');
	if (!zipRegExp.test(zip) || zipRegExp2) { //symbol
		field.className = 'invalid-field form-control';
        return false;
	} else {
       field.className = 'form-control';
        return true;																	
    }    
}
function validateBirthDate(field){
	var currentDate = new Date();
	var birthDateEntered = field.value;
	if () 
}*/