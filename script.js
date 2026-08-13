const newGridButton = document.getElementById("newGridButton");
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

newGridButton.addEventListener("click", function () {

    const userInput = prompt(
        "Enter the number of squares per side (1-100):"
    );

    if (userInput === null) {
        return;
    }

    const size = Number(userInput);

    if (Number.isInteger(size) && size >= 1 && size <= 100) {
        createGrid(size);
    } else {
        alert("Please enter a whole number between 1 and 100.");
    }
});