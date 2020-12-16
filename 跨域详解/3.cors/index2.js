let express= require('express');
let app=express();
app.use(express.static(__dirname));
let whiteList=['http://127.0.0.1:3000'];


app.post('/say',function(req,res){
    let origin=req.headers.origin;
    if(whiteList.includes(origin)){
        res.setHeader('Access-Control-Allow-Origin',origin);
    }
    res.end('我是4000的返回值');
});


app.get('/say',function(req,res){
    let origin=req.headers.origin;
    if(whiteList.includes(origin)){
        res.setHeader('Access-Control-Allow-Origin',origin);
    }
    res.end('我是4000的返回值');
});

app.listen(4000);
