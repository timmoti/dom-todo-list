const tasks = [
	'buy milk',
	'eat dinner',
	'nail javascript',
	'give feedback',
];

const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

const removeElements = (elms) => {
	[...elms].forEach(el => el.remove())
}
button.addEventListener('click', function() {
	removeElements(document.querySelectorAll('.done'))
})

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
	}
})

for (let task of tasks) {
	let li = document.createElement('li');
	li.textContent = task;
	ul.appendChild(li);
}

ul.addEventListener('click', function(e) {
	if (e.target && e.target.nodeName === 'LI') {
		e.target.classList.toggle("done");
	}
})

