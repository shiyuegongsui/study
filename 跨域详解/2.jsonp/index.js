let express= require('express');
let app=express();
app.use(express.static(__dirname));
app.get('/say',function(req,res){
    res.end("show({})");
});
app.listen(3000);