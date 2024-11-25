var inp = document.getElementById('inp');
var btn = document.getElementById('bt');
var ul = document.getElementById('li-group');

btn.addEventListener("click", () => {
    if(inp.value == ""){
        alert("Plese Enter A Task");
    }
    else{
        var li = document.createElement('li');
    li.setAttribute('class', 'list-group-item');
    li.innerText = inp.value;

    var lbt = document.createElement('button');
    lbt.textContent = "Delete";
    lbt.setAttribute('class','btn btn-info');
    li.appendChild(lbt);
    ul.appendChild(li);
    }
    inp.value="";

    lbt.addEventListener("click", () => {
        ul.removeChild(li);
    })
    
});