function insertDisplay(props) {
   document.getElementById("inputDisplay").value += props;
  }

  function clearInput() {
    document.getElementById("inputDisplay").value = "";
     }

    function calculate() {
      var expression = document.getElementById("inputDisplay").value;
      try {
        var inputDisplay = eval(expression);
        document.getElementById("inputDisplay").value = inputDisplay;
    } catch (error) {
        document.getElementById("inputDisplay").value = alert("Error");
    }
  }

  function clearLastChar() {
    var displayValue = document.getElementById("inputDisplay").value;
    document.getElementById("inputDisplay").value = displayValue.slice(0, -1);
}


