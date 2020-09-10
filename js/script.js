var valuenumberOne = document.getElementById("numberOne");
var valuenumberTwo = document.getElementById("numberTwo");
var result = document.getElementById("result");
var button = document.getElementById("button");
var error = "";

button.addEventListener("click", function() {
    if (valuenumberOne.value == "" && valuenumberTwo.value == "") {
        error = "Verifica los Campos";
    } else {
    
        if (valuenumberOne.value == "") {
            error = "Verifica el Primer Numero";
        }
    
        if (valuenumberTwo.value == "") {
            error = "Verifica el segundo Numero";
        }
    
    }

    if (error == "") {
        var numberOne = parseInt(valuenumberOne.value);
        var numberTwo = parseInt(valuenumberTwo.value);
        result.innerHTML = "La Suma es " + (numberOne + numberTwo);
        result.style.color = "green";
    } else {
        result.innerHTML = error;
        result.style.color = "red";
    }
});