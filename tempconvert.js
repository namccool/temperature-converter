function processForm(){

	var temperature = Number(document.tempForm.temp.value);
	var tempType;
	var result;

	for (var i = 0; i < document.tempForm.choice.length; i++) {

		if (document.tempForm.choice[i].selected){
			tempType = document.tempForm.choice[i].value;
		}
	}

	if (tempType == "fahrenheit") {
		result = temperature * 9/5 + 32;
	}

	else if (tempType == "celsius") {
		result = (temperature - 32) * 5/9;
	}

	else {
		result = "Please choose a scale.";
	}
	document.tempForm.resultField.value = result;
}