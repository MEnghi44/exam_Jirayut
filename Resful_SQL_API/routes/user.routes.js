const express = require('express');
const router = express.Router();
const user = require("../models/user.models");

//Method insert Data
//http://localhost:5000/apis/user
router.post("/user",(req,res) =>{
    //สร้างผู้ใช้
    const newUser = new user({
        profile:req.body.profile,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        pocition:req.body.pocition,
        gender:req.body.gender,
        tel:req.body.tel,
        address:req.body.address,
    });

    //บันทึกลงฐานข้อมูล
    user.create(newUser,(err, data)=>{
        if(err)
            res.status(500).send({
                message: err.message || "เกิดข้อผิดพลาดขณะสร้างผู้ใช้งาน"
            })
        else res.send(data);
    })
    
});

//แสดงตามid
// http://localhost:5000/apis/user/2
router.get('/user/:id', (req,res)=>{
    const userId = Number.parseInt(req.params.id);  //แปลงให้เป็นจำนวนเต็ม
    user.getById(userId, (err, data)=>{
        if(err){
            if(err.kind === 'not_found'){
                res.status(404).send({
                    message: `ไม่พบผู้ใช้งานนี้ ${userId}`,
                });
            }
            else{
            res.status(500).send({
                message: "เกิดข้อผิดพลาดในการเรียกข้อมูลด้วยรหัสนี้ " + userId,
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
// http://localhost:5000/apis/user
router.get('/user',(req,res) => {
    user.getAll((err,data) => {
        if(err){
            res.status(500).send({
                message: err.message || "เกิดข้อผิดพลาดขณะดึงข้อมูลผู้ใช้งาน",
            });
        }
        else{
            res.send(data);
        }
    });
});

//Updata restaurant Data
// http://localhost:5000/apis/user/1
router.put("/user/:id",(req, res)=>{
    const userId = Number.parseInt(req.params.id);  //แปลงให้เป็นจำนวนเต็ม

    if(req.body.constructor === Object && Object.keys(req.body).length === 0){//เช็คค่าว่าง
        res.status(400).send({
            message : "เนื้อหาไม่สามารถเว้นว่างได้"
        });
    }
    user.updateById(userId, new user(req.body), (err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: `ไม่พบผู้ใช้งานที่มีรหัสนี้ ${userId}`,
                });
            }
            else{
            res.status(500).send({
                message: "เกิดข้อผิดพลาดในการอัปเดตข้อมูลผู้ใช้งานด้วยรหัสนี้ " + userId,
            });
            }
        }
        else
        {
            res.send(data);
        }
    });
});

//Delete user by Id
// http://localhost:5000/apis/user/1
router.delete("/user/:id", (req,res)=>{
    const userId = Number.parseInt(req.params.id);  //แปลงให้เป็นจำนวนเต็ม
    user.removeById(userId,(err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(404).send({
                    message: `ไม่พบผู้ใช้งานที่มีรหัสนี้ ${userId}`,
                });
            }
            else{
            res.status(500).send({
                message: "เกิดข้อผิดพลาดในการลบข้อมูลผู้ใช้งานด้วยรหัสนี้ " + userId,
            });
            }
        }
        else
        {
            res.send({message: "ลบผู้ใช้งานเรียบร้อยแล้ว"});
        }
    })
})

module.exports = router;