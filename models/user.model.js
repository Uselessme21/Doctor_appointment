const mongoose=require("mongoose");

const userSchema= mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
      },
      confirmPassword: {
        type: String,
        required: true,
      }, 
})
// Create a Mongoose model
const User = mongoose.model('User', userSchema);

module.exports=User