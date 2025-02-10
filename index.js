'use strict';

const divContainer = document.querySelector('.grid-container');

//we loop over and create divs, setting an attribute of either a row or column

for (let i = 0; i < 16; ++i) {
	let rowDiv = document.createElement('div');
	divContainer.appendChild(rowDiv);
	rowDiv.setAttribute('id', `row-${i}`);
	rowDiv.classList.add('row-div');

	for (let i = 0; i < 16; ++i) {
		let cellDiv = document.createElement('div');
		rowDiv.appendChild(cellDiv);
		cellDiv.setAttribute('id', `cell-${i}`);
		cellDiv.classList.add('cellDiv');
	}
}

const cellEl = [...document.querySelectorAll('.cellDiv')];

cellEl.forEach(cell => {
	cell.addEventListener('mouseenter', e => {
		e.preventDefault();
		cell.classList.toggle('black-div');
	});
});

const popupBtn = document.querySelector('button');

popupBtn.addEventListener('click', e => {
	e.preventDefault();
	const newGrid = +prompt('Please enter the new grid size');
	console.log(newGrid);
});
