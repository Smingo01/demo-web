// สคริปต์สำหรับเว็บไซต์ร้านรถยนต์


// แสดงกล่องข้อความเมื่อกดปุ่มโปรโมชั่น
const btn = document.getElementById("showAlert");


if (btn) {
btn.addEventListener("click", () => {
alert("โปรโมชั่นพิเศษ! ส่วนลดสูงสุด 50,000 บาท");
});
}
