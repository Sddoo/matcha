const isValidEmail = (email) => {
	email = email.trim();
	return email.match(/^[\w|\d]+@[\w|\d]+\.[\w|\d]+$/);
}

const isValidPassword = (password, repeatedPassword) => {
	password = password.trim();
	repeatedPassword = repeatedPassword.trim();
	if (password !== repeatedPassword) return false;
	return password.match(/^[\w|\d]{4,16}$/);
}

const validateInputs = (formData, options = {emptyValid: false}) => {
	let notValidInputs = [];
	
	for (let key in formData) {
		let input = formData[key];
		
		if (!input.length && options.emptyValid) continue;
		
		switch (key) {
			case 'email':
			case 'newEmail': {
				if (!isValidEmail(input))
					notValidInputs.push(key);
				break;
			}
			case 'password':
			case 'newPassword': {
				if (!isValidPassword(input, formData.repeatedPassword)) {
					notValidInputs.push(key, 'repeatedPassword');
				}
				break;
			}
			default: {
				if (input.length >= 16 || input.length <= 4) {
					notValidInputs.push(key);
				}
			}
		}
	}
	
	return notValidInputs;
}

export default validateInputs;