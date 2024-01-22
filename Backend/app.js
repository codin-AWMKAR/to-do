const express= require("express");
const app = express();
const cors = require ("cors")
require("./conn/conn");
const auth = require("./routes/auth");
const list = require("./routes/list");
const path = require("path");

app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "Frontend", "build")));
    res.sendFile(path.resolve(__dirname, "Frontend", "build", "index.html"));
  });
app.use(express.json());
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Hello");
});


app.use("/api/v1",auth);
app.use("/api/v2",list);
app.listen(1000, ()=>{
    console.log("Server Started");
})