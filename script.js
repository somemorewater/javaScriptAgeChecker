let form, firstName, lastName, dateOfBirth;

const formInput = document.querySelector("#form");
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const dateOfBirthInput = document.querySelector("#dateOfBirth");
const done = document.querySelector("#submit");


function fullName(first, last) {
	return first + " " + last;
}

function greet(firstName) {
	let mesg = `Hello  ${firstName}`
	return mesg;
}

function age() {
	let val = Number(new Date().getFullYear())-Number(dateOfBirth.slice(0,4));
		if (Number(dateOfBirth.slice(5,7)) > new Date().getMonth() + 1) {
			val -= 1;
		} else if (Number(dateOfBirth.slice(5,7)) < new Date().getMonth() + 1) {
			val += 1;
		} else {
			if (Number(dateOfBirth.slice(8,10)) > new Date().getDate()) {
				val -= 1;
			}
		}
	return val;
}

formInput.addEventListener("submit", (event) => {
	event.preventDefault();
	firstName = firstNameInput.value;
	lastName = lastNameInput.value;
	dateOfBirth = dateOfBirthInput.value;
console.log(greet(firstName))
	document.querySelector('#header').innerHTML = "Profile";
	document.querySelector('form').style.display = "none";
	document.querySelector('#profile').style.display="block";
	document.querySelector('#hello').innerHTML = greet(firstName) + ".";
	document.querySelector('#fullName').innerHTML = "Your FullName is" + " " + fullName(firstName, lastName).toUpperCase() + ".";
	document.querySelector('#age').innerHTML = "You are" + " " + age() + " " + "old.";
});


