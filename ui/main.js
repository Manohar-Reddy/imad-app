console.log('Loaded!');

// chamge the text of main-text div
var element = document.getElementById('main-text'
);
element.innerHTML = 'New Value';

// Move the  image
var img = document.getElementById('madi');
var marginleft = 0;
function moveRight () {
    marginleft = marginleft + 1;
    img.style.marginleft = marginleft + 3;
}
img.onclick = function() {
    var interval = setInterval(moveRight,50);  
};