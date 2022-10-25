function createGrid(numberOfElements) {

    // Create an "li" node:
        for (let i = 0; i < numberOfElements; i++) {
            
            const node = document.createElement("div");
        
            // Create a text node:
            //const textnode = document.createTextNode("Water");
            
            // Append the text node to the "li" node:
            //node.appendChild(textnode);
            
            // Append the "li" node to the list:
            document.getElementById("root").appendChild(node);
        
        }     
    }
function makeCanvas() {
//we will make sure, that the canvas is square  -- now with a padding-top
 const gridwidth = document.getElementById("root").clientWidth;
 document.getElementById("root").Height = gridwidth;
 console.log(gridwidth);
 console.log(document.getElementById("root").Height);
}

    createGrid(16*16);
    makeCanvas();
