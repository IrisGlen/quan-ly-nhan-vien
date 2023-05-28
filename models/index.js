/** Dự án quản lý nhân viên
 * Input : Du liẹu nguoi dung nhap vao: maSV, Hoten.. (theo layout)
 * 
 * Output: xuất ra kết q
 * uả là thông tin sinh viên
 */
var arrSinhVien = [];

getStorage();
console.log(arrSinhVien);
renderGiaoDien();

function renderGiaoDien(){
    var content ="";
    // khi chúng ta gọi dữ liệu từ localStorge lên và sd, các obj bên trong mảng arrSinhvien đã bị mất đi các phương thức
    //  idea là sẽ tạo ra một đối tượng mới từ lớp đối tượng SinhVien đang có và gán cho đối tượng đó tất cả thuộc tính đang có của từng obj bên trong arrSinhvien sau khi gọi getStorge

    for (var i = 0; i < arrSinhVien.length; i++ ) {
        var themSinhVien = new SinhVien();
        console.log(themSinhVien);
        var sinhVienItem = arrSinhVien[i];
        console.log(themSinhVien);
        // Object.assign giúp clone ra 1 obj mới các thuộc tính 
        Object.assign(themSinhVien, sinhVienItem);
        var diemTrungBinh = themSinhVien.tinhDiemTrungBinh();
        var xepLoai = themSinhVien.xepLoai();
        content += `
        <tr>
            <td>${themSinhVien.maSinhVien}</td>
            <td>${themSinhVien.hoTen}</td>
            <td>${themSinhVien.email}</td>
            <td>${themSinhVien.ngaySinh}</td>
            <td>${themSinhVien.khoaHoc}</td>
            <td>${diemTrungBinh.toFixed(1)}</td>
            <td>${xepLoai}</td>
            <td>
                <button onclick="xoaSinhVien('${themSinhVien.maSinhVien}')" class="btn btn-danger">
                 <i class="fa-solid fa-trash"></i>
                Del
                </button>
                <button onclick="editSinhVien('${themSinhVien.maSinhVien}')"  class="btn btn-warning">
                 <i class="fa-solid fa-pen"></i>
                Edit
                </button>
            </td>
        </tr>
        `;
    }
    document.getElementById("tbodySinhVien").innerHTML = content;
    // console.log(themSinhVien);
}

function themSinhVien(){
    // lấy dữ liệu người dùng
    sinhVien = layGiaTriInput();
    // nếu undefine thì chặn hành động bên dưới
    if (sinhVien) {
        // thêm sv vào mảng
        arrSinhVien.push(sinhVien);
        saveStorage(arrSinhVien);
        // render giao diện
        renderGiaoDien();
        // reset input sau khi thêm thành công
        ganGiaTriChoInput("", "", "","", "", "", "", "", "");
    }
    // demo check dữ liệu người dùng
    // if (_diemToan < 0 || _diemToan>10) {
    //     alert("Nhap sai roi");
    //     return;
    // }

    
}

// chạy vòng lặp để duyệt mảng
// vòng lặp check điều kiện, mã sv lúc bấm trùng mã sv bất kỳ, trả về index của ma sv, nếu ko thì trả về -1 (ko tìm thấy )
// CRUD (create, read, delete, update)
// xoá sv khỏi mảng

function xoaSinhVien(maSinhVien) {
    var index = timViTriSV(maSinhVien);
    if (index != -1 ) {
        arrSinhVien.splice(index, 1);
        saveStorage(arrSinhVien);
        renderGiaoDien();
    } 
}
// tìm vị trí phần tử
// cho nút cập nhật hiển thị
// hiển thị thông tin cho người dùng chỉnh sửa 
function editSinhVien(maSinhVien) {
    var index = timViTriSV(maSinhVien);
    // hiển thị button
    document.getElementById("btnSuaSV").style.display = "inline-block";
    var sinhVien = arrSinhVien[index];
    ganGiaTriChoInput(
        sinhVien.maSinhVien,
        sinhVien.hoTen,
        sinhVien.email,
        sinhVien.matKhau,
        sinhVien.ngaySinh,
        sinhVien.khoaHoc,
        sinhVien.diemToan,
        sinhVien.diemLy,
        sinhVien.diemHoa,
    );
    document.getElementById("txtMaSV").readOnly = true;
}

function capNhatThongTinSV(){
    console.log("sinhVienDaChinhSua");
    // lấy giá trị người dùng
    sinhVienDaChinhSua = layGiaTriInput();
    // tìm vị trí sv
    var index = timViTriSV(sinhVienDaChinhSua.maSinhVien);
    
    console.log(sinhVienDaChinhSua);
    // sau khi tìm được vi tri index cua Ptử trong mảng => thay thế giá trị mới
    arrSinhVien[index] = sinhVienDaChinhSua;
    saveStorage(arrSinhVien);
    // render giao diện
    renderGiaoDien();
}
// document.getElementById("btnSuaSV").onclick = capNhatThongTinSV();


// 1905 thêm mảng vào localStorage, kiểu string
// lưu trữ dạng key : value
// khi lưu trữ các loại dữ liệu khác string, gọi ra phương thức JSON.stringify(giá trị cần chuyển đổi) để đổi kiểu dữ liệu về dạng json string và lưu trữ được, nếu ko value khi lưu sẽ có dạng obj

// localStorage.setItem("tenSinhVien", "Nguyễn Đình Sang");
// var sinhVienChamChi = {
//     hoTen: "Nam",
//     xepLoai: "Khá",
// }
// localStorage.setItem("sinhvienNam", JSON.stringify(sinhVienChamChi));

// phương thức get
// var hoTenSinhVien = localStorage.getItem("sinhVienNam");
// console.log(typeof hoTenSinhVien);
// console.log(JSON.parse(hoTenSinhVien));

// phương thức remove
// localStorage.removeItem("tenSinhVien");