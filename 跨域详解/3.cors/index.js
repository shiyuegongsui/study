let express= require('express');
let app=express();
app.use(express.static(__dirname));

app.use(function(req,res,next){
    res.setHeader('max-age','3600 public');
    next();
})


app.post('/say',function(req,res){
    res.end('我是3000的返回值');
});
app.listen(3000);
