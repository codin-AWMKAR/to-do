const mongoose = require("mongoose");

const conn = async (req,res) => {
    try{await mongoose.connect("mongodb+srv://omkaroneofakind:Loveyou3002@cluster0.uhxyqbr.mongodb.net/").then(()=>{
        console.log("Connected");
    });
}
    catch(error){
        res.status(400).json({
            message: "Not Connected",
        });
    }
};
conn();
