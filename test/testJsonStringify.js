/**
 * Created by tyw on 15/8/6.
 */
var jsonobj = {'r':function(){
    console.log("r function");
}}
var jsonstr = JSON.stringify(jsonobj);
console.dir(jsonstr);
var jsonstrtoobj = JSON.parse(jsonstr);
console.dir(jsonstrtoobj);


var j = {a:'b'};
console.dir('ttt'+j);