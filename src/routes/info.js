const router = require('express').Router({mergeParams:true});

const { getAllInfo, getInfo, postInfo}= require('../controllers/infoController.js');

router.get('/info',getInfo);
router.get('/allInfo/:email',getAllInfo);
router.post('/info',postInfo);

module.exports=router;