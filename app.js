let lista = document.querySelector("#list");
let add = document.querySelector("#add");
let todo = document.querySelector("#todo");
let form = document.querySelector("#form");

form.addEventListener("submit", function(e){
   if(todo.value!==""){
    e.preventDefault();
    let li = document.createElement("li");
    let button = document.createElement("button");
    let radio = document.createElement("input");
    let a = document.createElement("a");
    radio.setAttribute("type", "radio");
    button.innerHTML = 	'&#128465';
    li.append(radio);
    a.innerHTML = todo.value;
    li.append(a);
    li.append(button);
    lista.append(li);
    todo.value = "";
    li.addEventListener('click', function(){
        li.classList.toggle("done");
        if(li.classList=="done"){
            radio.checked = true;
        }
        else{
            radio.checked = false;
        }
    })
    button.addEventListener('click', function(){
        li.remove();
    })

   }

})



