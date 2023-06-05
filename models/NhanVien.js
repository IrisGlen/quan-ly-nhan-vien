function NhanVien(__taiKhoan, __hoTen, __email, __matKhau, __ngayLam, __luongCoBan, __chucVu, __gioLam) {
    this.taiKhoan = __taiKhoan;
    this.hoTen = __hoTen;
    this.email = __email;
    this.matKhau = __matKhau;
    this.ngayLam = __ngayLam;
    this.luongCoBan = __luongCoBan;
    this.chucVu = __chucVu;
    this.gioLam = __gioLam;

    // tạo phương thức tính lương (function ko tên)
    this.tinhTongLuong = function () {
        if (this.chucVu == 'giam_doc') {
            return (this.luongCoBan * 3);
        } else if (this.chucVu == 'truong_phong') {
            return (this.luongCoBan * 2);
        } else {
            return (this.luongCoBan);
        }
       
    }

    this.xepLoai = function(){
        if (this.gioLam >= 192){
            return "NV xuất sắc";
        } else if (this.gioLam >= 176 && this.gioLam < 192) {
            return "NV giỏi";
        } else if (this.gioLam >= 160 && this.gioLam < 176){
            return "NV khá";
        } else {
            return "NV trung bình";
        }
    }
}