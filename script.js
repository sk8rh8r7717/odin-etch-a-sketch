const GetGridSizeButton = document.getElementById('get-input-button')
const gridContainer = document.getElementById('grid-container')

let gridSize = 16
let width = ((1/16) * 100) - 1

GetGridSizeButton.addEventListener('click', getGridSize)


for (i = 0; i < gridSize * gridSize; i++) {
    let gridBlock = document.createElement('div')
    gridBlock.classList = "box"
    gridBlock.style.width = width + "%"
    gridBlock.style.paddingBottom = width + "%"
    gridContainer.appendChild(gridBlock)
}

function getGridSize() {
    while (true){
        gridSize = prompt("Enter grid size between 1 and 100")
        if (gridSize >= 1 && gridSize <= 100) {
            break
        }
    }
    width = ((1/gridSize) * 100) - 1
    gridContainer.innerHTML = ""
    for (i = 0; i < gridSize*gridSize; i++) {
        let gridBlock = document.createElement('div')
        gridBlock.classList = "box"
        gridBlock.style.width = width + "%"
        gridBlock.style.paddingBottom = width + "%"
        gridContainer.appendChild(gridBlock)
    }
}