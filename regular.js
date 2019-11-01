/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function(){
var memory = [];
var totalString;
    
    function processKey(evalChar, displayChar) {
        memory.push(evalChar);
        $("#display").append(displayChar)
    }
    
//    $(document).keyup = function(e) {
//        let key = Number(e.key)
//        if (isNaN(key) || e.key === null) {
//            //
//        } else {
//            console.log(key)
//        }
//    }

var nine = $("#nine").click(function(){processKey('9', '9')});

var eight = $("#eight").click(function(){processKey('8', '8')});

var seven = $("#seven").click(function(){processKey('7', '7')});


var six = $("#six").click(function(){processKey('6', '6')});


var five = $("#five").click(function(){processKey('5', '5')});

var four = $("#four").click(function(){processKey('4', '4')});

var four = $("#three").click(function(){processKey('3', '3')});

var two = $("#two").click(function(){processKey('2', '2')});

var one = $("#one").click(function(){processKey('1', '1')});

var zero = $("#zero").click(function(){processKey('0', '0')});

var decimal = $("#decimal").click(function(){processKey('.', '.')});

var clear = $("#clear").click(function(){
$("#display").html('');
return memory = [];
});

var divide = $("#divide").click(function(){processKey('/', '÷')});

var multiply = $("#multiply").click(function(){processKey('*', '*')});

var minus = $("#minus").click(function(){processKey('-', '-')});

var plus = $("#plus").click(function(){processKey('+', '+')});

var equals = $("#equals").click(function(){
totalString = memory.join('');
$("#display").text(eval(totalString));
});
});
