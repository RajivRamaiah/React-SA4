// change require to es6 import style
import $ from 'jquery';
import './style.scss';

// The following code was inspired by http://stackoverflow.com/questions/10586890/increment-integer-by-1-every-1-second
let num = 1;
setInterval(increment, 1000);

function increment(){
    num = num % 360 + 1;
    $('#main').html(`You have been on this page for ${num} seconds!`);
}
