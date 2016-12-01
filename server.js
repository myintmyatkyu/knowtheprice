var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname+'/views/';



router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/price",function(req,res){
  res.json("this gonna be oops route");
});

router.get("/api/price",function(req,res){
  res.json("viola");
});




app.use("/",router);
app.use("/price",router);
app.use("/api",router);
app.use('/views', express.static('views'))

app.listen(process.env.PORT || 5000);
