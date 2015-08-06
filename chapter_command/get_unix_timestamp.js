/**
 * Created by tyw on 15/8/4.
 */

var time = Math.round(new Date().getTime()/1000);//getTime()返回毫秒
console.log("time stamp:"+time);

console.log(Math.round(-1.6));//-2
console.log(Math.round(-1.5));//-1
console.log(Math.round(-1.4));//-1
console.log(Math.round(1.6));//2
console.log(Math.round(1.5));//2
console.log(Math.round(1.4));//1

var unixTimestamp = new Date(time * 1000);
commonTime = unixTimestamp.toLocaleString();
console.log(commonTime);//8/4/2015, 10:36:03 AM