const fs = require('fs');

// reading files
// fs.readFile('./docs/Text.txt',(err,data)=>{
//     if (err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log(`last line`)

// writing files

// fs.writeFile('./docs/Text.txt',"hello world",()=>{
//     console.log('File was written');
// });

// fs.writeFile('./docs/Text2.txt',"hello, again!",()=>{
//     console.log('File was written');
// });


//directories

if (fs.existsSync('./assets')){
fs.mkdir('./assets',(err)=>{
    if (err){
        console.log(err);
    }
    console.log(`folder created`);
});
}else {
    fs.rmdir('./assets',(err)=>{
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}



// deleting files


if (fs.existsSync('./docs/deletme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if (err) {
            console.log(err);
        }
        console.log('file Created')
    })
}