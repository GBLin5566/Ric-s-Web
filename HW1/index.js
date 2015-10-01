

var remainTodo = 0;


function handleEnter (e) {
    var text = document.getElementById("enterInput");
    if (e.keyCode === 13 && text.value != "") {
        var newLi = document.createElement("li");
        newLi.innerHTML = text.value;
        newLi.className = 'new-task';
        newLi.type = 'circle';
        newLi.addEventListener("mousedown", function(){handleMouseDownTasks(newLi)},false);
        document.getElementsByTagName("body")[0].appendChild(newLi);
        text.value = "";
        refreshTodo(1);
        return false;
    }
    else if (e.keyCode === 13 && text.value == "")
        return false;
    return true;
}


function handleMouseDownTasks (li) {
    if(li.className != 'remove-task'){
        li.className = 'remove-task';
        refreshTodo(-1);
        /*var btn = document.createElement("button");
        btn.className = 'remove-btn';
        btn.addEventListener("mousedown", function(){removeTasks(li)}, false);
        btn.appendChild(document.createTextNode("X"));
        li.appendChild(btn);*/
        var inp = document.createElement("input");
        inp.type = "image";
        inp.src = "thexx.png";
        inp.id = "myImage";
        inp.addEventListener("mousedown", function(){removeTasks(li)}, false);
        li.appendChild(inp);
    }
}

function refreshTodo (num){
    remainTodo += num;
    document.getElementById('remainTasks').innerHTML = remainTodo;
}

function removeTasks (li) {
    li.parentNode.removeChild(li);
}
