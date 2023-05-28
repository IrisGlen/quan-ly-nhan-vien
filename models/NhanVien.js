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
        return (this.ngayLam * this.luongCoBan);
    }

    this.xepLoai = function(){
        var diemTrungBinh = (this.diemToan + this.diemLy + this.diemHoa)/3;
        if (diemTrungBinh < 5){
            return "Kém quá ba";
        } else if (diemTrungBinh >= 5 && diemTrungBinh < 8) {
            return "Ket quả khá";
        } else if (diemTrungBinh >= 8) {
            return "Ket quả giỏi";
        }
    }
}