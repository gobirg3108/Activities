// Web Developer Task- Calculator

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = " ";
}

function calculate() {
   try {
    display.value = eval(display.value);
   }
   catch(error) {
    display.value ="Error";
   }
}
// Alert
document.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9') {
    } else {
        alert('Only numbers are allowed');
    }
});