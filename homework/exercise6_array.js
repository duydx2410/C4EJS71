



// Bài 1: Cho người dùng nhập số lượng sinh viên trong lớp: N

let arr = []; 
let n = parseInt(prompt("nhập số lượng sinh viên N:"));
// let lenght = n;
for (let i = 0; i < n; i++) {
let name = (prompt("Nhập tên SV:"));
arr.push(name);
}

// Sau đó nhập tên của n sinh viên này:
// Bài 2: In theo format: STT:Tên.
console.log(" STT : Tên ");

for( let i = 0; i < arr.length; i++) {
    console.log(`  ${i + 1}  : ${arr[i]}`) 
    }
    
// Bài 3: Cho người dùng nhập vào 1STT và tên mới, Sửa tên mới này trong mảng.
let Stt = parseInt(prompt("Nhập vị trí mới:"));
while(Stt < 0 || Stt > arr.length) {
    console.log("Nhập sai, Yêu cầu nhập lại:");    
} 
arr[Stt - 1] = (prompt("Nhập tên mới:"))
if( Stt === i) {
    arr[i] = arr[Stt]
}
console.log(` ${Stt} : ${arr[i]}`);

// Bài 4: Cho người dùng nhập 1 tên, kiểm tra xem tên có trong mảng hay không,(không phân biệt hoa thường)
// let isExist = false;
let count = 0;
let N = (prompt("Nhập giá trị N:"));

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element.toLowerCase() === N.toLowerCase()) // chuyển đổi thành cùng chữ thường
    {
        // isExist = true;
        count++;
        // break;
    }   
}
if (count > 0) {
    console.log("Có tồn tại, và có " + count + "số trùng");
} else {
    console.log("Không tồn tại");   
}

// Nếu có thì có bao nhiêu người trùng tên.
// Bài 5: Nhập 1 chữ cái, tìm tất cả tên chứa chữ cái đó(không phân biệt hoa thường)
// Bài 6: Sắp xếp tên từ a->z , từ z->a. dung localCompare