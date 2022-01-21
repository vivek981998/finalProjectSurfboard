const express = require('express');
const server = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/final.html'));
  
  });
  
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/user.html'));

  });
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/call.html'));

  });

  router.get('/user',function(req,res){
    res.sendFile(path.join(__dirname+'/userdata.html'));
    });
  
  
     
      server.use('/', router);
     server.listen(process.env.port || 8000);     
     console.log('Running at Port 8000');
