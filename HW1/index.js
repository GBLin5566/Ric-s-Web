
function handleEnter (e) {
    var text = document.getElementById("enterInput");
    if (e.keyCode === 13 ) {
        var form = document.getElementsByTagName("Form")[0];
        var todo = document.createTextNode("ToDo List");
        form.appendChild(document.createElement("h1").appendChild(todo));
        var newLi = document.createElement("li").appendChild(document.createTextNode(text.value));
        console.log(newLi);
        text.value = "";
        return false;
    }
    return true;
}
