const form = document.getElementById("survey-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.elements["name"].value;
  const age = form.elements["age"].value;
  const gender = form.elements["gender"].value;
  const email = form.elements["email"].value;
  const feedback = form.elements["feedback"].value;
  
  
  form.reset();
});
