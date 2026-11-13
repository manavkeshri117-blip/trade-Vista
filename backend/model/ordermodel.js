const{model}=require("mongoose");
const{orderschema}=require('../schema/orderschema');
const ordermodel=new model("order",orderschema);
module.exports={ordermodel};