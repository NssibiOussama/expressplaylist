function log1 (req,res,next){
    console.log("Oussama Nssibi")
    next()
}

function log2(req,res,next){
    console.log("Nssibi Oussama")
    next()
}
module.exports =  log2