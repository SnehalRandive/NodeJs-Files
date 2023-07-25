const fs = require('fs');
const http = require('http');

 http.createServer((req,res)=>{
    //Rename the file
    // fs.rename('file4.txt','file2.txt',(err)=>{
    //     if (err)throw err
    //     console.log("file updated");
    //     return res.end();
    // })




    //overide file
    // fs.writeFile('file4.txt',"This is Writefile method",(err)=>{
    //     if (err)throw err
    //     console.log("file Updated");
    //      return res.end();
    // })



    //file Opening
    // fs.open('server.js','r',(err)=>{
    //     if (err)throw err
    //     console.log("file Opened");
    //     return res.end();
    // })



    // Deleting existing file 
    // fs.unlink('index.html',(err)=>{
    //     if (err)throw err
    //     console.log("file Deleted");
    //     return res.end();

    // })



    // //Append file
    // fs.appendFile('index.htm','<h1>This is append file</h1>',(err,data)=>{
    //     if (err)throw err
    //     console.log("file updated");
    //     return res.end();

    // })



    // Read File
    // // fs.readFile('server.js',(err, data)=>{
    // //     res.writeHead(200,{'content-type':'text/plain'});
    // //     res.write(data);
    // //     return res.end();


    // })

}).listen(4000)

 