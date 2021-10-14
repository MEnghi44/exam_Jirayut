//all
const init = async()=>{
    const allRestuarants = await fetch(
        "http://localhost:5000/apis/restaurants",{
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
            },
    }).then((response)=> response.json());
    allRestuarants.forEach((element) => addRestaurants(element));
}

//card
const addRestaurants = (element) => {
    const item = document.createElement("div"); //สร้าง div
    item.className = "swiper"; //กำหนดชื่อ class
    item.style ="width: 35rem; margin: 1rem;" //กำหนด style

     //กำหนดรูปเเบบ ลงไปด้วย
     const card = `
     <div class="swiper-slide box">
         <img src="${element.imageurl}" alt="${element.name}">
         <h3>${element.name}</h3>
         <div class="price">${element.type}</div>
         <a href="editRestaurant.html?id=${element.id}" class="btn-warning"><i class="far fa-edit"></i> Edit</a>
         <a href="#" class="btn-danger" onclick="deleteRestaurant(${element.id})"><i class="far fa-trash-alt"></i> Delete</a>
     </div>`;
    
        item.innerHTML = card;  //เอาไปแทรกที่card ลงใน div
    const restaurantsElement = document.querySelector(".swiper"); //เข้าถึง class หน้า HTML
    restaurantsElement.appendChild(item); //เพิ่มลงไป
}

//DELETE
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

