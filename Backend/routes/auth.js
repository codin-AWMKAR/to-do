const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

//SIGN UP

router.post("/register",async (req,res) =>
{
    try {
        const {email,username,password} = req.body;
        const hashpassword = bcrypt.hashSync(password);
        const user = new User({email,username,password:hashpassword});
        await user.save().then(()=>res.status(200).json({message:"Sign Up Successfull"}))
    } 
    catch (error) {
        
        res.status(200).json({
            message:"User Already Exists"
        })
    }
});

//SIGN IN
router.post("/signin", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(200).json({
                message: "Please Sign Up First"
            });
        }

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        
        if (isPasswordCorrect) {
            return res.status(200).json({
                message: "Please Enter Correct Password"
            });
        }
        // console.log('Entered Password:', password);
        // console.log('Stored Password:', user.password);

        const { password, ...others } = user._doc;
        res.status(200).json({
            others
        });
    } catch (error) {
        res.status(200).json({
            message: "Error occurred during sign-in"
        });
    }
});



module.exports = router;