// bt1
const btnBT1 = document.getElementById(`btnBT1`);

btnBT1.onclick = function () {
  const scoreChuan = document.getElementById(`diemChuan`).value * 1;
  const scoreKhuVuc = document.getElementById(`khuVuc`).value * 1;
  const scoreDoituong = document.getElementById(`doiTuong`).value * 1;

  const score1 = document.getElementById(`inputScore1`).value * 1;
  const score2 = document.getElementById(`inputScore2`).value * 1;
  const score3 = document.getElementById(`inputScore3`).value * 1;

  const resultBT1 = document.getElementById(`txtResultBT1`);

  const score = score1 + score2 + score3 + scoreKhuVuc + scoreDoituong;

  if (score1 === 0 || score2 === 0 || score3 === 0) {
    document.getElementById("txtResultBT1").textContent = `Rớt (Có môn điểm 0)`;
    return;
  }

  if (score >= scoreChuan) {
    document.getElementById("txtResultBT1").textContent = `Đậu. Tổng điểm là: ${score} `;
  } else {
    document.getElementById(
      "txtResultBT1"
    ).textContent = `Rớt. Tổng điểm là ${score}`;
  }
};

// bt2

const btnBT2 = document.getElementById(`btnBT2`);

btnBT2.onclick = function() {
  const hoTen = document.getElementById("inputName").value;
  const soKw = document.getElementById("inputKW").value * 1;

  const resultBT2 = document.getElementById("txtResultBT2");

  let tienDien = 0;

  if (soKw <= 50) {
    tienDien = soKw * 500;
  } else if (soKw <= 100) {
    tienDien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }

  resultBT2.textContent = `Họ tên: ${hoTen}, Số tiền điện: ${tienDien.toLocaleString('vi-VN', { style: 'currency', currency: `VND`})}`;
};

// bt3

const btnBT3 = document.getElementById(`btnBT3`);

btnBT3.onclick = function() {
  const hoTen2 = document.getElementById('inputName2').value;
  const luong = document.getElementById('inputSalary').value * 1;
  const nguoiPhuthuoc = document.getElementById('inputUser').value * 1;

  const tax = luong - 4e+6 - (nguoiPhuthuoc * 1.6e+6);

  const resultBT3 = document.getElementById('txtResultBT3');

  let tienThue = 0;

  if(tax <= 60e+6) {
    tienThue = tax * 0.05;
  } else if (tax <= 120e+6) {
    tienThue = 60e+6 * 0.05 + (tax - 60e+6) * 0.1;
  } else if (tax <= 210e+6) {
    tienThue = 60e+6 * 0.05 + 120e+6 * 0.1 + (tax - 120e+6) * 0.15;
  } else if (tax <= 384e+6) {
    tienThue = 60e+6 * 0.05 + 120e+6 * 0.1 + 210e+6 * 0.15 + (tax - 210e+6) * 0.2;
  } else if (tax <= 624e+6) {
    tienThue = 60e+6 * 0.05 + 120e+6 * 0.1 + 210e+6 * 0.15 + 384e+6 * 0.2 + (tax - 384e+6) * 0.25;
  } else if (tax <= 960e+6) {
    tienThue = 60e+6 * 0.05 + 120e+6 * 0.1 + 210e+6 * 0.15 + 384e+6 * 0.2 + 624e+6 * 0.25 + (tax - 624e+6) * 0.3;
  } else {
    tienThue = 60e+6 * 0.05 + 120e+6 * 0.1 + 210e+6 * 0.15 + 384e+6 * 0.2 + 624e+6 * 0.25 + 960e+6 * 0.3 + (tax - 960e+6) * 0.35;
  }

  resultBT3.textContent = `Họ Tên: ${hoTen2}, Số tiền thuế: ${tienThue.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`;
}

// bt4

const disableInput = () => {
  const khachHang = document.getElementById(`Customer`).value;
  const ketNoi = document.getElementById(`inputConnect`);
  if (khachHang === `company`) {
    ketNoi.style.display = `block`;
  } else {
    ketNoi.style.display = `none`;
  }
}

const btnBT4 = document.getElementById(`btnBT4`);
debugger
btnBT4.onclick = function() {
  const khachHang = document.getElementById(`Customer`).value;
  const maKhachHang = document.getElementById(`inputID`).value;
  const kenhCaoCap = document.getElementById(`inputChanel`).value * 1;
  const soKetNoi = document.getElementById(`inputConnect`).value * 1;
 
  const resultBT4 = document.getElementById(`txtResultBT4`);

  let phiXuLyHoaDon = 0;
  let phiDichVuCoBan = 0;
  let phiThueKenh = 0;
  let tongTien = 0;

  if (khachHang === 'user') {
    phiXuLyHoaDon = 4.5;
    phiDichVuCoBan = 20.5;
    phiThueKenh = kenhCaoCap * 7.5;
  } else if (khachHang === 'company') {
    phiXuLyHoaDon = 15;
    phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
    phiThueKenh = kenhCaoCap * 50;
  }

  tongTien = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenh; 
  resultBT4.textContent = `Mã khách hàng: ${maKhachHang}, Tổng tiền cáp: ${tongTien.toLocaleString(`en-US`, {style: `currency`, currency: `USD`})}`
}

