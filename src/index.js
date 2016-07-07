// change require to es6 import style
import $ from 'jquery';
import './style.scss';

var i = 1;

var interval = setInterval( increment, 1000);

function increment(){
    i = i % 360 + 1;
    $('#main').html(`You have been on this page for ${i} seconds!`);
}
