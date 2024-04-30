let toDoInput = document.getElementById('todo') ;
let toDoElements = document.getElementById('todo__elements');
let btn = document.querySelector('.btn');




btn.addEventListener('click',function(){
    var paragraph = document.createElement("p");
    paragraph.innerText = toDoInput.value;
    toDoInput.value = "";
    toDoElements.appendChild(paragraph);

    paragraph.addEventListener('click',function() {
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick',function() {
        toDoElements.removeChild(paragraph);
    })

});