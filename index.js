const getGrid = document.getElementById ('grid');




function setSize (size) {
    for (let i = 0; i < size * size; i++) {
        const squares = document.createElement ('div');
        squares.classList.add ('squares');
        getGrid.appendChild (squares);
        getGrid.style.display = 'grid'
        getGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        getGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`
        
    }

}


setSize (16);


