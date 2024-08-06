const express = require('express');
const app = express();

const users = [{
    name : "john",
    kidneys: [{
        healthy : false
    }]
}];

app.use(express.json());

app.get("/", function(req,res){
    const johnkidneys = users[0].kidneys;
    const numberofkidneys = johnkidneys.length;
    let numberofhealthykidneys = 0;
    for(let i = 0; i < johnkidneys.length; i++){
        if(johnkidneys[i].healthy){
            numberofhealthykidneys += 1;
        }
    }
    const numberofUnhealthykidneys = numberofkidneys - numberofhealthykidneys;
    res.json({
        numberofkidneys,
        numberofhealthykidneys,
        numberofUnhealthykidneys
    })
})


app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy; 
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.listen(3003);