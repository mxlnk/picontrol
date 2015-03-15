function switchState(eleOnId, eleOffId) {
	document.getElementById(eleOnId).classList.toggle('active')
	document.getElementById(eleOffId).classList.toggle('active')
}

function toggleActive(classLabel) {
	function toggleElement(element, index, array) {
		element.classList.toggle('active')
	}
	var a = Array.prototype.slice.call(document.getElementsByClassName(classLabel),0)
	a.forEach(toggleElement)
}

function turnEleOnGroupOff(elementId, groupClass) {
	function removeActive(element, index, array) {
		element.classList.remove('active')
	}
	var a = Array.prototype.slice.call(document.getElementsByClassName(groupClass),0)
	a.forEach(removeActive)

	document.getElementById(elementId).classList.add('active')
}