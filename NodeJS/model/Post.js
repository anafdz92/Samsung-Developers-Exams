const mongoose=require('mongoose');

const UserSchema= mongoose.Schema({
    name:String,
    phone:Number

})

module.exports=mongoose.model('Posts', UserSchema)