const tasks = [];

const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

const removeElements = (elms) => {
	[...elms].forEach(el => el.remove()) 
	//converts string into array and uses remove method to remove each letter from the array
}

// button.addEventListener('click', function() {
	// 	let li = document.createElement('li');
	// 	li.textContent = input.value;
	// 	ul.appendChild(li);
	// 	input.value = '';
	// })
	
input.addEventListener('keypress', function(e) {
	if (e.charCode === 13) {
		let li = document.createElement('li');
		li.textContent = input.value;
		ul.appendChild(li);
		input.value = '';

		// let checkbox = document.createElement('input');
		// checkbox.type = "checkbox";
		// checkbox.value = 1;
		// checkbox.name = "todo[]"
		// li.appendChild(checkbox);

	}
})

// Credits: http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/

function setCaretPosition(ctrl, pos) {
	// Modern browsers
	if (ctrl.setSelectionRange) {
	  ctrl.focus();
	  ctrl.setSelectionRange(pos, pos);
	
	// IE8 and below
	} else if (ctrl.createTextRange) {
	  var range = ctrl.createTextRange();
	  range.collapse(true);
	  range.moveEnd('character', pos);
	  range.moveStart('character', pos);
	  range.select();
	}
  }
  
// for (let task of tasks) {
// 	let li = document.createElement('li');
// 	li.textContent = task;
// 	ul.appendChild(li);
// 	console.log(typeof li);
// }
	
ul.addEventListener('click', function(e) {
	if (e.target && e.target.nodeName === 'LI') { //nodeName in caps
		e.target.classList.toggle("done");
	}
})
	
button.addEventListener('click', function() {
	removeElements(document.querySelectorAll('.done'))
})
