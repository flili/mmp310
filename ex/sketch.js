window.addEventListener("load", function(){
    
    var c =document.getElementById("container");
    var submit = document.getElementById("new-message");
    var input = document.getElementById("add-message");
    submit.addEventListener("click", addMessage);
 
    function addMessage(){    
        var msg = document.createElement("div");
        msg.className = "message";
        msg.innerText = input.value;
        c.appendChild(msg);
});

/*window.addEventListener("load", addMessage);

