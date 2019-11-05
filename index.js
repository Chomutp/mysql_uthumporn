const express =require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0814074095',
  database: 'boatrental',

})

db.connect()

//localhost:3001/boats
app.get('/boats',(req,res)=>{
  let query = "SELECT  * FROM boats"
  db.query(query,(err,results)=>{
    res.json(results)
  })
})


//localhost:3001/addboat?bid=110&bname=jackson&color=yellow
app.get('/addboat',(req,res)=>{
  let query = `INSERT INTO boats(bid,bname,color) values(${req.query.bid},\"${req.query.bname}\",\"${req.query.color}\")`
  db.query(query,(err,result)=>{
    if(err){

      console.log("something wrong!")
    }else{
      res.send("success")
    }
  })
})


//localhost:3001/deleteboatbyid?deleteboatid=109
app.get('/deleteboatbyid',(req,res)=>{
  let query = `DELETE FROM boats WHERE bid = ${req.query.deleteboatid}`
  db.query(query,(err,results)=>{
    if(err){
      console.log(err)
    }else{
      res.send(`delete boat id: ${req.query.deleteboatid} already.`)
    }
  })

})


app.get('/updateboatbyid',(req,res)=>{
  let query = `UPDATE boats SET bname = '${req.query.bname}',color = '${req.query.color}' WHERE bid = '${req.query.bid}'` 
  db.query(query,(err,results)=>{
    if(err){
      console.log(err)
    }else{
      res.send(`update boat id: ${req.query.bid} already.`)
    }
  })

})


//-----------------------------------sailors--------------------------------
app.get('/sailors',(req,res)=>{
  let query = "SELECT  * FROM sailors"
  db.query(query,(err,results)=>{
    res.json(results)
  })
})

//localhost:3001/addsailor?sid=46&sname=chom&rating=9&age=22
app.get('/addsailor',(req,res)=>{
  let query = `INSERT INTO sailors(sid,sname,rating,age) values(${req.query.sid},\"${req.query.sname}\",${req.query.rating},${req.query.age})`
  db.query(query,(err,results)=>{
    if(err){
      console.log("Something wrong!")
    }else{
      res.send("success")
    }
  })
})



//localhost:3001/deletesailor?deletesailorid=
app.get('/deletesailor',(req,res)=>{
  let query = `DELETE FROM sailors WHERE sid = ${req.query.deletesailorid}`
  db.query(query,(err,results)=>{
    if(err){
      console.log(`Delete sailor id: ${req.query.deletesailorid} already.`)
    }else{
      res.send(`delete boat id: ${req.query.deleteboatid} already.`)
    }
  })
})


app.get('/updatesailor',(req,res)=>{
  let query = `UPDATE sailors SET sname = '${req.query.sname}',rating = '${req.query.rating}',age = '${req.query.age}' WHERE sid = '${req.query.sid}'` 
  db.query(query,(err,results)=>{
    if(err){
      console.log(err)
    }else{
      res.send(`update sailorid: ${req.query.sid} already.`)
    }
  })

})


//------------------------reserves-------------------

app.get('/reserves',(req,res)=>{
  let query = "SELECT  * FROM reserves"
  db.query(query,(err,results)=>{
    res.json(results)
  })
})


//localhost:3001/addboat?bid=110&bname=jackson&color=yellow
app.get('/addreserves',(req,res)=>{
  let query = `INSERT INTO reserves (sid,bid,day) value ('${req.query.sid}','${req.query.bid}','${req.query.day}')`
  db.query(query,(err,result)=>{
    if(err){

      console.log("something wrong!")
    }else{
      res.send("success")
    }
  })
})


// //localhost:3001/deleteboatbyid?deleteboatid=109
app.get('/deletereserves',(req,res)=>{
  let query = `DELETE FROM reserves WHERE sid = ${req.query.deletereservesid}`
  db.query(query,(err,results)=>{
    if(err){
      console.log(err)
    }else{
      res.send(`delete boat id: ${req.query.deletereservesid} already.`)
    }
  })

})


app.get('/updatereserves',(req,res)=>{
  let query = `UPDATE reserves SET day = '${req.query.day}' WHERE sid = '${req.query.sid}'` 
  db.query(query,(err,results)=>{
    if(err){
      console.log(err)
    }else{
      res.send(`update reserves id: ${req.query.sid} already.`)
    }
  })

})

app.listen(3001,()=>{
  console.log("Start server at port 3001")

})