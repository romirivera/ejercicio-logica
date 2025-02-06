function factorial(numero) {
  let resultado = 1;

  for (let i = numero; i > 0; i = i - 1) {
    resultado = resultado * i;
  }

  return resultado;
}

const handleClick = (event) => {
  event.preventDefault();

  const inputEl = document.getElementById('number');

  const value = inputEl.value;

  const resultParagraphEl = document.getElementById('resultado');

  resultParagraphEl.textContent = `El resultado es: ${factorial(value)}`;
};

const buttonEl = document.getElementById('submitButton');

buttonEl.addEventListener('click', handleClick);
