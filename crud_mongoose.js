const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ramanthpur')
    
const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String, 
    category:String
    })

const insertInDB = async ()=>{
    const Product = mongoose.model('students',productSchema)
    let data = new Product({name:'Oppo 15s',price:'25000',brand:'Oppo',category:'Mobile'})
    let result = await data.save()
    console.log(result)
}

const updateInDB = async ()=>{
    const Product = mongoose.model('students',productSchema)
    let data = await Product.updateOne(
        {name:"Oppo 15s"},{$set:{price:28000}}
    )
    console.log(data)
}

const deleteInDB =async ()=>{
    const Product = mongoose.model('students',productSchema)
    let data = await Product.deleteOne({name:"Oppo 15s"})
    console.log(data)
}

const findInDB =async ()=>{
    const Product = mongoose.model('students',productSchema)
    let data = await Product.find()
    console.log(data)
}
insertInDB()
// updateInDB()
// deleteInDB()
// findInDB()