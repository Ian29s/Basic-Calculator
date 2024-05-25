// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

function insertDisplay(props) {
    var display = document.getElementById('inputDisplay');
    var lastChar = display.value[display.value.length - 1];
    // Check if the last character is an operator and the new value is also an operator
    if (isOperator(lastChar) && isOperator(props)) {
        // Replace the last operator with the new one
        display.value = display.value.slice(0, -1) + props;
    } else {
        // Otherwise, simply append the value
        display.value += props;
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function clearInput() {
    document.getElementById('inputDisplay').value = '';
}

function calculate() {
    var expression = document.getElementById('inputDisplay').value;
    try {
        var result = eval(expression);
        document.getElementById('inputDisplay').value = result;
    } catch (error) {
        modal2.style.display = "block";
        document.getElementById('inputDisplay').value = '';
    }
}

function clearLastChar() {
    var displayValue = document.getElementById('inputDisplay').value;
    document.getElementById('inputDisplay').value = displayValue.slice(0, -1);
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}