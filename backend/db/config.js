const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/DarshanEase')
.then(() => console.log('Connected!'))
.catch(()=>console.log("error in connecting"))

  