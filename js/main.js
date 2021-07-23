// setting colorVariables names
localStorage.setItem('colorname1', "قرمز");
localStorage.setItem('colorname2', "آبی");
localStorage.setItem('colorname3', "سبز");
localStorage.setItem('colorname4', "نارنجی");
localStorage.setItem('colorname5', "قهوه‌ای");
localStorage.setItem('colorname6', "سیاه");
localStorage.setItem('colorname7', "بنفش");

// setting colorVariables font-color
localStorage.setItem('fontcolor1', "red");
localStorage.setItem('fontcolor2', "blue");
localStorage.setItem('fontcolor3', "green");
localStorage.setItem('fontcolor4', "black");
localStorage.setItem('fontcolor5', "brown");
localStorage.setItem('fontcolor6', "orange");
localStorage.setItem('fontcolor7', "purple");

// Global Variables
var fontColor="", colorName="";

//random function
function randomItems () {
  let name,color, x=1, y=1;
  while ( x == y) {
    x = Math.floor(Math.random() * 5) + 1;
    y = Math.floor(Math.random() * 7) + 1;
  }
  name = "colorname" + x;
  color = "fontcolor" + y;
  colorName = localStorage.getItem(name);
  fontColor = localStorage.getItem(color);
}
function makingDivs () {
  for (var i = 0; i < 24; i++) {
    randomItems();
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.setAttribute('style', "color:" + fontColor + ";");
    p.innerHTML = colorName;
    div.appendChild(p);
    document.getElementById('main-container').appendChild(div);
  }

}
makingDivs ();
