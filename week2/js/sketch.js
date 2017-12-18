submit.onclick = function () {
    var madlibs = document.getElementById("madlibs");
	var submit = document.getElementById("submit");
    var Rname = document.getElementById("Rname");
    var location = document.getElementById("location");
	var animal = document.getElementById("animal");
	var color = document.getElementById("color");
	var object = document.getElementById("object");
    var transp = document.getElementById("transp");
    var message = document.getElementById("message"); 
	console.log(message);  
    
    
    if (Rname.value){
        message.innerHTML = "Once upon a time there was a kid named " + Rname.value + ". " + Rname.value + " had to go to a " + location.value +". " + "So " + Rname.value + " took a " +transp.value + ". But on the way " + Rname.value + " find a " + animal.value + " and it was " + color.value + " but the weird thing is that the " + animal.value + " had a " + object.value + " glued on the back.";
    } else {
        message.innerHTML = "Please input a random name."
    }


};
