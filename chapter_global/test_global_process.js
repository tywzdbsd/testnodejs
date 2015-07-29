/**
 * Created by tyw on 15/7/29.
 */
//process.stdin.resume();
//process.stdin.on("data",function(data){
//    process.stdout.write('read from console: ' + data.toString());
//})
//process.stdin.on("exit",function(data){
//    process.stdout.write('==exit==');
//})
function somethingComplicated(arg){
    //var startTime,endTime;
    //var d=new Date();
    //startTime=d.getTime();
    setTimeout(function(){
        console.log("somethingComplicated ok arg="+arg+" time:"+new Date());
    },5000);
    //d=new Date();
    //endTime=d.getTime();
    //var time = (endTime-startTime)/1000;
    //console.log("somethingComplicated time is"+time+"s");
};

function compute(){
    setTimeout(function(){
        console.log("computeing ok;time is"+new Date());
    },5000);
};

function doSomething(arg,callback){
    somethingComplicated(arg);
    //callback(); //回调函数
    process.nextTick(callback); //改写后的程序会把上面耗时的操作拆分为两个事件，减少每个事件的执行时间，提高事件响应速度。
}

doSomething("1+1",function onEnd(){
    compute();
});