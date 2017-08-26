console.log('Loaded!');

// chagge the text of main-text div
var element = document.getElementById('main-text'
);
element.innerHTML = 'New Value';

// Move the  image
var img = document.getElementById('madi');
var marginleft = 0;
function moveRight () {
    marginleft = marginleft + 10;
    img.style.marginleft = marginleft + 'px';
}
img.onclick = function() {
    img.style.marginLeft = '100px';
    var interval = setInterval(moveRight,50);  
};
