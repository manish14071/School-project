const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const standard = document.querySelector("#stand");
const section = document.querySelector("#section");
const email = document.querySelector("#email");
const admission = document.querySelector("#admission");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const dob = document.querySelector("#dob");
const english = document.querySelector("#english");
const hindi = document.querySelector("#hindi");
const math = document.querySelector("#math");
const science = document.querySelector("#science");
const history = document.querySelector("#history");

const submitHandler = async (e) => {
  try {
    if (password.value != confirmPassword.value) {
      alert("Password does nor match");
    } else {
      await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: firstname.value,
          lastname: lastname?.value,
          standard: standard.value,
          section: section.value,
          email: email.value,
          admission: admission.value,
          password: password.value,
          dob: dob.value,
          english:english.value,
          hindi:hindi.value,
          math:math.value,
          science:science.value,
          history:history.value
        }),
      });
      window.location.reload();
    }
  } catch (error) {
    console.log(error);
  }
};
