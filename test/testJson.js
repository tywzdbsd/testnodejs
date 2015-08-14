/**
 * Created by tyw on 15/8/6.
 */
//Stringify
var jsonobj = {
    'r': function () {
        console.log("r function");
    }
}
var jsonstr = JSON.stringify(jsonobj);
console.dir(jsonstr);
var jsonstrtoobj = JSON.parse(jsonstr);
console.dir(jsonstrtoobj);


var j = {a: 'b'};
console.dir('ttt' + j);

//setJson have list
var jsonhavelist = {photo_id:[1,2,3],b:{c:'d'}};
console.log('photo_id[0]=' + jsonhavelist.photo_id[0]);
console.log('photo_id[1]=' + jsonhavelist.photo_id[1]);
console.log('photo_id[2]=' + jsonhavelist.photo_id[2]);