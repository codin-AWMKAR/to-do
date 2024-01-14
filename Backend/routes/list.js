const router = require("express").Router();
const User = require("../models/user");
const List = require ("../models/list");
const list = require("../models/list");
//Create
router.post("/addTask", async (req, res) => {
  try {
    const { title, body, id } = req.body;
    const existingUser = await User.findById(id);
    if (existingUser) {
      const list = new List({ title, body, user: existingUser });
      await list.save();
      existingUser.list.push(list);
      await existingUser.save();
      res.status(200).json({ list });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


//update

router.put("/updateTask/:id", async (req, res) => {
  try {
    const { title, body } = req.body;
    const list = await List.findByIdAndUpdate(req.params.id, { title, body });
    if (!list) {
      return res.status(404).json({ message: "Task not found" });
    }
    await list.save();
    res.status(200).json({ message: "Task Updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//delete
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { id } = req.body;
    const existingUser = await User.findByIdAndUpdate(id, { $pull: { list: req.params.id } });
    if (existingUser) {
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Task Deleted" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


//getTask
router.get("/getTasks/:id",async(req,res)=>{
  const list = await List.find({user: req.params.id}).sort({createdAt:-1});
  if(list.length !== 0){
    res.status(200).json({list:list});
  }
  else{
    res.status(200).json({message:"No Tasks"});
  }
})

module.exports = router;