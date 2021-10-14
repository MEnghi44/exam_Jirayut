
// delete
const deleteRestaurant = async (id) =>{
    //ฟังชั่น deleteRestaurant ที่เป็น async ด้านในจะมีการใช้ await
    if(id){ // ถ้ามี ข้อมูลใน id 
        try {
            const restaurant =  await fetch(  // ตัวแปล restaurant ที่มีการ fetch
                "http://localhost:5000/apis/restaurants/" + id, //ทำการส่ง http://localhost:5000/apis/restaurants/ พร้อม id
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
                    alert(`รหัสร้านอาหาร ${id} ถูกลบแล้ว`);// เเสดงข้อความ เเนบตัวแปร id Restaurant id ${id} is delete
                    location.reload();
                });
        } catch (error) { //หาก ทำงานไม่สำเร็จ 
            alert(`รหัสร้านอาหาร ${id} not found`) // ให้เเสดง Restaurant id ${id} not found
        }
    }else{
        alert("ไม่มีรหัสร้านอาหาร")
        // ถ้า ไม่ใช่กรณีที่หาไม่เจอ ให้ขึ้นเเจ้งเตือน ว่า Restaurant id is missing ที่เเปลว่าไม่มี
    }
};

//card 
const addRestaurant = (element) => {
    const item = document.createElement("div");//ตัวเเปร addRestaurant ที่เก็บฟังชั่น  ที่รับเอเลเมน
    item.className = "swiper"; //กำหนดชื่อ class
    item.style ="width: 34rem; margin: 1rem;" //กำหนด style

     //กำหนดรูปเเบบ ลงไปด้วย
     const card = `
     <div class="swiper-slide box">
         <img src="${element.imageurl}" alt="${element.name}">
         <h3>${element.name}</h3>
         <div class="price">${element.type}</div>
         <a href="editRestaurant.html?id=${element.id}" class="btn-warning"><i class="far fa-edit"></i> Edit</a>
         <a href="#" class="btn-danger" onclick="deleteRestaurant(${element.id})"><i class="far fa-trash-alt"></i> Delete</a>
     </div>`;
    
        item.innerHTML = card;//ค่าด้านในของ เอเลเมน
        const restaurantsElement = document.querySelector(".swiper"); //เข้าถึงคลาส restaurants
        restaurantsElement.appendChild(item);//ทำการเอา  item ที่มีข้อมูลเเล้วไปเพิ่มใน html
};

//ล้างให้ว่าง
const removeAllResult = () => {//ตัวแปล removeAllResult ที่เก็บฟังชั่น
    const restaurantsElement = document.querySelector(".swiper");//เข้าถึงคลาส restaurants
    restaurantsElement.innerHTML = "";//ล้างค่า ให้ว่าง
};

//ค้นหาร้านอาหาร ใช้Enter
const searchRestaurant = async (event)=>{
    const keyword = event.target.value;//ฟังชั่น searchRestaurant ที่เป็น async ด้านในจะมีการใช้ await
    if(event.key === "Enter" && keyword){//เปรียบเทียบ key ถ้ามีค่าเท่ากับ "Enter" หรือ keyword
        const allRestaurants = await fetch("http://localhost:5000/apis/restaurants", {
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
        //console.log(allRestaurants);
        const result = allRestaurants.filter(//ทำการฟิลเตอร์  allRestaurants เก็บไว้ใน  result
            (item) => item.name.includes(keyword) || item.type.includes(keyword)// เอาเฉพาะ ที่ตรงกับที่ ค้านหาหรือเหมือนที่ค้นหา
            );
            removeAllResult();//เรีกใช้ ฟังชั่น removeAllResult();
            result.forEach((element) => addRestaurant(element));
             //ลูป ข้อมูลใน result โดยลูปตาม element เเล้ว เรียกฟังชั่น addRestaurant(element)
    }
};

//เข้าถึงค้นหา โดยkeydown
const main = () =>{
    const inputElement = document.querySelector(".search");//ทำการ เข้าถึง search
    inputElement.addEventListener("keydown",searchRestaurant); //ทำการ รอการ keydown ถ้ามีการ พิมจะเรียกใช้ searchRestaurant
};


main();