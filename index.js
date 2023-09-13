const getGrid = document.getElementById ('grid');
const btnRange = document.getElementById ('range');
const btnClear = document.getElementById ('clear');
let valorInical = document.getElementById ('valor-inicial');



btnRange.addEventListener ('click', setSize)

function random (number) {
    return Math.floor (Math.random () * (number + 1));
}

function setSize () {
    const gridSize = btnRange.value;
    valorInical.textContent = gridSize
    createGrid (gridSize);
}

function createGrid (size) {
    
    getGrid.innerHTML = ''

    for (let i = 0; i < size * size; i++) {
        const squares = document.createElement ('div')
        squares.classList.add ('squares');
        squares.addEventListener ('mouseover', () => {
            rnmCl = `rgb(${random(255)}, ${random(255)}, ${random(255)})`  //How to change other color ??
            squares.style.backgroundColor = rnmCl
        })
        getGrid.appendChild (squares);
    }

    getGrid.style.display = 'grid'
    getGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    getGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`
}
