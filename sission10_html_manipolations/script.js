
console.dir(document.getElementById('title'));
console.dir(document.getElementById('title').innerHTML);

//gán giá trị khác:
let idTitle = document.getElementById('title')
idTitle.innerHTML = 'Welcome C4EJS 71';

document.getElementsByClassName('titler');

let classContent = document.getElementsByClassName("content");
console.dir(classContent);
for (let i = 0; i < classContent.length; i++) {
    const dom = classContent[i];
    dom.innerHTML = "Welcome C4EJS71"    
};

//đổi style
idTitle.style.color = 'white';
idTitle.style.backgroundColor = 'black';

// idTitle.innerHTML = 'Welcome C4EJS 71 <h1>Đây là thẻ h1</>';
let listFoods = [
    "Phở",
    "Bún cá",
    "Mì tôm",
    "Cơm cuộn",
    "Cơm rang",
];
let listImg = [
    "https://beptop.vn/wp-content/uploads/2018/12/C%C3%A1ch-l%C3%A0m-c%C6%A1m-rang-th%E1%BA%ADp-c%E1%BA%A9m_Th%C3%A0nh-ph%E1%BA%A9m.jpg",
    "https://beptop.vn/wp-content/uploads/2018/12/C%C3%A1ch-l%C3%A0m-c%C6%A1m-rang-th%E1%BA%ADp-c%E1%BA%A9m_Th%C3%A0nh-ph%E1%BA%A9m.jpg",
    "https://beptop.vn/wp-content/uploads/2018/12/C%C3%A1ch-l%C3%A0m-c%C6%A1m-rang-th%E1%BA%ADp-c%E1%BA%A9m_Th%C3%A0nh-ph%E1%BA%A9m.jpg",
    "https://beptop.vn/wp-content/uploads/2018/12/C%C3%A1ch-l%C3%A0m-c%C6%A1m-rang-th%E1%BA%ADp-c%E1%BA%A9m_Th%C3%A0nh-ph%E1%BA%A9m.jpg",
    "https://beptop.vn/wp-content/uploads/2018/12/C%C3%A1ch-l%C3%A0m-c%C6%A1m-rang-th%E1%BA%ADp-c%E1%BA%A9m_Th%C3%A0nh-ph%E1%BA%A9m.jpg",
];

let listFoodAndImg = [
    {
        food: 'Phở',
        img: 'https://beptop.vn/wp-content/uploads/2018/12/C%C3%A1ch-l%C3%A0m-c%C6%A1m-rang-th%E1%BA%ADp-c%E1%BA%A9m_Th%C3%A0nh-ph%E1%BA%A9m.jpg',
        description: 'Đây là cơm Phở',
        linkDetail: 'https://beptop.vn/wp-content/uploads/2018/12/C%C3%A1ch-l%C3%A0m-c%C6%A1m-rang-th%E1%BA%ADp-c%E1%BA%A9m_Th%C3%A0nh-ph%E1%BA%A9m.jpg',
    },
    {
        food: 'Bún cá',
        img: 'https://beptop.vn/wp-content/uploads/2018/12/C%C3%A1ch-l%C3%A0m-c%C6%A1m-rang-th%E1%BA%ADp-c%E1%BA%A9m_Th%C3%A0nh-ph%E1%BA%A9m.jpg',
        description: 'Đây là Bún cá',
        linkDetail: 'https://beptop.vn/wp-content/uploads/2018/12/C%C3%A1ch-l%C3%A0m-c%C6%A1m-rang-th%E1%BA%ADp-c%E1%BA%A9m_Th%C3%A0nh-ph%E1%BA%A9m.jpg',
        linkDetail: 'https://beptop.vn/wp-content/uploads/2018/12/C%C3%A1ch-l%C3%A0m-c%C6%A1m-rang-th%E1%BA%ADp-c%E1%BA%A9m_Th%C3%A0nh-ph%E1%BA%A9m.jpg',
    },
    {
        food: 'Mì tôm',
        img: 'https://beptop.vn/wp-content/uploads/2018/12/C%C3%A1ch-l%C3%A0m-c%C6%A1m-rang-th%E1%BA%ADp-c%E1%BA%A9m_Th%C3%A0nh-ph%E1%BA%A9m.jpg',
        description: 'Đây là Mì tôm',
        linkDetail: 'https://beptop.vn/wp-content/uploads/2018/12/C%C3%A1ch-l%C3%A0m-c%C6%A1m-rang-th%E1%BA%ADp-c%E1%BA%A9m_Th%C3%A0nh-ph%E1%BA%A9m.jpg',
    },
    {
        food: 'Cơm cuộn',
        img: 'https://beptop.vn/wp-content/uploads/2018/12/C%C3%A1ch-l%C3%A0m-c%C6%A1m-rang-th%E1%BA%ADp-c%E1%BA%A9m_Th%C3%A0nh-ph%E1%BA%A9m.jpg',
        description: 'Đây là cơm cuộn',
        linkDetail: 'https://beptop.vn/wp-content/uploads/2018/12/C%C3%A1ch-l%C3%A0m-c%C6%A1m-rang-th%E1%BA%ADp-c%E1%BA%A9m_Th%C3%A0nh-ph%E1%BA%A9m.jpg',
    },
    {
        food: 'Cơm rang',
        img: 'https://beptop.vn/wp-content/uploads/2018/12/C%C3%A1ch-l%C3%A0m-c%C6%A1m-rang-th%E1%BA%ADp-c%E1%BA%A9m_Th%C3%A0nh-ph%E1%BA%A9m.jpg',
        description: 'Đây là cơm  rang',
        linkDetail: 'https://beptop.vn/wp-content/uploads/2018/12/C%C3%A1ch-l%C3%A0m-c%C6%A1m-rang-th%E1%BA%ADp-c%E1%BA%A9m_Th%C3%A0nh-ph%E1%BA%A9m.jpg',
    },
];
let tBody = document.getElementById("foods");
// ulFoodds.innerHTML = `<li>
// Cơm rang 
// <img width='100' src='https://beptop.vn/wp-content/uploads/2018/12/C%C3%A1ch-l%C3%A0m-c%C6%A1m-rang-th%E1%BA%ADp-c%E1%BA%A9m_Th%C3%A0nh-ph%E1%BA%A9m.jpg'
// </li>`;


// for (let i = 0; i < listFoodAndImg.length; i++) {
//     const foodAndImg = listFoodAndImg[i];
//     const food = foodAndImg.food;
//     const img = foodAndImg.img;  
//         let htmlFood = `<li>
//                             <a href="${img}">
//                                 ${food}
//                                 <img src="${img}" width="100 />
//                             </a>
//                         </li>`;
//     // const foodAndImg = listFoodAndImg[i];
//     ulFoodds.innerHTML += htmlFood;  
    
// };

for (let i = 0; i < listFoodAndImg.length; i++) {
    const food = listFoodAndImg[i];

    let html = `<tr>
                    <td>${i + 1}</td>
                    <td><img src="${food.img}" width="100"></td>
                    <td>${food.food}</td>
                    <td>${food.description}</td>
                    <td> 
                        <button>
                            <a  href="https://beptop.vn/wp-content/uploads/2018/12/C%C3%A1ch-l%C3%A0m-c%C6%A1m-rang-th%E1%BA%ADp-c%E1%BA%A9m_Th%C3%A0nh-ph%E1%BA%A9m.jpg" >
                            Detail
                            </a>
                        </button>
                </tr>`

    tBody.innerHTML += html;
    
}

// bài tập về nhà: lấy dữ liệu từ trang thegioididong.com
//Chọn khoảng 5 đt, lấy thông tin gồm:
//Tên - Hãng - Giá - Ảnh - Đường link dẫn đến chi tiết điện thọai
// I: Hiển thị theo bảng danh sách đt này theo mẫu:
//1. Mặc định
//2. Danh sách được sắp xếp theo tên, hãng, giá
//3. Danh sách được filter theo 1 hãng
//4. Danh sách được filter theo 1 khoảng giá (vd: từ 10 - 20 triệu)
// II: Khi click vào đường link, mở ra tab mới tới trang chi tiết điện thoại.





