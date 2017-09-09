console.log('Loaded!');

//change the text of the main-text div
var element = document.getElementById('main-text'
);
element.innerHTML = 'New value';
//Move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 1;
    
  img.style.marginleft = marginLeft + 'px';
}
img.onclick = function () {
    var internal = setInterval(moveRight,50);
}