
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
        document.getElementById("root").appendChild(node);
    }     
     // add listerens to grid and show the current position
    const pixels = document.querySelectorAll('div');
    // we use the .forEach method to iterate through each button
    pixels.forEach((pixel) => 
    { 
        pixel.addEventListener('mouseenter', function (e) 
        { 
        markPosition(e.target.id);
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

function markPosition(position) {
    document.getElementById("positionText").textContent = "Current div:" + position;
    //depanding on the selector selected 
    if (document.getElementById("blackWhite").checked) {
    document.getElementById(position).style.backgroundColor = "black";
    }
    if (document.getElementById("rainbow").checked) {
        document.getElementById(position).style.backgroundColor = createColor(1);
    }
    if (document.getElementById("shades").checked) {
        document.getElementById(position).style.backgroundColor = createColor(2);
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

function createColor(case2){
    if (case2===1) {
    let colorString = "rgb(" + Math.floor((Math.random() * 255) + 1)+","
    colorString +=Math.floor((Math.random() * 255) + 1)+","
    colorString +=Math.floor((Math.random() * 255) + 1)+")"
    return colorString;
    };
    if (case2===2) {
        let colorString = "hsl( 0,0%,"
        colorString +="90" 
        colorString +="%)"
        return colorString;
        };
}
//console.log(document.getElementById("blackWhite"));