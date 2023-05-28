// hàm giúp gán giá trị mới cho input
function ganGiaTriChoInput(taiKhoan, hoTen, email,matKhau, ngayLam, luongCoBan, chucVu, gioLam){
    document.getElementById("tknv").value = taiKhoan;
    document.getElementById("name").value = hoTen;
    document.getElementById("email").value = email;
    document.getElementById("password").value = matKhau;
    document.getElementById("datepicker").value = ngayLam;
    document.getElementById("luongCB").value = luongCoBan;
    document.getElementById("chucvu").value = chucVu;
    document.getElementById("gioLam").value = gioLam;
}

// hàm tìm vị trí sv dựa vào mã sv
function timViTriSV(maNhanVien){
    var viTri = -1;
    arrNhanVien.forEach(function (item, index){
        if (item.maNhanVien == maNhanVien) {
            viTri = index;
        }
    });
    return viTri;
}

// lấy giá trị input
function layGiaTriInput() {
    // lấy giá trị input
    var _taiKhoan = document.getElementById("tknv").value;
    
    var _hoTen = document.getElementById("name").value;
    var _email = document.getElementById("email").value;
    var _matKhau = document.getElementById("password").value;
    var _ngayLam = document.getElementById("datepicker").value;
    var _luongCoBan = document.getElementById("luongCB").value;
    var _chucVu = document.getElementById("chucvu").value*1;
    var _gioLam = document.getElementById("gioLam").value*1;
    
    var valid = true;
    valid = kiemTraRong(_taiKhoan, "tknv") & 
    kiemTraRong(_hoTen, "name") & 
    kiemTraRong(_email, "email") & 
    kiemTraRong(_matKhau, "password") & 
    kiemTraRong(_ngayLam, "datepicker") & 
    kiemTraRong(_luongCoBan, "luongCB") & 
    kiemTraRong(_chucVu, "chucvu") &
    kiemTraRong(_gioLam, "gioLam") ;

    valid = kiemTraEmail(_email, "email");
    // kiểm tra valid, nếu valid là false thì return
    if (!valid) {
        return;
    }
    // gọi tới lớp đối tượng sv và tạo ra đối tượng sv
    var themNhanVien = new NhanVien(
        _taiKhoan, 
        _hoTen, 
        _email, 
        _matKhau, 
        _ngayLam, 
        _luongCoBan, 
        _chucVu, 
        _gioLam, 
    );
    return themNhanVien;
    console.log(_taiKhoan);
}

// hàm lưu dữ liệu xuống local
function saveStorage(arrNhanVien) {
    localStorage.setItem("arrNhanVien", JSON.stringify(arrNhanVien));
}

// hàm lấy giá trị từ local lên và sd
function getStorage(arrNhanVien) {
    // check điều kiện nếu như key gọi tới ko có dưới local
    var arrNhanVienLocal = localStorage.getItem("arrNhanVien");
    // nếu như arrNhanVienLocal có giá trị sẽ lấy giá trị đó gán mới vào mảng arrNhanVien
    if (arrNhanVienLocal != null){
        arrNhanVien = arrNhanVienLocal;
    }
}