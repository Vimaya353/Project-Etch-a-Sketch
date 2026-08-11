const gridContainer = document.getElementById("gridContainer");
function createGrid(size) {
    gridContainer.innerHTML = "";
    const  squareSize = 960 / size;
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseenter", function () {
           square.style.backgroundColor = "black";
        });

        gridContainer.appendChild(square);
    }
}
createGrid(16);