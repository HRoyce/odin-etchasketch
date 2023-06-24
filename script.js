// 4 x 4 grid means 16 squares at 25% size 

//I need to generate an array/nodelist of pixel elements, then cycle through and add hover/unhover
// event listeners.

const canvas = document.getElementById("canvas");
let brushColor;

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

function tileTheCanvas(tileCount) {
    switch(tileCount){
        case 25:
        
            for(i = 0;i<tileCount; i++){
                t = document.createElement("div");
                t.classList.add("pixel25")
                createTile(t);
            } break;

        case 64:
            for(i = 0;i<tileCount; i++){
                t = document.createElement("div");
                t.classList.add("pixel64")
                createTile(t);
            } break;
        case 100:
            for(i = 0;i<tileCount; i++){
                t = document.createElement("div");
                t.classList.add("pixel100");
                createTile(t);
            } break;
        case 225:
            for(i = 0;i<tileCount; i++){
                t = document.createElement("div");
                t.classList.add("pixel225");
                createTile(t);
            } break;
    }
}
function createTile(t){
    canvas.appendChild(t);
}

tileTheCanvas(225);