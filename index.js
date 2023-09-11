const getGrid = document.getElementById ('grid');


function random (number) {
    return Math.floor (Math.random () * (number + 1));
}

function setSize (size) {
        getGrid.style.display = 'grid'
        getGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        getGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const squares = document.createElement ('div');
        squares.classList.add ('squares');
        squares.addEventListener ('mouseout', () => {
            const rndRol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
            squares.style.backgroundColor = rndRol;
        })
        getGrid.appendChild (squares);
    }
}

setSize (16);


