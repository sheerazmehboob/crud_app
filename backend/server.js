const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sherry@123",
    database: "crud_app"
})

db.connect(function(err){
    if(err)
    {
        console.log("Database Connection Failed!");
        throw err;
    }
    else
    {
        console.log("Database Connected!");
    }
})


app.get("/", (req, res) => {
    const QUERY = "SELECT * FROM crud_app.student;";
    db.query(QUERY, (err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    });
})

app.post('/create', (req, res) => {
    const QUERY = "INSERT INTO student (`Name`, `Email`) VALUES (?)";
    const values = [req.body.Name, req.body.Email]
    db.query(QUERY, [values],(err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
})


app.put('/update/:id', (req, res) => {
    const QUERY = "UPDATE student SET `Name` = ?,  `Email` = ? where ID = ?";
    const values = [req.body.Name, req.body.Email]
    const id = req.params.id;
    db.query(QUERY, [...values, id],(err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
})



app.delete('/student/:id', (req, res) => {
    const QUERY = "DELETE FROM student where ID = ?";
    const id = req.params.id;
    db.query(QUERY, [id],(err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
})


app.listen(5000, () => {
    console.log("Listening At 5000");
})