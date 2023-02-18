// //server creation


// //1 import express

// const express = require('express')

// //2 create an application using the express

// const app = express()

// //create a port number

// app.listen(3000,() => {
//     console.log('listening on port 3000');
// })

// //4Resolving get request

// app.get('/',(req,res) => {
//     res.send('Get request')
// })

//import dataservices
const express = require('express')


//import cors
const cors = require('cors')

const dataService = require('./services/dataService')



const app =express()

app.use(cors({
    origin:'http://localhost:4200'
}))






//To parse json from request body

app.use(express.json())

//give a commad to share data via cors



app.listen(3002,() =>{
    console.log('listening on port 3002');
})
//API request


app.post('/register',(req,res)=>{
    console.log(req.body);
    dataService.register(req.body.num,req.body.uname,req.body.pswd)
    .then(result=>{
    res.status(result.statusCode).json(result);
})
})

//login request
app.post('/login',(req,res)=>{
    console.log(req.body);
     dataService.login(req.body.num,req.body.pswd)
     .then(result=>{
    res.status(result.statusCode).json(result);
     })
})

//api tp get all places

app.get('/all-places',(req,res)=>{
    dataService.getplaces()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})


app.post('/addtowishlist',(req,res)=>{
    dataService.addtowishlist(req.body.id,req.body.place,req.body.price,req.body.image,req.body.days).then
    (result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/getwishlist',(req,res)=>{
    dataService.getwishlist()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})


app.delete('/deletewish/:id',(req,res)=>{
    dataService.deletewish(req.params.id)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})



app.post('/bookplace',(req,res)=>{
    dataService.booknow(req.body.id, req.body.place, req.body.image, req.body.price, req.body.name,req.body.pincode, req.body.days, req.body.phone, req.body.buyerplace,req.body.date)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/getorder',(req,res)=>{
    dataService.getorder()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})


app.delete('/cancelorder/:id',(req,res)=>{
    dataService.cancelorder(req.params.id)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})
