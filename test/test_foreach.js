/**
 * Created by tyw on 15/8/17.
 */
var keys = ['a','b','c'];
keys.forEach(function (e) {
    console.log(e);
});
for(var e in keys){
    console.log(keys[e]);
}