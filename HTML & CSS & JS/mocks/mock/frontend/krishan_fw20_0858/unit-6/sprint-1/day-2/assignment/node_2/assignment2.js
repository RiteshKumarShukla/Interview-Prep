const fs = require('fs');
const path= require("path")
const args = process.argv;
const drname = path.join(__dirname);
console.log(drname);
// console.log(path.dirname(args[1]));
if(args[2]==='read'){
  let x=  fs.readFileSync(args[3],{encoding:'utf-8'})
//   console.log(x);
}
else if(args[2]==='append'){
     fs.appendFileSync(args[4],args[3]);
}
else if(args[2]==='delete'){
    fs.rmSync(args[3]);
}
else if (args[2]==='create'){
    fs.writeFileSync( args[3],args[4])
}
else if (args[2]==='rename'){
    fs.renameSync(args[3],args[4])
}
else if (args[2]==='list'){
    let x = fs.readdirSync(drname)
    x.forEach((e,i)=>{
        console.log(e);
    })
}

