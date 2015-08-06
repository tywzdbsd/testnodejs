/**
 * Created by tyw on 15/8/3.
 */
var a ={name : 'nswbmwm 1'};
var b = a;

console.log(a);
console.log(b);

b.name = 'nswbmw 2';
console.log(a);
console.log(b);

var b = {name:'nswbmw 3'};
console.log(a);
console.log(b);

//b是a的引用，b.attr改变了a.attr也改变，但是b用一个新地址覆盖之后则改b不会改变a
//output:
//{ name: 'nswbmwm 1' }
//{ name: 'nswbmwm 1' }
//{ name: 'nswbmw 2' }
//{ name: 'nswbmw 2' }
//{ name: 'nswbmw 2' }
//{ name: 'nswbmw 3' }

