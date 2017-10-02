var submit = document.getElemetById("submit")
submit.onclick = function() {
	var name = document.getElementById("name");
	var animal = document.getElementById("animal");
	var color = document.getElementById("color");
	var location = document.getElementById("location");
    var vehicle = document.getElementById("vehicle");
    var object = getElementById("object");
    var story = document.getElementById("story");


if (name.value) {

        >story.innerText = "Once upon a time there was a child named " +name.value + "was walking and surprisily find out that a + animal.value + " and the weird thing about it is that + animal.value + "was "+ color.value + ".";
    
}else {
		message.innerText = "Please input a name.";
	}
};

