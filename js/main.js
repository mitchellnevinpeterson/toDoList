// Creating a Function to add li items to the to do list
function addItem() {
	var toDoInput = document.getElementById("toDoInput").value
	var toDoText = document.createTextNode(toDoInput)
	var toDoItem = document.createElement("li")
	toDoItem.appendChild(toDoText)
	document.getElementById("list").appendChild(toDoItem)
	toDoItem.className = "bottom-border"
}