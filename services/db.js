//Server - mongodb integration

//1 import mongoose 

const mongoose = require('mongoose');

//2 state connection string via mongoose

mongoose.connect('mongodb://localhost:27017/TravelappServer',{
    useNewUrlparser:true //to avoid unwantted warnings

})


//Define bank db model

const User=mongoose.model('user',
{
    //schema creation
    num:Number,
    uname:String,
    pswd:String,
});


const place=mongoose.model('place',{
    id:Number,
    place:String,
    price:Number,
    description:String,
    days:String,
    image:String,
    rating:{
       rate:Number,
       count:Number
    }
})

const wishlist=mongoose.model('wishlist',{
    id:Number,
    place:String,
    price:Number,
    days:String,
    image:String
})

const booking = mongoose.model('booking', {
    id: Number,
    place:String,
    image:String,
    price: Number,
    name:String,
    pincode: Number,
    days: String,
    phone: Number,
    buyerplace: String,
    date:String
})


//export collection

module.exports={
    User,
    place,
    wishlist,
    booking
}