$(document).ready(function(){
var memory = [];

var nine = $(".nine").click(function(){
console.log('9');
memory.push(9);
alert(memory);
});

var eight = $(".eight").click(function(){
console.log('8');
memory.push(8);
alert(memory);
});

var seven = $(".seven").click(function(){
console.log('7');
memory.push(7);
alert(memory);
});


var six = $(".six").click(function(){
console.log('6');
memory.push(6);
alert(memory);
});


var five = $(".five").click(function(){
console.log('5');
memory.push(5);
alert(memory);
});

var four = $(".four").click(function(){
console.log('4');
memory.push(4);
alert(memory);
});

var four = $(".three").click(function(){
console.log('3');
memory.push(3);
alert(memory);
});

var two = $(".two").click(function(){
console.log('2');
memory.push(2);
alert(memory);
});

var one = $(".one").click(function(){
console.log('1');
memory.push(1);
alert(memory);
});

var zero = $(".zero").click(function(){
console.log('0');
memory.push(0);
alert(memory);
});

// var decimal = $(".decimal").click(function(){
// console.log('.');
// memory.push(.);
// alert(memory);
// });

var clear = $(".clear").click(function(){
console.log(memory = []);
return memory = [];
alert(memory = []);
});

var divide = $(".divide").click(function(){
console.log('/');
memory.push('/');
alert(memory);
});

var multipy = $(".multipy").click(function(){
console.log('*');
memory.push('*');
alert(memory);
});

var multipy = $(".minus").click(function(){
console.log('-');
memory.push('-');
alert(memory);
});

var multipy = $(".plus").click(function(){
console.log('+');
memory.push('+');
alert(memory);
});

var equals = $(".equals").click(function(){
console.log('=');
memory.push('=');
alert(memory);
});
});