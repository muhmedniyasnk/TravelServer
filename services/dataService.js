

const db = require('./db')



const register=(num,uname,pswd)=>{
    return db.User.findOne({num})//data

    .then(user=>{
      if(user){
      return {
        status:"false",
        statusCode:400,
        message:'User already registered'
      }
    }
    else{
      const newuser=new db.User({
        num:num,
        uname:uname,
        pswd:pswd,
      })
      newuser.save();
      return {
        status:"true",
        statusCode:200,
        message:'register successfull'
      }
      
    }
  })}


  const login=(num,pswd)=>{
    return db.User.findOne({num,pswd})//data
.then(user=>{   
  if(user){   
       

        return {
          status:"true",
          statusCode:200,
          message:'login successfull',
          user
        
        }
      }
      
    
    else{
      return {
        status:"false",
        statusCode:400,
        message:'invalid details'
      }
    }
  })}


  const getplaces =()=>{
    return db.place.find().then(
     (result)=>{
         if(result){
             return{
                 status:true,
                 statusCode:200,
                 place:result
             }
         }
         else{
             return{
                 status:false,
                 statusCode:404,
                 message:'No product found'
             }
         }
     }
 
     )
 }


 const addtowishlist =( id,place,price,image,days)=>{

  return db.wishlist.findOne({id}).then(

    (result)=>{
      if(result){
        return{
          status:false,
          statusCode:404,
          message:'Your package already added'
        }
      }
      else{
        const newplace=new db.wishlist({
          id,place,price,image,days
        })
        newplace.save()
        return{
          status:true,
          statusCode:200,
          message:'Your package added Successfully'
        }
      }
  
    }
  )
  }
 

  const getwishlist=()=>{

    return db.wishlist.find().then(
      (result)=>{
          if(result){
              return{
                  status:true,
                  statusCode:200,
                  place:result
              }
          }
          else{
              return{
                  status:false,
                  statusCode:404,
                  message:'Bucket List is Empty'
              }
          }
      }
  
      )
    }


    const deletewish=(id)=>{
      return db.wishlist.deleteOne({id}).then(
        (result)=>{
          if(result){
            return{
                status:true,
                statusCode:200,
                message:'remove Done'
            }
        }
        else{
          return{
              status:false,
              statusCode:404,
              message:'List not Found'
          }
      }
        }
      )
    }

    const booknow = (id,place,image,price,name,pincode,days,phone,buyerplace,date) => {

      return db.booking.find().then(
          (result) => {
              if (result) {
  
                  const buyedbook = new db.booking({
                      id: id,
                      place: place,
                      image: image,
                      price: price,
                      name: name,
                      pincode: pincode,
                      phone: phone,
                      days: days,
                      buyerplace: buyerplace,
                      date:date
                      
                  })
                  buyedbook.save()
  
               
                  return {
                      status: true,
                      statusCode: 200,
                      books: result,
                      message: "Your order Confirmed"
  
                  }
              }
              else {
                  return {
                      status: false,
                      statusCode: 404,
                      message: 'error'
                  }
              }
          }
      )
  
  }

  const getorder = () => {
    return db.booking.find().then(
        (result) => {
            if(result){
                return{
                    status: true,
                    statusCode: 200,
                    orders: result,
                }



            }else{
                return{
                    status: false,
                    statusCode: 400,
                    message:"No Bookings"
                }
            }
        }
    )

}

const cancelorder=(id)=>{
  return db.booking.deleteOne({id}).then(
    (result)=>{
      if(result){
        return{
            status:true,
            statusCode:200,
            message:'Are You sure'
        }
    }
    else{
      return{
          status:false,
          statusCode:404,
          message:'order not Found'
      }
  }
    }
  )
}
    
  



  module.exports={
    register,
    login,
    getplaces,
    addtowishlist,
    getwishlist,
    deletewish,
    booknow,
    getorder,
    cancelorder

  }