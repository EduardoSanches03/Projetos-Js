const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");
const errorMessage = document.querySelector(".msg");

const items = document.querySelector(".items");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    errorMessage.textContent = "Preencha tudo!!";
    errorMessage.classList = "error";

    setTimeout(() => {
      errorMessage.textContent = "";
      errorMessage.classList = "";
    }, 2000);

    return;
  }

  const li = document.createElement("li");
  li.classList = "item";

  li.innerHTML = `Nome: ${nameValue} <br> Email: ${emailValue}`;

  items.appendChild(li);

  nameInput.value = "";
  emailInput.value = "";
});
