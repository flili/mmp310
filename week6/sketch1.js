
function todoList() {
	var item    = document.getElementById('tdInput').value
	var text    = document.createTextNode(item)
	var newItem = document.createElement('li')

	newItem.appendChild(text)
	document.getElementById('tdList').appendChild(newItem)
}