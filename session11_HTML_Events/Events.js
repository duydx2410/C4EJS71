function welcome() {
    alert('Welcome C4EJS71')
};

function changeColor(e) {
    console.log(e.target);
    e.target.style.color = 'red';
}

function hiddenButton(e) {
    // e.target.remove(); //Dom "xóa hẳn html đi"
    e.target.style.display = 'none'; // chỉ ẩn trong giao diện, trong code chỉ bị ẩn.
    
}