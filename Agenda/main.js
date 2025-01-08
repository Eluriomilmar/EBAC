const form = document.getElementById("nome-telefone");
const nomes = [];
const telefones = [];

let linhas = ""

form.addEventListener("submit", function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
});

function adicionaLinha() {
    const inputNomes = document.getElementById("nome");
    const inputTelefones = document.getElementById("telefone");

    if (telefones.includes(parseInt(inputTelefones.value))) {
        alert(`O número: ${inputTelefones.value} já foi inserido`);
    } else {
        nomes.push(inputNomes.value);
        telefones.push(parseInt(inputTelefones.value));

    let linha = "<tr>";
    linha += `<td id="esquerda">${inputNomes.value}</td>`;
    linha += `<td id="direita">${inputTelefones.value}</td>`;
    linha += "</tr>";

    linhas += linha;
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}