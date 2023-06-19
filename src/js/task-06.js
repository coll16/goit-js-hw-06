const inputEl = document.querySelector("#validation-input")
inputEl.addEventListener("blur", borderColor)

function borderColor() {
    const inputValid = Number(inputEl.dataset.length);
    const inputInvalid = inputEl.value.length;
    inputEl.classList.remove("invalid", "valid")
    if (inputValid === inputInvalid) {
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.add("invalid")
    }
}