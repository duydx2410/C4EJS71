



//cùng lưu nhiều dữ liệu, nhưng có nhiều kiểu dữ liệu khác nhau

//cú pháp

// let myInfor = {
// "name" : "Duy",
// "age" : 25,
//  country : "VietNam", 
// }
// // console.log(myInfor);
// myInfor["phone"] = "012345678";
// myInfor.school = "BK";
// myInfor.age = 26;
// delete myInfor.name;

// for (const key in myInfor) {
//     if (myInfor.hasOwnProperty(key)) //phục vụ trong trường hợp chạy đa luồng
//     {
//         const element = myInfor[key];
//         console.log(key + ":" + element);    
//     }
// }
//kiểm tra key thì gọi : if(o.hasOwnP...(key)) {
    // key thuộc
    //else{ không thuộc}
//}

//kiểm tra value có thuộc O hay không, dùng vòng for

// I :khai báo 1 object, chứa thông tin 1 điện thoại:
// Chứa tên, giá, hãng sản xuất
//1. in thông tin ra màn hình
//2. cho người dùng nhập thêm năm sản xuất của điện thoại này
//3. Cho người dùng sửa 1 value của điện thoại này
//4. Nhập 1 key, xóa thông tin này trong đt

// let phone = {
//     'name': 'Galaxy Note',
//     price: 10e6,
//     'brand': 'samsung',
//   }
//   for (const key in phone) {
//     const element = phone[key];
//     console.log(key + ": " + element);
//   }
  
//   let releaseDate = parseInt(prompt("Nhập năm sản xuất"));
//   phone.releaseYear = releaseDate;
//   phone['releaseYear'] = releaseDate;
  
//   console.log("\n========= Thêm thành công ========\n");
//   for (const key in phone) {
//     const element = phone[key];
//     console.log(key + ": " + element);
//   }
  
//   let editKey = prompt("Bạn muốn sửa gì?"); //name
//   while (!phone.hasOwnProperty(editKey)) {
//     editKey = prompt("Bạn muốn sửa gì???");
//   }
//   phone[editKey] = prompt("Giá trị mới");
//   console.log("\n========= Sửa thành công ========\n");
//   for (const key in phone) {
//     const element = phone[key];
//     console.log(key + ": " + element);
//   }
//   let removeKey = prompt("Bạn muốn xóa gì?"); //name
//   while (!phone.hasOwnProperty(removeKey)) {
//     removeKey = prompt("Bạn muốn xóa gì???");
//   }
//   delete phone[removeKey];
//   console.log("\n========= Xóa thành công ========\n");
//   for (const key in phone) {
//     const element = phone[key];
//     console.log(key + ": " + element);
//   }



// II. Khai báo 1 mảng chứa thông tin 3 đt, mỗi đt gồm:
//tên, giá, hãng sx
//1. in danh sách đt ra màn hình( không sử dụng log mảng và log object)
//2. Cho người dùng thêm 1 đt vào mảng, bằng cách cho người dùng nhập tên, giá, hãng rồi thêm đt mới này vào mảng
//3. Người dùng nhập stt và key muốn sửa, cho người dùng sửa thông tin của đt có stt đó
// 4. nhập stt, xóa đt có stt đó
// 5. Nhập 1 tên đt, tìm đt có tên đó (ko phân biệt hoa thường)
// 6. Nhập 2 số, tìm các đt có giá nằm giữa 2 số đó
// 7. Nhập 1 hãng SX, tìm các đt thuộc hãng sx đó
// 8. sắp xếp DS đt theo tên, theo giá, (tăng, giảm dần)

let listPhone = [
  {
      name : "Galaxy Note",
      price : 10e6,
      brand : "Samsung"
  },
  {
      name : "Xperia XA",
      price : 11e6,
      brand : "Sony"
  },
  {
      name : "E71",
      price : 3e5,
      brand : "Nokia"
  },

];
// let phone1 = {
//         'name': 'Galaxy Note',
//         price: 10e6,
//         'brand': 'samsung',
// }
// listPhone.push(phone1);
//1:
console.log("STT : Điện Thoại");

for (let i = 0; i < listPhone.length; i++) {
    const phone = listPhone[i];
    console.log(i + 1);
    for (const key in phone) {
            const value = phone[key];
            console.log('\t' + key + ":" + value);
            
            console.log('\t --- \t ---');
                       
    }
}

let newPhoneName = prompt("Tên điện thoại mới:");
let newPhonePrice = prompt("Giá điện thoại mới:");
let newPhoneBrand = prompt("Hãng điện thoại mới:");
let newPhone = {
    name : newPhoneName,
    price : newPhonePrice,
    brand : newPhoneBrand
 };
listPhone.push(newPhone);
console.log("===Thêm thành công====");
for (let i = 0; i < listPhone.length; i++) {
    const element = listPhone[i];  
    console.log(i + 1);
  for (const key in phone) {
    const value = phone[key];
    console.log("\t" + key + ": " + value);
  }
  console.log('\t --- \t --- ');

}



