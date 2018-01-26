$(document).ready(function(){
var memory = [];
var totalString;

var nine = $(".nine").click(function(){
console.log('9');
memory.push(9);
$(".display").append('9');
});

var eight = $(".eight").click(function(){
console.log('8');
memory.push(8);
$(".display").append('8');

});

var seven = $(".seven").click(function(){
console.log('7');
memory.push(7);
$(".display").append('7');

});


var six = $(".six").click(function(){
console.log('6');
memory.push(6);
$(".display").append('6');

});


var five = $(".five").click(function(){
console.log('5');
memory.push(5);
$(".display").append('5');

});

var four = $(".four").click(function(){
console.log('4');
memory.push(4);
$(".display").append('4');

});

var four = $(".three").click(function(){
console.log('3');
memory.push(3);
$(".display").append('3');

});

var two = $(".two").click(function(){
console.log('2');
memory.push(2);
$(".display").append('2');

});

var one = $(".one").click(function(){
console.log('1');
memory.push(1);
$(".display").append('1');

});

var zero = $(".zero").click(function(){
console.log('0');
memory.push(0);
$(".display").append('0');

});

// var decimal = $(".decimal").click(function(){
// console.log('.');
// memory.push(.);
// alert(memory);
// });

var clear = $(".clear").click(function(){
console.log(memory = []);
$(".display").html('');
return memory = [];
});

var divide = $(".divide").click(function(){
console.log('/');
memory.push('/');
$(".display").append('÷');

});

// var multipy = $(".multipy").click(function(){
// console.log('*');
// memory.push('*');
// });

var multipy = $(".minus").click(function(){
console.log('-');
memory.push('-');
$(".display").append('-');

});

var multipy = $(".plus").click(function(){
console.log('+');
memory.push('+');
$(".display").append('+');

});

var equals = $(".equals").click(function(){
totalString = memory.join('');
console.log(eval(totalString));
$(".display").text(eval(totalString));
});
});