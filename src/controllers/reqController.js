
const {request}=require('../models/request.js');

const {name}=require('../models/name.js');

const postReq=(req,res)=>{
    name.findOne({"email":req.body.email}).exec((error, name)=>{
        if(error){
            res.status(500).json(error);
        }else if(name){
            let a1=new request(req.body);
            a1.save(error=>{
            if(error){
                res.status(500).json(error);
            }else{
                name.request.push(a1._id);
                res.status(201).json({
                    message:'created successfully',
                    statement:a1.statement
                });
                name.save(error=>{
                    if(error){
                        res.status(500).json(error);
                    }else{
                        res.status(201).json({
                            message:'created successfully',
                            data:name
                        });
                    }
                });
            }
            });
        }else{
            res.status(500).json({
                message:'Email not found',
            });
        }
});
}


const getReq=(req,res)=>{
    request.find().exec()
    .then(results=>{
        res.json(results);
    })
    .catch(error=>{
        res.status(500).json(error);
    });
}

const getAllReq=(req,res)=>{
    request.find({'email':req.params.email}).exec()
    .then(results=>{
        res.json({
            data: results
        });
    })
    .catch(error=>{
        res.status(500).json(error);
    });
}
module.exports={
    getAllReq, 
    getReq, 
    postReq
}