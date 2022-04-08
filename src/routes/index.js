const router = require('express').Router({mergeParams:true});

const infoRouter=require('./info.js');
const reqRouter=require('./req.js');

router.use('/', infoRouter);
router.use('/', reqRouter);

module.exports = router;