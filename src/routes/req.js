const router = require('express').Router({mergeParams:true});

const { getAllReq, getReq, postReq}= require('../controllers/reqController.js');

router.get('/req',getReq);
router.get('/allReq/:email',getAllReq);
router.post('/req',postReq);

module.exports=router;