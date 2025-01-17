$(document).ready(function(){
    $("corpo").on("submit", function(e) {
        e.preventDefault();
        const nomeTarefa = $("#nome-tarefa").val();
        const novoItem = $("<li></li>");
        $(`<div class="tarefas">
                <ul>
                    ${nomeTarefa}
                </ul>
            </div>`).appendTo(novoItem);
            $(novoItem).appendTo("ul");
            $("#nome-tarefa").val("");
    })
})
