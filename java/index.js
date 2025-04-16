function verificarParImpar() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const resultElement = document.getElementById('result1');
    
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerHTML = "Por favor ingrese dos números válidos.";
        return;
    }
    
    const resultado1 = num1 % 2 === 0 ? "par" : "impar";
    const resultado2 = num2 % 2 === 0 ? "par" : "impar";
    
    resultElement.innerHTML = `El primer número (${num1}) es ${resultado1}.<br>
                              El segundo número (${num2}) es ${resultado2}.`;
}

function encontrarMayor() {
    const numA = parseFloat(document.getElementById('numA').value);
    const numB = parseFloat(document.getElementById('numB').value);
    const numC = parseFloat(document.getElementById('numC').value);
    const resultElement = document.getElementById('result2');
    
    if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
        resultElement.innerHTML = "Por favor ingrese tres números válidos.";
        return;
    }
    
    let mayor = numA;
    
    if (numB > mayor) {
        mayor = numB;
    }
    
    if (numC > mayor) {
        mayor = numC;
    }
    
    resultElement.innerHTML = `De los números ${numA}, ${numB} y ${numC}, el mayor es ${mayor}.`;
}