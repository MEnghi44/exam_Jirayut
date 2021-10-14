//add
const add = async() => {
    // const id = Number.parseInt(document.getElementById("id").value);
     const name = document.getElementById("name").value;
     const type = document.getElementById("type").value;
     const imageurl = document.getElementById("imageurl").value;
  
     if( name && type && imageurl){
         const perams = {
            //id: id,
             name: name,
             type: type,
             imageurl: imageurl,
         }
         try{
             const restaurant =  await fetch(
                 "http://localhost:5000/apis/restaurants",
                 {
                 method: "POST",
                 mode: "cors",
                 cache: "no-cache",
                 credentials:"same-origin",
                 headers:{
                     "Content-Type":"application/json"
                 },
                 body: JSON.stringify(perams),
             }).then((response) => {
                 return response.json(); //ส่งค่าในรูปแบบ json
             }).then(() => {
                 alert(`ร้านอาหาร ${name} กำลังอัพเดท`);
                 location.replace("allRestaurant.html");
             })
     }catch(error){
         alert(`ร้านอาหาร ${name} not found`);
     }
     }else{
     alert("ไม่มีข้อมูลร้านอาหาร");
     }
  }
  