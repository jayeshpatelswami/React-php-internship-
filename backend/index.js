const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors");

const mysql =require("mysql2");

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"internship"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

const port =  5000;

app.get("/api/get",(req,res)=>{
    const sqlget = "SELECT * FROM `internship`";
    db.query(sqlget,(err,result)=>{
        res.send(result)
    })
})


app.get("/",(req,res)=>{
    // const sqlinsert = "INSERT INTO `internship` (`id`, `emali`, `title`, `description`, `creted_at`) VALUES (NULL, 'kalu@j.com', 'title of jayesh', 'internship', current_timestamp())"
    // db.query(sqlinsert,(err,result)=>{
    //     console.log("error",err);
    //     console.log("result",result);
    // })
    res.send("hello")
})


app.listen(port, ()=>{
    console.log(`server is running ob port : ${port}`);
})
