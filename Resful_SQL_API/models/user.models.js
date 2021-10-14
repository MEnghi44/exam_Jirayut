const sql = require("./db");
//constructor
const User = function (user){  //ใช้ arrow function ไม่สามารถกำหนด คอนสเต็คเตอร์ได้
    //Attributes
    this.id = user.id;
    this.profile = user.profile;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.pocition = user.pocition;
    this.gender = user.gender;
    this.tel = user.tel;
    this.address = user.address;
};

//Method insert Data
User.create = (newUser, result) =>{
    //INSERT INTO user (id, firstName, lastName, tel, address) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5])
    sql.query("INSERT INTO user SET ?",newUser,(err, res)=>{
        if(err){
            console.log("error",err);
            result(err,null);
            return;
        }
        console.log("created user:",{id:res.insertId, ...newUser});
        result(null,{ id: res.insertId, ...newUser});
    })
};

//Getdata byId
User.getById = (userId, result) =>{
    //SELECT * FROM user where u_id  = 2
    sql.query(`SELECT * FROM user WHERE id = ${userId}`,
    (err, res)=>{
        if(err){  //ถ้ามี error ค่าข้อมูลจะว่าง
            console.log("error ",err);
            result(err, null);
            return;
        }
        if(res.length){ //ถ้าหากเจอข้อมูล
            result(null, res[0]); //ส่งข้อมูล array ตำแหน่งที่ 1 กลับมา
            return;
        }
        //restaurant not found  with this Id 
        result({kind: "not_found"}, null);
        }
    );
};

//Get All User
User.getAll = (result ) =>{
    //SELECT * FROM user
    sql.query("SELECT * FROM user", (err, res)=>{
        if(err){  //ถ้ามี error ค่าข้อมูลจะว่าง
            console.log("error ",err);
            result(err, null);
            return;
        }
        result(null ,res);
    });
};

//Update Restaurant Data
User.updateById = (id, user,result) =>{
    sql.query(
        //UPDATE `user` SET `id`='[value-1]',`firstName`='[value-2]',`lastName`='[value-3]',`tel`='[value-4]',`address`='[value-5]',`district`='[value-6]',`province`='[value-7]' WHERE 1
        "UPDATE user SET firstName = ?, lastName = ?, tel = ?, address = ?  WHERE id = ?",
        [user.firstName,user.lastName,user.tel,user.address, id],
        (err,res)=>{
            if(err){  //ถ้ามี error ค่าข้อมูลจะว่าง
                console.log("error ",err);
                result(err, null);
                return;
            }
    
            if(res.affectedRows == 0){ //เช็คแถวที่อัพเดท
                result({ kind: "not_found"}, null)
                return;
            }
            //Restaurant data is updated
            result(null, {id:id, ...user });
            }
        );
    };

//Delete restaurant by Id
User.removeById = (id,result) =>{
    //DELETE FROM user WHERE u_id = ?
    sql.query("DELETE FROM user WHERE id = ?", id , (err, res)=>{
        if(err){
            console.log("error ",err);
                result(err, null);
                return;
        }
        if(res.affectedRows == 0){ //เช็คแถวที่อัพเดท
            result({ kind: "not_found"}, null)
            return;
        }
    
        console.log("ลบผู้ใช้งานรหัส : ", id);
        result(null, res);
    
    });
    };

module.exports = User;