module.exports.errorHandler=(err,req,res,next)=>{
  if(res.headersSend){
    return;
  }
  res.status(err.status ?? 500).send({message: err.message ?? 'Server Error'});
};