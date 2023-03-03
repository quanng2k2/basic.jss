/*let a = Number(prompt("nhập số tuổi của bạn: ")) ;

if(a>=18){
   let age = "Đủ 18 tuổi"
   document.getElementById("demo").innerHTML = `<div id="demo">${age}</div>
   `
}else{
   document.write("Tôi chưa đủ 18 tuổi.");
}
*/


// Cách tính điểm trung bình 3 môn toán lý hóa.
/*alert("nhập điểm 3 môn của bạn") ;
let a= Number(prompt("nhập điểm toán của bạn")) ;
let b= Number(prompt("nhập điểm lý của bạn")) ;
let c= Number(prompt("nhập điểm hóa của bạn")) ;
let d= (a + b +c) / 3 ;
if(d>=8){
    document.write(`Điểm trung bình của bạn là : ${d} ;
    Xếp loại giỏi.`) ;
}else if(d<=8 && d>6.5){
    document.write(`điểm trung bình của bạn là: ${d} 
    xếp loại khá. `) ;
}else if (d<=6.5 && d>=5){
    document.write(`điểm trung bình của bạn là : ${d} 
    xếp loại trung bình.`) ;
}else {
    document.write(`Điểm trng bình của bạn là: ${d} 
    xếp loại ngu.`)
} ;
*/

// tìm ra số lớn nhất trong 3 số và và 2 số lớn nhất trong 3 số và 3 số bằng nhau
/*let a = +prompt("Nhập số a");
let b = +prompt("nhập số b");
let c = +prompt("nhập số c");
if(a>b && b>c){
    document.write(`Số lớn nhất trong 3 số là : ${a} `);
}else if(b>a && b>c){
    document.write(`Số lớn nhất trong 3 số là : ${b}`);
}else if(a==b && a>c && b>c){
    document.write(`Số lớn nhất trong 3 số là : ${a} , ${b}`);
}else if(a==c && a>b && c>b){
    document.write(`Số lớn nhất trong 3 số là : ${a} , ${c}`);
}else if(b==c && b>a && c>a){
    document.write(`Số lớn nhất trong 3 số là : ${b} , ${c}`);
}else if(a==b && a==c && c==b){
    document.write(`Số thứ nhất là : ${a} , Số thứ 2 là : ${b} , Số thứ 3 là : ${c}`)
}
else{
    document.write(`Số lớn nhất trong 3 số là : ${c}`);
}
*/


// Học switch case
let numbel = +prompt("Xin mời nhập tháng ?")
switch (numbel){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        document.write("có 31 ngày")
        break;
    case 2:
        document.write("có 28-29 ngày tùy theo từng năm.")
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        document.write("có 30 ngày.")
        break;
    default:
        document.write("Không có tháng này xin mời nhập từ tháng 1-12.")

        break;
}
