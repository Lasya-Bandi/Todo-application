var express = require("express");
var app = express();
var port = 3000;

mongoose = require('mongoose'), 
Schema = mongoose.Schema,
priority = ['low', 'normal', 'high', 'critical'],
logtype = ['information', 'warning' ,'error'];

mongoose.connect('mongodb://localhost:27017/logs');

logItem = new Schema({
   priority  : Number,
   logtype   : Number,
   datetime  : Date,
   msg       : String
});


mongoose.model('logItem', logItem);
console.log("Log saved on " + Date())
app.get('/', (req, res)=>{
  res.send("Log saved on " + Date());
  console.log("Log saved on " + Date());  

  var reqQuery = req.query;
  var logItem = mongoose.model('logItem');
  new logItem({    
    datetime: Date(),
    priority: (pr >= 0 ? pr : 0),
    logtype: (type >= 0 ? type : 0),
    msg: reqQuery["msg"]})
  .save();

  var pr = priority.indexOf(reqQuery["priority"])
  var type = logtype.indexOf(reqQuery["type"]);

  new logItem({datetime: Date(), priority: (pr >= 0 ? pr : 0), logtype: (type >= 0 ? type : 0), msg: reqQuery["msg"]}).save();
});

/*app.post("/addname", (req, res) => {
  var myData = new User(req.body);
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});*/

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
