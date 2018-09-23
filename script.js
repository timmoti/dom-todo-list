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
