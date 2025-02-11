'use strict';

const divContainer = document.querySelector('.grid-container');

//we loop over and create divs, setting an attribute of either a row or column

/*

1.create a 16 by 16 grid, 
 each square will have dimensions of 50px = 16*50 = 800 by 800
  - this sets the max grid width as a constant = 800
2. prompt user input - get number of squares to use 
3. create the new grid with the adjusted width and height to fit 
into the max grid width 


*/

// we create a 16 by 16 grid
let maxWidth;

for (let i = 0; i < 16; i++) {
	const rowDiv = document.createElement('div');
	rowDiv.setAttribute('id', `row-${i}`);
	rowDiv.style.display = 'flex';
	rowDiv.style.maxWidth = 'fit-content';
	divContainer.appendChild(rowDiv);
	for (let i = 0; i < 16; ++i) {
		const cellDiv = document.createElement('div');
		cellDiv.setAttribute('id', `cell-${i}`);
		cellDiv.style.width = '40px';
		cellDiv.style.height = '40px';
		cellDiv.classList.add(`row-${i}`);
		cellDiv.classList.add(`cell`);
		rowDiv.appendChild(cellDiv);
	}
	//query to find out max width of grid
}
// we set the max width and height of the container to the output of the create grid

divContainer.style.maxWidth = 'fit-content';
divContainer.style.maxHeight = 'fit-content';

maxWidth = +getComputedStyle(divContainer).width.slice(0, 3);

divContainer.style.width = maxWidth;
divContainer.style.height = maxWidth;

console.log(maxWidth);

// we get the computed max value for use in our other grids

// event handler to change color
// we tie it to the entire grid

const getRandomValue = function () {
	return Math.floor(Math.random() * 255) + 1;
};

const getRandomColor = function () {
	return `rgb(${getRandomValue()},${getRandomValue()},${getRandomValue()})`;
};

// console.log(randomColor);

const [...cells] = document.querySelectorAll('.cell');

let opacity = 0;

divContainer.addEventListener('mouseover', e => {
	e.preventDefault();
	e.target.style.backgroundColor = `${getRandomColor()}`;
	opacity === 100 ? (opacity = 10) : (opacity += 10);
	e.target.style.opacity = `${opacity}%`;
});

//popup button event handler

const popupBtn = document.querySelector('button');

popupBtn.addEventListener('click', e => {
	e.preventDefault();
	let gridPrompt = 0;
	do {
		gridPrompt = +prompt('please enter a value between 1 and 100');
	} while (gridPrompt <= 0 || gridPrompt > 100);

	// delete previous grid contents
	divContainer.innerHTML = '';
	divContainer.maxWidth = divContainer.maxHeight = maxWidth;

	for (let i = 0; i < gridPrompt; i++) {
		const rowDiv = document.createElement('div');
		rowDiv.setAttribute('id', `row-${i}`);
		rowDiv.style.display = 'flex';
		rowDiv.style.maxWidth = 'fit-content';
		divContainer.appendChild(rowDiv);
		for (let i = 0; i < gridPrompt; ++i) {
			const cellDiv = document.createElement('div');
			cellDiv.setAttribute('id', `cell-${i}`);

			cellDiv.style.width = cellDiv.style.height = `${
				(maxWidth - (maxWidth % gridPrompt)) /
				gridPrompt
			}px`;
			cellDiv.classList.add(`row-${i}`);
			cellDiv.classList.add(`cell`);
			rowDiv.appendChild(cellDiv);
		}
		//query to find out max width of grid
	}
});

console.log(maxWidth);

//next we need to refactor
