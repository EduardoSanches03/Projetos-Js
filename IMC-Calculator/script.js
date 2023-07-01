document.addEventListener("DOMContentLoaded", function () {
  const calcButton = document.querySelector("#calc-button");
  const nameInput = document.querySelector("#input-name");
  const alturaInput = document.querySelector("#input-altura");
  const pesoInput = document.querySelector("#input-peso");
  const textDiv = document.querySelector(".text");

  calcButton.addEventListener("click", function (event) {
    event.preventDefault();

    const altura = alturaInput.value;
    const peso = pesoInput.value;
    const nome = nameInput.value;

    if (altura !== "" && nome !== "" && peso !== "") {
      const result = peso / (altura * altura);

      const newItem = document.createElement("p");
      if (result < 17) {
        newItem.textContent = `${nome}, seu IMC é ${result.toFixed(
          2
        )}, você está muito abaixo do peso`;
      }
      if (result > 17 && result < 18.49) {
        newItem.textContent = `${nome}, seu IMC é ${result.toFixed(
          2
        )}, você está abaixo do peso`;
      }
      if (result > 18.5 && result < 24.99) {
        newItem.textContent = `${nome}, seu IMC é ${result.toFixed(
          2
        )}, você está com o peso normal`;
      }
      if (result > 25 && result < 29.99) {
        newItem.textContent = `${nome}, seu IMC é ${result.toFixed(
          2
        )}, você está Acima do peso`;
      }
      if (result > 30 && result < 34.99) {
        newItem.textContent = `${nome}, seu IMC é ${result.toFixed(
          2
        )}, você está com Obesidade I`;
      }
      if (result > 35 && result < 39.99) {
        newItem.textContent = `${nome}, seu IMC é ${result.toFixed(
          2
        )}, você está com Obesidade II (severa)`;
      }
      if (result > 40) {
        newItem.textContent = `${nome}, seu IMC é ${result.toFixed(
          2
        )}, você está com Obesidade III (mórbida)
          `;
      }

      textDiv.innerHTML = ""; // Limpa o conteúdo anterior, se houver
      textDiv.appendChild(newItem);
    } else {
      const newItem = document.createElement("p");
      newItem.textContent = "Preencha todos os campos";

      textDiv.innerHTML = ""; // Limpa o conteúdo anterior, se houver
      textDiv.appendChild(newItem);
    }
  });
});
