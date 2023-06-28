
const path = require("path")
const fs = require('fs');
const args = process.argv;
const directoryPath = path.join(__dirname)
let ourCase = args[2];
console.log(ourCase)
let str = args.filter((e,i)=>{
    return i>3
})
str = str.join(" ")
console.log(str)
switch(ourCase){
    case 'read' :
        return fs.readFile(args[3],'utf-8',(err,data)=>{
            console.log(data)
        });
     case 'create':
        return fs.open(args[3],'w',function(err,file){
            if(err)throw(err)
        });
     case 'append' :
        return fs.appendFile(args[3],str,function(err){
                if(err)throw(err);
        });
      case 'delete' :
        return fs.unlink(args[3],(err)=>{
            if(err)throw(err)
        });
      case 'rename' :
        return fs.rename(args[3],args[4],(err)=>{
            if(err)throw(err);
        });
      case 'list' :
        return fs.readdir(directoryPath,(err,files)=>{
            if(err){
                throw (err)
            }
            files.forEach((file)=>{
                console.log(file)
            })
        })
}

