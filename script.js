/*var container = document.getElementById("grid");
let row = document.getElementsByClassName("gridRow");
let cell = document.getElementsByClassName("gridCell");

function makeRows(rowNum){
    for(let i = 0; i < rowNum; i++){
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    }
}

function makeCells(cellNum){
    for(let i = 0; i < cellNum; i++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "gridCell";
    }
}

function grid(){
    makeRows(16);
    makeCells(16);
}
grid();*/

// New TEST

/*document.getElementById("container").addEventListener("mouseover", function(){
    document.getElementById("container").style.backgroundColor = "blue"; 
});

document.getElementById("container").addEventListener("mouseout"), function(){
    document.getElementById("container").style.backgroundColor = "";
}*/
window.onload = function(){
/*let container = document.getElementById('container');
container.addEventListener("mouseenter"),function(event){
    event.target.style
}*/

function makeGrid(Num){
    document.getElementById("container").innerHTML = "";
    for (let i = 0; i < Num; i++){
        let row = document.createElement('div');
        row.className = "row";
        for(let j = 0; j < Num; j++){
            let box = document.createElement('div');
            box.className = "box";
            row.appendChild(box);
        }
        document.getElementById('container').appendChild(row);
    }
    
    console.log(document.getElementById("container").querySelectorAll("container"));
    /*document.getElementById("container").addEventListener("mouseenter", function(){
        document.getElementById("container").style.color = "green";
    })
    document.getElementById("container.row.div").addEventListener("mouseenter", function(){
        document.getElementById("containr.row.div").style.color = "green";
    })*/
}

function grid(){
    makeGrid(16);
    document.getElementById("customGrid").addEventListener("click", function(){
        let gridNum = prompt("Please enter the size of the grid");
        makeGrid(gridNum);

    })
}
grid();
}