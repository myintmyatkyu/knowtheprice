var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname+'/views/';



router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});




app.use("/",router);
app.use('/views', express.static('views'))

app.listen(process.env.PORT || 5000);
