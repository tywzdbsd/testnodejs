/**
 * Created by tyw on 15/7/28.
 */
function say(word){
    console.log(word);
}
function execute(someFunction,value){
    someFunction(value);
}
execute(function(word){
    console.log(word);
},"Hello noname function!");
