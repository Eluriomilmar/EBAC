const calculator = document.getElementById("calculadora");
const numeroA = document.getElementById("númeroA");
const numeroB = document.getElementById("númeroB");

function soma(numA, numB){
    return (Number(numA.value) + Number(numB.value));
}

function subtrai(numA, numB){
    return (Number(numA.value) - Number(numB.value));
}

function multiplica(numA, numB){
    return (Number(numA.value) * Number(numB.value));
}

function divide(numA, numB){
    return (Number(numA.value) / Number(numB.value));
}

calculator.addEventListener("submit", verifica_resultado);

function verifica_resultado(event){
    event.preventDefault();
    if (document.getElementById("soma").checked) {
        document.getElementById("resultado").value = soma(numeroA, numeroB);
        document.getElementById("númeroA").value = "0";
        document.getElementById("númeroB").value = "0";
    } else if (document.getElementById("subtracao").checked) {
        document.getElementById("resultado").value = subtrai(numeroA, numeroB);
        document.getElementById("númeroA").value = "0";
        document.getElementById("númeroB").value = "0";
    } else if (document.getElementById("multiplicacao").checked) {
        document.getElementById("resultado").value = multiplica(numeroA, numeroB);
        document.getElementById("númeroA").value = "0";
        document.getElementById("númeroB").value = "0";
    } else {
        document.getElementById("resultado").value = divide(numeroA, numeroB);
        document.getElementById("númeroA").value = "0";
        document.getElementById("númeroB").value = "0";
    }
}