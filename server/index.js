const express = require('express');     // Set express as Node.js web application
const cors = require('cors');     
const app = express();
require('./DB/config');                 //db connected
const usersData = require('./DB/user');     

app.use(express.json());
app.use(cors());

app.post('/submit', async (req,resp)=>{
    let user = new usersData(req.body);
    let data = await user.save();       //this ll save data(dt ll come through req), to our database in expected collection which we hv mentioned in schema file
    
              data = data.toObject();

    console.log(data);
    resp.send(data);
});      
app.listen(4000); 