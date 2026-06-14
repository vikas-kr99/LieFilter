const ClaimSchema = new mongoose.Schema({

    title:String,

    description:String,

    category:String,

    userEmail:String,

    status:{
        type:String,
        default:"Pending"
    }

});

module.exports =
mongoose.model("Claim", ClaimSchema);