$(document).ready(function(){
    $("div").on("submit", function(e) {
        e.preventDefault();
        const novaTarefa = $("#nome-tarefa").val();
        const novoItem = $("<li></li>");
        $(`<div class="tarefas">
                ${novaTarefa}
            </div>`).appendTo(novoItem);
        $(novoItem).appendTo("ul");
        $("#nome-tarefa").val("");
            
    })

})
