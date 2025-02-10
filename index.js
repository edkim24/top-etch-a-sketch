'use strict';

const newDiv = document.createElement('div');

const divContainer = document.querySelector('.grid-container');

// newDiv.setAttribute('class', 'child-div');

//we loop over and create divs, setting an attribute of either a row or column

for (let i = 1; i <= 256; i++) {
	let rowDiv = document.createElement('div');
	divContainer.appendChild(rowDiv);
	rowDiv.setAttribute('id', `row-${i}`);

	if (i % 2 === 0) {
		rowDiv.setAttribute('class', 'row-even');
		rowDiv.classList.add('row');
	} else if (i % 2 === 1) {
		rowDiv.setAttribute('class', 'row-odd');
		rowDiv.classList.add('row');
	}
}

// we try using mouseover event -
// we get it to the target

// divContainer.addEventListener('mouseover', e => {
// 	e.preventDefault();
// 	e.target.classList.toggle('black-div');
// });

// how about, we query all the elements, create an array from them, and add the event listeners to the array

const rowEl = [...document.querySelectorAll('.row')];

rowEl.forEach(row => {
	row.addEventListener('mouseenter', e => {
		e.preventDefault();
		row.classList.toggle('black-div');
	});
});

// rowEl.forEach(row => {
// 	row.addEventListener('mouseleave', e => {
// 		e.preventDefault();
// 		row.classList.toggle('black-div');
// 	});
// });

const popupBtn = document.querySelector('button');

popupBtn.addEventListener('click', e => {
	e.preventDefault();
	const newGrid = +prompt('Please enter the new grid size');
	console.log(newGrid);
});
