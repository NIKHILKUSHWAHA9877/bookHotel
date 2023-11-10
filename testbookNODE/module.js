// module is basically a file for example we made any file like index.js etc are called local module
//core module are inbuilt part of our program like things are already made like touppercase , tostring (means we are not required to made by self)
//third party module (which are required to download extrenally like packages etc)
// module are files which contains some set of instructions through which we can apply any logic or function its three type are = local module, core module , thrird party module; 



//***********OS Module ***********
const callfromHttp=require('./NodeCall')
const callfromRequest=require('./Request')

const http=require('http')


http.createServer((req,res)=>{
    if(req.url==='/request'){
        callfromRequest.callApi(function(response){
            res.write(JSON.stringify(response))
            res.end()
        })
    }
    else if(req.url==='/node'){
        callfromHttp.callApi(function(response){
            res.write(response);
            res.end()
        })
    }
}).listen(3100)

console.log('server is listening');

const https=require('https')
// const external_api='https://jsonplaceholder.typicode.com/posts'
// const external_api='https://www.google.com'
// const external_api='https://www.bing.com'
const external_api='https://www.linkedin.com'


const callfromHttp=(callback)=>{
    https.get(external_api,(resp)=>{
        let data='';
        resp.on('data',(chunk)=>{
            data+=chunk
        });

        resp.on('end',()=>{
            return callback(data)
        });
        
    }).on('error',(err)=>{
        console.log("error"+err.name);
    })
}


module.exports.callApi=callfromHttp


const request=require('request')
// const external_api='https://jsonplaceholder.typicode.com/posts'
// const external_api='https://www.google.com'
// const external_api='https://www.bing.com'
const external_apii='https://www.linkedin.com'

const callfromRequest=(callback)=>{
    request(external_api,{json:true},(err,res,body)=>{
        if(err){
            return callback(err)
        }
        else{
            console.log(body);
            return callback(body)
        }
       
    })
}

module.exports.callApi=callfromRequest