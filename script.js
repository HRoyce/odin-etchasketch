// 4 x 4 grid mea 

//I need to generate an array/nodelist of pixel elements, then cycle through and add hover/unhover
// event listeners.

const canvas = document.getElementById("canvas");
const redButton = document.getElementById("redButton");
const blueButton = document.getElementById("blueButton");
const greenButton = document.getElementById("greenButton");
const randButton = document.getElementById("randButton");
const pixels25 = document.getElementById("pixels25");
const pixels64 = document.getElementById("pixels64");
const pixels100 = document.getElementById("pixels100");
const pixels225 = document.getElementById("pixels225");
let brushColor = 'RED';

//the input to this function will be the resolution/# of tiles, this will then determine the styling which
//handles the size of the pixel.

/*I can now tile the canvas with as many pixels as I want, now I need to set action listeners
on all of those pixels as they are created so that when the mouse hovers over them, their color changes to a 
random color generated at that time */

/*
create a variable mouse color which stores the color to paint on hover
then in the action handler for the pixel, change the css background color based on whatever the mouse
color var is, if it is random then generate a random hex value and paint the pixel that.
*/

redButton.addEventListener('click',() =>{
    brushColor = 'RED' //This goes into the listener for the pixel on hover color change
    redButton.classList.add('selected');
    greenButton.classList.remove('selected');
    blueButton.classList.remove('selected');
    randButton.classList.remove('selected');
});

greenButton.addEventListener('click',() =>{
    brushColor = 'GREEN' //This goes into the listener for the pixel on hover color change
    greenButton.classList.add('selected');
    redButton.classList.remove('selected');
    blueButton.classList.remove('selected');
    randButton.classList.remove('selected');
});
blueButton.addEventListener('click',() =>{
    brushColor = 'BLUE' //This goes into the listener for the pixel on hover color change
    blueButton.classList.add('selected');
    greenButton.classList.remove('selected');
    redButton.classList.remove('selected');
    randButton.classList.remove('selected');
});
randButton.addEventListener('click',() =>{
    brushColor = 'RAND' //This goes into the listener for the pixel on hover color change
    randButton.classList.add('selected');
    greenButton.classList.remove('selected');
    redButton.classList.remove('selected');
    blueButton.classList.remove('selected');
});

pixels25.addEventListener('click', () =>{
    console.log("Going to tile the canvas with 25 pixels");
    if(canvas.hasChildNodes){canvas.innerHTML = ""};
    tileTheCanvas(25);
});
pixels64.addEventListener('click', () =>{
    if(canvas.hasChildNodes){canvas.innerHTML = ""};
    tileTheCanvas(64);
});
pixels100.addEventListener('click', () =>{
    if(canvas.hasChildNodes){canvas.innerHTML = ""};
    tileTheCanvas(100);
});
pixels225.addEventListener('click', () =>{
    if(canvas.hasChildNodes){canvas.innerHTML = ""};
    tileTheCanvas(225);
});
let Red = '#ff0000';
let Blue = '#0000ff';
let Green = '#008000';
function randColor(){
    let color = Math.floor(Math.random()*16777215).toString(16);

    return '#' + color;
}
//I will need to add the random hex value generation function here. I'll also need to find a way to remove it.
function addHover(t){
    t.addEventListener('mouseover',() =>{
        if(brushColor == 'RED'){
            t.style.backgroundColor = Red;
        }
        else if(brushColor == 'BLUE'){
            t.style.backgroundColor = Blue;
        }
        else if(brushColor == 'GREEN'){
            t.style.backgroundColor = Green;
        }
        //the rand case
        else{
            t.style.backgroundColor = randColor();
        }
        // change the classlist add to background color set statements (cleaner code and is the only way
        //to make this work with the rand color situation.)
    });
}

function tileTheCanvas(tileCount) {
    switch(tileCount){
        case 25:
            console.log("Entered the case for 25");
            for(i = 0;i<tileCount; i++){
                console.log("Created pixel #" + (i+1));
                t = document.createElement("div");
                t.classList.add("pixels25");
                addHover(t);
                appendTile(t);
            } 
            break;
        case 64:
            for(i = 0;i<tileCount; i++){
                    t = document.createElement("div");
                    t.classList.add("pixels64");
                    addHover(t);
                    appendTile(t);
            } break;
        case 100:
            for(i = 0;i<tileCount; i++){
                    t = document.createElement("div");
                    t.classList.add("pixels100");
                    addHover(t);
                    appendTile(t);
            } break;
        case 225:
            for(i = 0;i<tileCount; i++){
                t = document.createElement("div");
                t.classList.add("pixels225");
                addHover(t);
                appendTile(t);
            } break;
        
    }
}
function appendTile(t){
    canvas.appendChild(t);
}
function colorTile( a ){
    a.addEventListener('mouseover',() =>{
        a.classList.add(brushColor);
    });
}

tileTheCanvas(25);