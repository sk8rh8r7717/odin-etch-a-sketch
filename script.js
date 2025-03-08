const GetGridSizeButton = document.getElementById('get-input-button')
const gridContainer = document.getElementById('grid-container')

let gridSize = 16
let width = ((1/16) * 100)

GetGridSizeButton.addEventListener('click', getGridSize)
gridContainer.style.border = "0px"

function getGridSize() {
    while (true){
        gridSize = prompt("Enter grid size between 1 and 100")
        if (gridSize >= 1 && gridSize <= 100) {
            break
        }
    }
    gridContainer.style.border = "2px solid"
    width = ((1/gridSize) * 100) 
    gridContainer.innerHTML = ""
    for (i = 0; i < gridSize*gridSize; i++) {
        let gridBlock = document.createElement('div')
        gridBlock.classList = "box"
        gridBlock.style.width = width + "%"
        gridBlock.style.paddingBottom = width + "%"
        gridBlock.addEventListener("mouseover", function () {
            gridBlock.style.backgroundColor = "black"
        })
        gridContainer.appendChild(gridBlock)
    }
}