const buttons = document.querySelectorAll(`button`);
const display = document.getElementById(`display`);

let concatText = "";
function buttonPressed(event) {

    const text = event.target.textContent;

    if (text === "=") {
        concatText = eval(concatText);
    } else if (text === "C") {
        concatText = ""
    } else {
        concatText += text;
    }

    display.value = concatText;
}

buttons.forEach(button => button.addEventListener(`click`, buttonPressed));