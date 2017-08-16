console.log('Loaded!');

// chamge the text of main-text div
var element = document.getElementById('main-text'
);
element.innerHTML = 'New Value';

// Move the new image
var img = document.getElementById('madi');
img.onclick = function() {
  img.style.marginleft = '100px';  
};