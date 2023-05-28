// kiểm tra người dùng có nhập vào hay ko?
function kiemTraRong(checkInput, idThongBao) {
    if (checkInput) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
    document.getElementById(idThongBao).innerHTML = "Vui long nhap truong du lieu nay";
    return false;
    }
}

function kiemTraEmail(checkInput, idThongBao) {
    var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // sử dụng phương thức .test để kiểm tra email có phù hợp ko 
    // khi sử dụng .test sẽ trả về giá trị true hoặc false
    var hopLe = regexEmail.test(checkInput);
    if (hopLe) {
        document.getElementById(idThongBao).innerHTML = "";
        return true;
    } else {
    document.getElementById(idThongBao).innerHTML = "Vui long nhap dung Email";
    return false;
    }
}