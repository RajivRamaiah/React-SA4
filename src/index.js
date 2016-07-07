// change require to es6 import style
import $ from 'jquery';
import './style.scss';

let i = 1;

$('#main').html('You have been on this page for ${i} seconds!');

// var i = 1;
// setInterval( increment, 1000);
//
// function increment(){
//     i = i % 360 + 1;
//     $('#main').html('You have been on this page for ${i} seconds!');
// }

// var myVar = setInterval(myTimer, 1000);
//
// function myTimer() {
//     var i = 1
//     document.getElementById("demo").innerHTML = d.toLocaleTimeString();
//     $('#main').html('You have been on this page for ${i} seconds!');
// }
