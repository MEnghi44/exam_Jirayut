
// delete
const deleteUser = async (id) =>{
    //ฟังชั่น deleteUser ที่เป็น async ด้านในจะมีการใช้ await
    if(id){ // ถ้ามี ข้อมูลใน id 
        try {
            const user =  await fetch(  // ตัวแปล user ที่มีการ fetch
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
                    alert(`รหัสร้านอาหาร ${id} ถูกลบแล้ว`);// เเสดงข้อความ เเนบตัวแปร id user id ${id} is delete
                    location.replace("allUser.html");
                });
        } catch (error) { //หาก ทำงานไม่สำเร็จ 
            alert(`รหัสร้านอาหาร ${id} not found`) // ให้เเสดง user id ${id} not found
        }
    }else{
        alert("ไม่มีรหัสร้านอาหาร")
        // ถ้า ไม่ใช่กรณีที่หาไม่เจอ ให้ขึ้นเเจ้งเตือน ว่า user id is missing ที่เเปลว่าไม่มี
    }
};

//card 
const addUser = (element) => {
    const item = document.createElement("div");//ตัวเเปร addUser ที่เก็บฟังชั่น  ที่รับเอเลเมน
    item.className = "container"; //กำหนดชื่อ class
    item.style ="width: 32rem;" //กำหนด style
     //กำหนดรูปเเบบ ลงไปด้วย
     const card = `
            <div class="card">
                <div class="card-header">
                    <img src="${element.profile}" alt="${element.firstName}" />
                </div>
                    <div class="card-body">
                        <span class="tag tag-teal">${element.pocition}</span>
                            <h4>Name : ${element.firstName} ${element.lastName}</h4>
                            <p>Gender : ${element.firstName} </p>
                            <p>Tel : ${element.gender}</p>
                            <p>Address : ${element.address}</p>
                    <div class="user">
                        <a href="editUser.html?id=${element.id}" class="btn-warning"><i class="far fa-edit"></i></a>
                        <a href="#" class="btn-danger" onclick="deleteUser(${element.id})"><i class="far fa-trash-alt"></i></a>
                    </div>
                </div>
            </div>`;
    
        item.innerHTML = card;//ค่าด้านในของ เอเลเมน
        const userElement = document.querySelector(".container"); //เข้าถึงคลาส restaurants
        userElement.appendChild(item);//ทำการเอา  item ที่มีข้อมูลเเล้วไปเพิ่มใน html
};

//ล้างให้ว่าง
const removeAllResult = () => {//ตัวแปล removeAllResult ที่เก็บฟังชั่น
    const userElement = document.querySelector(".container");//เข้าถึงคลาส restaurants
    userElement.innerHTML = "";//ล้างค่า ให้ว่าง
};

//ค้นหาร้านอาหาร ใช้Enter
const searchUser = async (event)=>{
    const keyword = event.target.value;//ฟังชั่น searchUser ที่เป็น async ด้านในจะมีการใช้ await
    if(event.key === "Enter" && keyword){//เปรียบเทียบ key ถ้ามีค่าเท่ากับ "Enter" หรือ keyword
        const allUser = await fetch("http://localhost:5000/apis/user", {
            method: "GET",//ชนิดการยิง API GET
            mode: "cors",//ตั่ง mode เป็นcors
            cache: "no-cache",//สั่งไม่ให้ เก็บเเคช
            credentials:"same-origin",
            headers:{
                "Content-Type":"application/json",//กำหนดชนิดเป็น json
            },
        }).then((response) => {
            return response.json();//ส่ง การตอบกลับเป็น json
        });
        //console.log(allUser);
        const result = allUser.filter(//ทำการฟิลเตอร์  allUser เก็บไว้ใน  result
            (item) => item.firstName.includes(keyword) || item.lastName.includes(keyword)// เอาเฉพาะ ที่ตรงกับที่ ค้านหาหรือเหมือนที่ค้นหา
            );
            removeAllResult();//เรีกใช้ ฟังชั่น removeAllResult();
            result.forEach((element) => addUser(element));
             //ลูป ข้อมูลใน result โดยลูปตาม element เเล้ว เรียกฟังชั่น addUser(element)
    }
};

//เข้าถึงค้นหา โดยkeydown
const main = () =>{
    const inputElement = document.querySelector(".search");//ทำการ เข้าถึง search
    inputElement.addEventListener("keydown",searchUser); //ทำการ รอการ keydown ถ้ามีการ พิมจะเรียกใช้ searchUser
};


main();