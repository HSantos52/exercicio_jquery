$(document).ready(function(){
    $("form").on("submit", function(e) {
        e.preventDefault();
        const nomeDaTarefa = $("#nome-tarefa").val();
        const novaTarefa = $('<li></li>');
        $(`<li>${nomeDaTarefa} </li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo("ul");
        $("#nome-tarefa").val("");
    })


    $('ul').on('click','li',function(){
 
        $(this).css('text-decoration', 'line-through');


    })
    
})
