
const {name}=require('../models/name.js');

const postInfo=(req,res)=>{
    let info=new name({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message,
    });
    name.findOne({"email":req.body.email}).exec((error, e)=>{
        if(error){
            res.status(500).json(error);
        }else if(e){
            res.status(500).json({
                message:'Already exists',
            });
        }else{
            info.save()
            .then(result=>{
                res.json({
                    data:info,
                    url:`/api/v1/info/${info.email}`
                })
            })
            .catch(error=>{
                res.status(500).json(error);
            });
        }
    });
}


const getInfo=(req,res)=>{
    name.find().select("name _id").exec()
    .then(results=>{
        res.json(results);
    })
    .catch(error=>{
        res.status(500).json(error);
    });
}

const getAllInfo=(req,res)=>{
    name.find({'email':req.params.email}).exec()
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
    getAllInfo, 
    getInfo, 
    postInfo
}