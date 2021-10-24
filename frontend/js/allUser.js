//all
const init = async()=>{
    const allUser = await fetch(
        "http://localhost:5000/apis/user",{
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
            },
    }).then((response)=> response.json());
    allUser.forEach((element) => addUser(element));
}

//card
const addUser = (element) => {
    const item = document.createElement("div"); //สร้าง div
    item.className = "container"; //กำหนดชื่อ class
    item.style ="width: 32rem;" //กำหนด style
     //กำหนดรูปเเบบ ลงไปด้วย
     const card = `
            <div class="card">
                <div class="card-header">
                    <img src="${element.profile}" alt="${element.firstName}" />
                </div>
                    <div class="card-body">
                            <h4>Name : ${element.firstName} ${element.lastName}</h4>
                            <p>Gender : ${element.gender} </p>
                            <p>Tel : ${element.tel}</p>
                            <p>Address : ${element.address}</p>
                    <div class="user">
                        <a href="editUser.html?id=${element.id}" class="btn-warning"><i class="far fa-edit"></i></a>
                        <a href="#" class="btn-danger" onclick="deleteUser(${element.id})"><i class="far fa-trash-alt"></i></a>
                    </div>
                </div>
            </div>`;
                
        item.innerHTML = card;  //เอาไปแทรกที่card ลงใน div
    const UserElement = document.querySelector(".container"); //เข้าถึง class หน้า HTML
    UserElement.appendChild(item); //เพิ่มลงไป
}

//DELETE
const deleteUser = async (id) =>{
    //ฟังชั่น deleteUser ที่เป็น async ด้านในจะมีการใช้ await
    if(id){ // ถ้ามี ข้อมูลใน id 
        try {
            const user =  await fetch(  // ตัวแปล restaurant ที่มีการ fetch
                "http://localhost:5000/apis/user/" + id, //ทำการส่ง http://localhost:5000/apis/user/ พร้อม id
                {
                    method: "DELETE", //ชนิดการยิง API DELETE
                    mode: "cors", //ตั่ง mode เป็นcors
                    cache: "no-cache", //สั่งไม่ให้ เก็บเเคช
                    credentials:"same-origin",
                    headers:{
                        "Content-Type":"application/json",//กำหนดชนิดเป็น json
                    },
                }
            )
                .then((response) => {//เมื่อมีการส่ง สำเร็จ 
                    return response.json();//ส่ง การตอบกลับเป็น json
                })
                .then(()=>{
                    alert(`รหัสผู้ใช้งาน ${id} ถูกลบแล้ว`);// เเสดงข้อความ เเนบตัวแปร id user id ${id} is delete
                    location.replace("allUser.html");
                });
        } catch (error) { //หาก ทำงานไม่สำเร็จ 
            alert(`รหัสผู้ใช้งาน ${id} not found`) // ให้เเสดง user id ${id} not found
        }
    }else{
        alert("ไม่มีรหัสผู้ใช้งาน")
        // ถ้า ไม่ใช่กรณีที่หาไม่เจอ ให้ขึ้นเเจ้งเตือน ว่า user id is missing ที่เเปลว่าไม่มี
    }
};

