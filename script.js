const bioForm = document.getElementById("form");
const formWrapper =
  document.getElementById("formWrapper") ||
  document.querySelector(".form-wrapper");
const profileSection = document.getElementById("profile");

const fNameInput = document.getElementById("firstName");
const lNameInput = document.getElementById("lastName");
const dobInput = document.getElementById("dateOfBirth");

const getFullName = (first, last) => `${first} ${last}`.toUpperCase();

const getGreeting = (firstName) => `Hello, ${firstName}!`;

const calculateAge = (dobString) => {
  const birthday = new Date(dobString);
  const today = new Date();

  let age = today.getFullYear() - birthday.getFullYear();
  const monthDiff = today.getMonth() - birthday.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthday.getDate())
  ) {
    age--;
  }
  return age;
};

bioForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = fNameInput.value;
  const lastName = lNameInput.value;
  const dobValue = dobInput.value;

  const userFullName = getFullName(firstName, lastName);
  const userAge = calculateAge(dobValue);
  const greeting = getGreeting(firstName);

  document.getElementById("header").innerText = "Profile Details";
  document.getElementById("hello").innerText = greeting;
  document.getElementById("fullName").innerText = `Full Name: ${userFullName}`;
  document.getElementById("age").innerText = `Age: ${userAge} years old`;

  if (formWrapper) {
    formWrapper.style.display = "none";
  } else {
    bioForm.style.display = "none";
  }

  profileSection.style.display = "block";

  console.log(`Profile generated for: ${userFullName}`);
});
