//add
const addUser = async() => {
    // const id = Number.parseInt(document.getElementById("id").value);
     const profile = document.getElementById("profile").value;
     const firstName = document.getElementById("firstName").value;
     const lastName = document.getElementById("lastName").value;
     const gender = document.getElementById("gender").value;
     const tel = document.getElementById("tel").value;
     const address = document.getElementById("address").value;
  
     if( profile && firstName && lastName && tel && address){
         const perams = {
            //id: id,
            profile: profile,
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            tel: tel,
            address: address,
         }
         try{
             const user =  await fetch(
                 "http://localhost:5000/apis/user",
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
                 alert(`ผู้ใช้งานชื่อ ${firstName} กำลังอัพเดท`);
                 location.replace("allUser.html");
             })
     }catch(error){
         alert(`ผู้ใช้งานชื่อ ${firstName} not found`);
     }
     }else{
     alert("ไม่มีข้อมูลผู้ใช้งาน");
     }
  }
  