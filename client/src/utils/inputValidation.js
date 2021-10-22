const validateInputs = (formData) => {
	let notValidated = [];
	
	for (let key in formData) {
		let input = formData[key];
		
		switch (key) {
			case 'email': {
				if (!validateEmail(input))
					notValidated.push('email');
				break;
			}
			case 'password': {
				if (!validatePassword(input))
					notValidated.push('password');
				break;
			}
			default: {
				if (input.length >= 16 || input.length <= 4) {
					notValidated.push(key);
				}
			}
		}
	}
	
	return notValidated;
}

const validateEmail = (email) => {
	email = email.trim();
	return email.match(/^[\w|\d]+@[\w|\d]+\.[\w|\d]+$/);
}

const validatePassword = (password) => {
	password = password.trim();
	return password.match(/^[\w|\d]{4,16}$/);
}

export default validateInputs;