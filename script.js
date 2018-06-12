const tasks = [
	'buy milk',
	'eat dinner',
	'nail javascript',
	'give feedback',
];

const removeChildNodes = element => {
	while (element.hasChildNodes()) {
		element.lastChild.remove();
	}
}

const createRemoveButton = taskIndex => {
	const button = document.createElement('button');
	button.className = 'todo-remove';
	button.textContent = 'Remove';
	button.dataset.taskIndex = taskIndex;

	return button;
}

const createTaskItem = taskName => {
	const li = document.createElement('li');
	li.className = 'todo-item';
	li.textContent = taskName;

	return li;
}

const displayTasks = () => {
	const ul = document.querySelector('#todo-list');

	removeChildNodes(ul);

	tasks.forEach((task, index) => {
		const button = createRemoveButton(index);
		const li = createTaskItem(task);
		li.appendChild(button);
		ul.appendChild(li);
	});
}

document.querySelector('ul').addEventListener('click', event => {
	if (event.target.classList.contains('todo-item')) {
		event.target.classList.toggle('done');
	} else if (event.target.classList.contains('todo-remove')) {
		const index = event.target.dataset.taskIndex;
		tasks.splice(index, 1);
		displayTasks();
	}
});

document.querySelector('form').addEventListener('submit', event => {
	event.preventDefault();

	const newTaskInput = document.querySelector('#new-todo');
	tasks.push(newTaskInput.value);

	displayTasks();

	newTaskInput.value = '';
});

displayTasks();
