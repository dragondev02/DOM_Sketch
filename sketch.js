let gridsize = 16; //default grid size
let div;
let divarray;

// Generate the given amount of divs and dinamycally set up the grid layout 
const gridcontainer = document.querySelector(".gridcontainer");
gridcontainer.style.display = "grid";

function divgenerator (gridsize) {

    gridcontainer.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`;
    gridcontainer.style.gridTemplateRows = `repeat(${gridsize}, 1fr)`;


for (i = 0; i < gridsize; i++)
    {
        for (j = 0; j< gridsize; j++)
            {
                div = document.createElement("div");
                div.className = "griddiv"
                gridcontainer.append(div);
                div.style.border = "thin solid black";
            }
    }

    //Convert all the squares in the grid into an array of elements
    divarray = Array.from(gridcontainer.childNodes)

    // Toggle the pen on and off with a click
    divarray.forEach(element => {
        element.addEventListener("click", pen);
    });
}


// Print the base 16 grid layout
divgenerator(gridsize);


// Change size button that prompts the user for a new grid size
const sizeButton = document.querySelector(".changebutton");
sizeButton.addEventListener("click", setsize);

function setsize (){

    divarray.forEach(element => {
        gridcontainer.removeChild(element)
        
    });

    gridsize = getPosInt();
    
    function getPosInt() 
    {
        let x;
        while (x === undefined || x < 0 || x > 50){
            x = prompt ("Enter a new size between 1 and 50:");
        }
        return x;
    }

    divgenerator(gridsize);
}

// Hovering over a griddiv will paint it
function pen(){


function addcolor(){
    this.className = "onhover";
}

divarray.forEach(element => {
    element.addEventListener("mouseover", addcolor);
});

}






//Erase button will reset painted blocks
const eraseButton = document.querySelector(".erasebutton");

function removepaint(){

    divarray.forEach(element => {
        element.className = "!onhover";
    });
}

eraseButton.addEventListener("click", removepaint);


