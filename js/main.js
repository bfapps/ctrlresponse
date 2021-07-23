// setting colorVariables names
localStorage.setItem('colorname1', "red");
localStorage.setItem('colorname2', "blue");
localStorage.setItem('colorname3', "green");
localStorage.setItem('colorname4', "orange");

// setting colorVariables font-color
localStorage.setItem('fontcolor1', "red");
localStorage.setItem('fontcolor2', "blue");
localStorage.setItem('fontcolor3', "green");
localStorage.setItem('fontcolor4', "orange");

// Global Variables
var fontColor="", colorName="";

//random function
function randomItems () {
  let name,color, x= 1, y = 1;
  while ( x == y) {
    x = Math.floor(Math.random() * 4) + 1;
    y = Math.floor(Math.random() * 4) + 1;
  }
  name = "colorname" + x;
  color = "fontcolor" + y;
  colorName = localStorage.getItem(name);
  fontColor = localStorage.getItem(color);
}
function makingDivs () {
  randomItems();
  alert(colorName + fontColor);
}
makingDivs ();
