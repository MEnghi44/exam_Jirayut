const express = require('express');
const router = express.Router();
const Restaurant = require("../models/restaurant.model");


//Method insert Data
// http://localhost:5000/apis/restaurants
router.post("/restaurants",(req,res) =>{
    //Create a restaurant
    const newRestaurant = new Restaurant({
        name:req.body.name,
        type:req.body.type,
        imageurl:req.body.imageurl,
    });

    //Save to database
    Restaurant.create(newRestaurant,(err, data)=>{
        if(err)
            res.status(500).send({
                message: err.message || "เกิดข้อผิดพลาดขณะสร้างร้านอาหาร"
            })
        else res.send(data);
    })
    
});

//แสดงตามid
// http://localhost:5000/apis/restaurants/1
router.get('/restaurants/:id', (req,res)=>{
    const restaurantId = Number.parseInt(req.params.id);  //แปลงให้เป็นจำนวนเต็ม
    Restaurant.getById(restaurantId, (err, data)=>{
        if(err){
            if(err.kind === 'not_found'){
                res.status(404).send({
                    message: `ไม่พบร้านอาหารที่มีรหัสนี้ ${restaurantId}`,
                });
            }
            else{
            res.status(500).send({
                message: "เกิดข้อผิดพลาดในการเรียกข้อมูลด้วยรหัสนี้ " + restaurantId,
            })
            }
        }
        else
        {
            res.send(data);
        }
    });
});

//Get All restaurant
// http://localhost:5000/apis/restaurants
router.get('/restaurants',(req,res) => {
    Restaurant.getAll((err,data) => {
        if(err){
            res.status(500).send({
                message: err.message || "Come err occurred while retrieving restaurants",
            });
        }
        else{
            res.send(data);
        }
    });
});

//Updata restaurant Data
// http://localhost:5000/apis/restaurants/1
router.put("/restaurants/:id",(req, res)=>{
    const restaurantId = Number.parseInt(req.params.id);  //แปลงให้เป็นจำนวนเต็ม

    if(req.body.constructor === Object && Object.keys(req.body).length === 0){//เช็คค่าว่าง
        res.status(400).send({
            message : "เนื้อหาไม่สามารถเว้นว่างได้"
        });
    }
    Restaurant.updateById(restaurantId, new Restaurant(req.body), (err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: `ไม่พบร้านอาหารที่มีรหัสนี้ ${restaurantId}`,
                });
            }
            else{
            res.status(500).send({
                message: "เกิดข้อผิดพลาดในการอัปเดตข้อมูลร้านอาหารด้วยรหัสนี้ " + restaurantId,
            });
            }
        }
        else
        {
            res.send(data);
        }
    });
});

//Delete restaurant by Id
// http://localhost:5000/apis/restaurants/1
router.delete("/restaurants/:id", (req,res)=>{
    const restaurantId = Number.parseInt(req.params.id);  //แปลงให้เป็นจำนวนเต็ม
    Restaurant.removeById(restaurantId,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: `ไม่พบร้านอาหารที่มีรหัสนี้ ${restaurantId}`,
                });
            }
            else{
            res.status(500).send({
                message: "เกิดข้อผิดพลาดในการลบข้อมูลร้านอาหารด้วยรหัสนี้ " + restaurantId,
            });
            }
        }
        else
        {
            res.send({message: "ลบร้านอาหารเรียบร้อยแล้ว"});
        }
    })
})

module.exports = router;