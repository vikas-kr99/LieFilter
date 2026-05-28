const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const app = express();

/* MIDDLEWARE */

app.use(cors());

app.use(express.json());

/* DATABASE CONNECT */

mongoose.connect(
    "mongodb://127.0.0.1:27017/liefilter"
)

.then(() => console.log("MongoDB Connected"))

.catch(err => console.log(err));

/* MODEL */

const Claim = require("./models/Claim");

/* ADD CLAIM */

app.post("/add-claim", async(req,res) => {

    try{

        const newClaim =
            new Claim(req.body);

        await newClaim.save();

        res.json({
            message:"Claim Added"
        });

    }catch(error){

        res.json({
            message:error
        });
    }

});

/* GET CLAIMS */

app.get("/claims", async(req,res) => {

    const claims =
        await Claim.find();

    res.json(claims);

});
/* VERIFY CLAIM */

app.put("/verify-claim/:id",
async(req,res) => {

    try{

        await Claim.findByIdAndUpdate(

            req.params.id,

            {
                status:req.body.status
            }

        );

        res.json({
            message:"Claim Verified"
        });

    }catch(error){

        res.json({
            message:error
        });
    }

});

/* DELETE CLAIM */

app.delete("/delete-claim/:id",
async(req,res) => {

    try{

        await Claim.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message:"Claim Deleted"
        });

    }catch(error){

        res.json({
            message:error
        });
    }

});

/* TEST ROUTE */

app.get("/", (req,res) => {

    res.send("LieFilter Backend Running");

});

/* SERVER */

app.listen(5000, () => {

    console.log("Server Running on Port 5000");

});