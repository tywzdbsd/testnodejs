/**
 * Created by tyw on 15/7/29.
 */
var fs = require('fs');

//fs.readFile('content.txt','utf-8',function(err,data){
//    if(err){
//        console.error(err);
//    }else{
//        console.log(data);
//    }
//});

fs.open('content.txt','r',function(err,fd){
    if(err){
        console.error(err);
        return;
    }
    var buf =new Buffer(8);
    fs.read(fd,buf,0,8,null,function(err,bytesRead,buffer){
        if(err){
            console.error(err);
            return;
        }
        console.log('bytesRead:'+bytesRead);
        console.log(buffer);
    });
});
//一般来说，除非必要，否则不要使用这种方式读取文件，因为它要求你手动管理缓冲区 和文件指针，尤其是在你不知道文件大小的时候，这将会是一件很麻烦的事情。