const inputName = document.querySelector("#name-input")
const outputName = document.querySelector("#name-output")

inputName.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value;
    outputName.textContent = inputValue !== '' ? inputValue : 'Anonymous';
})