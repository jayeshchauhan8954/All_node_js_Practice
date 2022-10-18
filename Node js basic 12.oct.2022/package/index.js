let fs = requrire("fs");
fs.readFile("./test.txt","utf-8",function(err,data){
    console.log(data);
})