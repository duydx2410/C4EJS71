
function submit(e) {
    console.log(e);
    if(e.key === "Enter"){
        login();
    }
    
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // console.log(username);
    // console.log(password);

    if (username === ''){
        alert('Enter Username')
        return;
    }

    if (password === '') {
        alert("Enter Password")
        return;
    }

    if (username==='admin' && password ==='123456') {
        // alert("login Successful");
        window.location.href = 'index.html';
        // window.location.replace('index.html');
        //có thể dùng window.locaction.href = ''
        //và window.location.replace('') cách này ko back lại được
        return;
    }    
        alert("Username or Password is incorect")
}
    

let s = 'Hello world';
let n = 10;
let b = true;
let arr = [1,2,3,4,5,6];
let o = {name: 'Duy', 'age': 24, "school": "BKHN", favorite: ["1", "2", "3"] };

// console.log(o);

// console.log(JSON.stringify(o));
// // console.log(JSON.stringify(n));
let stringify = '{"name":"Duy","age":24,"school":"BKHN","favorite":["1","2","3"]}';
let object = JSON.parse(stringify);
// console.log(object);
// console.log(object.name);
// console.log(object.age);


//product
let person = {name: 'Duy', 'age': 24, "school": "BKHN", favorite: ["1", "2", "3"] };

//quá trình lưu vào localstorage
//sử dụng stringify
localStorage.setItem('person',JSON.stringify(person));

//detail.html
//quá trình parse dữ liệu string trong localstorage
//về 1 object trong js
let personSelected = JSON.parse(person);






    
