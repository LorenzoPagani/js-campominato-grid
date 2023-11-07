

let grid = document.getElementById("grid");
const playBtn = document.getElementById("playGame");
playBtn.addEventListener("click", function (){generateGrid(100)});

  



function generateGrid(cellnum) {
    for (let i = 1; i <= cellnum; i++) {
        let cell = generateSquare(i);
        grid.appendChild(cell);
    }
}


function generateSquare(numero) {
    const cell = document.createElement("div");
    cell.classList.add("square");
    cell.innerHTML = numero
    cell.addEventListener("click", function() {
        console.log("clicked on cell", numero);
        cell.classList.toggle("highlight");
    });
    return cell;
}

