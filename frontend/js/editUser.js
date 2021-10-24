const init = async () =>{
    let params = new URL(document.location).searchParams;
    let id = params.get("id");
    if(id){
        try{
            const User = await fetch(
                "http://localhost:5000/apis/user/" + id,{ //ต่อไอดีที่ส่งมาจากการกำปุ่ม Edit
                method: "GET",          
                mode:"cors",
                cache:"no-cache",               //6-8 บอกว่า server อยู่ที่เดียวกัน
                credentals:"same-origin",
                headers:{
                    "Content-type":"application/json"  //ข้อมุลอยู่ในรูปแบบ json
                },
            }).then((response)=>{
                return response.json();  //ส่งค่าในรูปแบบ json
            });
            //set input value 19-22
            document.getElementById("id").value = User.id;
            document.getElementById("profile").value = User.profile;
            document.getElementById("firstName").value = User.firstName;
            document.getElementById("lastName").value = User.lastName;
            document.getElementById("tel").value = User.tel;
            document.getElementById("address").value = User.address;
        }catch (error){
            alert(`รหัสผู้ใช้งาน:${id} ไม่พบ`)
        }
    }else{
        alert("ไม่มีรหัสผู้ใช้งาน");
    }
  }
 

  
//แก้ไข
const edit = async () => {
    const id = document.getElementById("id").value;
    if (id) {
        const params = {
            id: document.getElementById("id").value,
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            tel: document.getElementById("tel").value,
            address: document.getElementById("address").value,
        };
      try {
        const user = await fetch(
          "http://localhost:5000/apis/user/" + id,
          {
            method: "PUT",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(params), // เพิ่ม data
          }
        ).then((response) => {
          return response.json();
        }).then(()=>{
          alert(`รหัสผู้ใช้งาน:${id} กำลังอัปเดต`);
          location.replace("allUser.html");
  
        });
      } catch (error) {
        alert(`รหัสผู้ใช้งาน:${id} ไม่พบ`);
      }
    } else {
      alertalert("ไม่มีรหัสผู้ใช้งาน");
    }
  };