

let grid = document.getElementById("grid");
const playBtn = document.getElementById("playGame");
const difficultyToggler = document.getElementById("difficulty");

playBtn.addEventListener("click", function (){
    if (difficultyToggler.value == "easy") {
        eraseGrid()
        generateGrid(100)
    }
    else if (difficultyToggler.value == "medium") {
        eraseGrid()
        generateGrid(81)
    }
    else if (difficultyToggler.value == "hard") {
        eraseGrid()
        generateGrid(49)
    }
});


  



function generateGrid(cellnum) {
    for (let i = 1; i <= cellnum; i++) {
        let cell = generateSquare(i);
        grid.appendChild(cell);
    }
}
function eraseGrid() {
    grid.innerHTML = "";
}
function generateSquare(number) {
    const cell = document.createElement("div");
    cell.classList.add("square");
    if (difficultyToggler.value == "easy") {
        cell.classList.add("easy");
    } else if (difficultyToggler.value == "medium"){
        cell.classList.add("medium");
    } else if (difficultyToggler.value == "hard"){
        cell.classList.add("hard");
    } 
    cell.innerHTML = number
    cell.addEventListener("click", function() {
        console.log("clicked on cell", number);
        cell.classList.toggle("highlight");
    });
    return cell;
}

