$(document).ready(function(){
    $("form").on("submit", function(e) {
        e.preventDefault();
        const novaTarefa = $("#nome-tarefa").val();
        const novoItem = $("<li></li>");
        $(`<div class="tarefas" id=${novaTarefa}>
                ${novaTarefa}
            </div>`).appendTo(novoItem);
        $(novoItem).appendTo("ul");
        $("#nome-tarefa").val("");

    $(".tarefas").on("click", function() {
        const id = $(this).attr("id");
        $(this).css({
            textDecoration: "line-through"
        });
    });

    });

})
