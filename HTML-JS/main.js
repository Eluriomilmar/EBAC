const calculadora = document.getElementById("calculadora");
const numA = document.getElementById("numero-a");
const numB = document.getElementById("numero-b");

function comparaAB (numA, numB){
    return numB.value > numA.value;
}

calculadora.addEventListener("submit", function(e){ 
    let formEValido = false;
    e.preventDefault();
    const mensagemSucesso = `Valor ${numB.value} é maior que ${numA.value}`;

    formEValido = comparaAB(numA, numB);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector(".success-message");
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = "block";
        document.querySelector(".error-message").style.display = "none";

        numA.value = "";
        numB.value = "";
        
    }else{
        numA.style.border = "2px solid red";
        numB.style.border = "2px solid red";
        document.querySelector(".error-message").style.display = "block";
        document.querySelector(".success-message").style.display = "none";
    }
})