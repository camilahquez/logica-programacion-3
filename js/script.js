let number = document.getElementById("number");


function calcularFactorial() {
    let num = parseFloat(number.value)
    if (isNaN(num)) {
        alert("Por favor ingrese un valor numerico")
    } else {
        calculo(num);
    }

    number.value = "";

}

function calculo(num) {
    let factorial = 1;
    if (num < 0){
        alert("no se puede sacra factorial de un numero negativo")
    } else if (num === 0 || num === 1) {
         factorial = 1;
         resultado.textContent = "el factorial de " + num + "! " + " es: " + factorial;
    } else {
        for (let i = 2; i < num + 1 ; i++ ) {

        factorial = factorial * i;
    }
    resultado.textContent = "el factorial de " + num + "! " + " es: " + factorial;
    
}
}