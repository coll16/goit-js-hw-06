const buttonDecrement = document.querySelector("[data-action='decrement']")

const buttonIncrement = document.querySelector("[data-action='increment']")

const spanValue = document.querySelector("#value")

let counterValue = 0

buttonDecrement.addEventListener("click", ()=>{
    counterValue -= 1
    updateCounter()
})

buttonIncrement.addEventListener("click", ()=>{
    counterValue += 1
    updateCounter()
})

function updateCounter () {
spanValue.textContent = counterValue
}