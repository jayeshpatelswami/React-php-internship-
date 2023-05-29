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
app.get("/api/get/:id",(req,res)=>{
    const { id } =req.params; 
    const sqlgetone = "SELECT * FROM `internship` WHERE `id` = ?";
    db.query(sqlgetone,id,(err,result)=>{
        if (err) {
            console.log(err);
        }
        res.send(result)
    })  
})

app.put("/api/update/:id",(req,res)=>{
    const { id } =req.params; 
    const {name , email, contect} = req.body;
    const sqlUpdate = "UPDATE `internship` SET `name` = ?, `email` = ? , `contect` = ?  WHERE `internship`.`id` = ?;";
    db.query(sqlUpdate,[name ,email ,contect ,id ],(err,result)=>{
        if (err) {
            console.log(err);
        }
        res.send(result)
    })
})



app.post("/api/add",(req,res)=>{
    const {name , email, contect} = req.body;
    const sqlInsert  = "INSERT INTO `internship` (`id`, `name`, `email`, `contect`, `creted_at`) VALUES (NULL , ? , ? , ? ,  current_timestamp() )";
    db.query(sqlInsert , [name ,email ,contect ],(err,result)=>{
       if (err) {
        console.log(err);
       }
    })
})
app.delete("/api/remove/:id",(req,res)=>{
    const {id} = req.params;
    const sqldelete  =  "DELETE FROM `internship` WHERE id = ?"
    db.query(sqldelete , id,(err,result)=>{
       if (err) {
        console.log(err);
       }
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
