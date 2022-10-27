
 let numberOfElements = 16*16 //default grid of 16x16 elements
 
 //let pixelColor = "bw"  //selector of three values, bw (default), rainbow, shadow, 
 document.getElementById("blackWhite").checked =true;
   createGrid(numberOfElements);  //just fix 16x16 for now
  //  makeCanvas();    //make a square grid (90% of the window width)
   



function createGrid(numberOfElements) 
{
    //create elements
    let column = Math.sqrt(numberOfElements);  //for width adjustment
    let pixelWidth = 100/column;
    for (let i = 0; i < numberOfElements; i++) {
        const node = document.createElement("div");
        node.id = i;
        node.style.width = pixelWidth + "%";
        node.style.backgroundColor = "rgb(255,255,255)"  //we sett all pixels to white
        if (column > 50) {
            node.style.borderStyle ="none";
            } else {node.style.borderStyle ="solid";}
        document.getElementById("root").appendChild(node);
    }     
     // add listerens to grid and show the current position
    const pixels = document.querySelectorAll('div');
    // we use the .forEach method to iterate through each button
    pixels.forEach((pixel) => 
    { 
        pixel.addEventListener('mouseenter', function (e) 
        { 
            markPosition(e.target.id, e.target.style.backgroundColor);
        //console.log(e.target.id);
        })
    }
    );
    //make the grid square (adjust the width of one element)
    
}
/*
function makeCanvas() {
//we will make sure, that the canvas is square  -- now with a padding-top
const gridwidth = document.getElementById("root").clientWidth;
document.getElementById("root").Height = gridwidth;
console.log(gridwidth);
console.log(document.getElementById("root").Height);
}
*/

function markPosition(position, Currentcolor) {
    document.getElementById("positionText").textContent = "Current div:" + position;
    //depanding on the selector selected 
    if (document.getElementById("blackWhite").checked) {
    document.getElementById(position).style.backgroundColor = "rgb(0,0,0)";
    }
    if (document.getElementById("rainbow").checked) {
        document.getElementById(position).style.backgroundColor = createColor(1, Currentcolor);
    }
    if (document.getElementById("shades").checked) {
        document.getElementById(position).style.backgroundColor = createColor(2, Currentcolor);
    }

}
//now we will use PHP to read the variables from form to create some action
function changeGrid(){
    let answer = prompt("Please enter grid dimensions \n  for 16x16 grid enter number 16","16");
    if (answer>0 && answer<100) { //for a valid range
    //document.getElementById("positionText").textContent = "stolpci:" + answer;
    numberOfElements = answer*answer;
    console.log(numberOfElements);
    //delete the old grid
    const list = document.getElementById("root");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
    //create new grid
    createGrid(numberOfElements);
    }
}

function createColor(case2, currentColor){
    if (case2===1) {
    let colorString = "rgb(" + Math.floor((Math.random() * 255) + 1)+","
    colorString +=Math.floor((Math.random() * 255) + 1)+","
    colorString +=Math.floor((Math.random() * 255) + 1)+")"
    return colorString;
    };
    if (case2===2) {  //we are dealing with shades of gray - from 100% to as low as 0%
        //console.log(currentColor);
        let colorsAll = currentColor.slice(4,currentColor.length-1).split(",");    // let text = "rgb(230, 231, 232)"; text = text.slice(4,text.length-1);
        console.log(colorsAll);
        //make it darker
        const colorsDarker = colorsAll.map(setColorDarker);
        console.log(colorsDarker);

        let colorString = "rgb(" + colorsDarker[0] +","
        colorString +=colorsDarker[1] +"," 
        colorString +=colorsDarker[0] +")"
        return colorString;
        };
}

function setColorDarker(value) {
    return Math.abs((Number(value) - 25) % 255);
  }
//console.log(document.getElementById("blackWhite"));