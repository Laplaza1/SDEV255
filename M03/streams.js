const fs = require('fs');

const readStream = fs.createReadStream('./docs/Text.txt',{encoding:'utf8'});
const writeStream = fs.createWriteStream('./docs/Text4.txt')


// readStream.on('data',(chunk)=>{
//     console.log('--new chunk ---');
//     console.log(chunk);
//     writeStream('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

readStream.pipe(writeStream);