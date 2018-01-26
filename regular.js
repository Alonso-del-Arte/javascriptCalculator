$(document).ready(function(){
var memory = [];
var totalString;

var nine = $(".nine").click(function(){
console.log('9');
memory.push(9);
$(".display").html('9');
});

var eight = $(".eight").click(function(){
console.log('8');
memory.push(8);
$(".display").html('8');

});

var seven = $(".seven").click(function(){
console.log('7');
memory.push(7);
$(".display").html('7');

});


var six = $(".six").click(function(){
console.log('6');
memory.push(6);
$(".display").html('6');

});


var five = $(".five").click(function(){
console.log('5');
memory.push(5);
$(".display").html('5');

});

var four = $(".four").click(function(){
console.log('4');
memory.push(4);
$(".display").html('4');

});

var four = $(".three").click(function(){
console.log('3');
memory.push(3);
$(".display").html('3');

});

var two = $(".two").click(function(){
console.log('2');
memory.push(2);
$(".display").html('2');

});

var one = $(".one").click(function(){
console.log('1');
memory.push(1);
$(".display").html('1');

});

var zero = $(".zero").click(function(){
console.log('0');
memory.push(0);
$(".display").html('0');

});

// var decimal = $(".decimal").click(function(){
// console.log('.');
// memory.push(.);
// alert(memory);
// });

var clear = $(".clear").click(function(){
console.log(memory = []);
return memory = [];
$(".display").html('');
});

var divide = $(".divide").click(function(){
console.log('/');
memory.push('/');
$(".display").html('÷');

});

// var multipy = $(".multipy").click(function(){
// console.log('*');
// memory.push('*');
// });

var multipy = $(".minus").click(function(){
console.log('-');
memory.push('-');
$(".display").html('-');

});

var multipy = $(".plus").click(function(){
console.log('+');
memory.push('+');
$(".display").html('+');

});

var equals = $(".equals").click(function(){
totalString = memory.join('');
console.log(eval(totalString));
$(".display").append(eval(totalString));
});
});