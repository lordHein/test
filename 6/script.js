// 'use strict';


// var div = document.getElementById('playground');
// console.log (div);

var a = document.querySelector('a');
var oldHref = a.getAttribute ('href');

a.setAttribute('href', 'https://soundcloud.com');
a.textContent = 'SoundC';
a.setAttribute ('title', 'suka');


var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');

box1.classList.add('red');
var hasClass = box2.classList.contains('blue');
console.log(hasClass);

if (hasClass) {
	box2.classList.remove('blue')	 ;
}else{
	box2.classList.add('blue');

}







