const express = require('express');
const restaurantRouter = require('./routes/restaurant.router');
const userRouter = require('./routes/user.routes');
const cors = require('cors')


//Create Server
const app = express();

//Use Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Router
app.get('/',(req,res)=>{
    res.send('<h1>This is Restaurant API</h1>'); //โชว์ข้อมูลที่กำหนด

});

// เรียกใช้ router
//restaurant
app.use("/apis",restaurantRouter);
//user
app.use("/apis",userRouter);




//Run server
app.listen(5000, ()=>{
    console.log('เซิร์ฟเวอร์กำลังฟังพอร์ต 5000')
})
