// Everything in between these tags is Javascript!

alert("Hello, world!");

window.onload = function(){
    
    document.getElementById("awesome_button").onclick = function(){
        alert("I clicked the button!");
    }
    document.getElementById("submit_button").onclick = function(){
        alert(document.getElementById("submit_text").value);
    }
}
