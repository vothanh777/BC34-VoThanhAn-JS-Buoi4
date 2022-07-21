// Bài tập 1: sắp xếp tăng dần 3 số nguyên bất kì
document.getElementById("btnSapXep").onclick = function () {
  var num1 = document.getElementById("num1").value * 1;
  var num2 = document.getElementById("num2").value * 1;
  var num3 = document.getElementById("num3").value * 1;
  var output = "";
  if (num1 < num2) {
    if (num1 < num3) {
      output += num1 + " < ";
      if (num2 < num3) {
        output += num2 + " < " + num3;
      } else if (num2 == num3) {
        output += num2 + " = " + num3;
      } else {
        output += num3 + " < " + num2;
      }
    } else if (num1 == num3) {
      output += num1 + " = " + num3 + " < " + num2;
    } else {
      output += num3 + " < " + num2 + " < " + num1;
    }
  } else if (num1 == num2) {
    if (num1 < num3) {
      output += num1 + " = " + num2 + " < " + num3;
    } else if (num1 == num3) {
      output += num1 + " = " + num2 + " = " + num3;
    } else {
      output += num3 + " < " + num1 + " = " + num2;
    }
  } else {
    if (num2 < num3) {
      output += num2 + " < ";
      if (num1 < num3) {
        output += num1 + " < " + num3;
      } else if ((num1 = num3)) {
        output += num1 + " = " + num3;
      } else {
        output += num3 + " < " + num1;
      }
    } else if (num2 == num3) {
      output += num2 + " = " + num3 + " < " + num1;
    } else {
      output += num3 + " < " + num2 + " < " + num1;
    }
  }
  output = "Chuỗi tăng dần: " + output;
  document.getElementById("hienThiTangDan").innerHTML = output;
  document.getElementById("hienThiTangDan").classList.add("bg-success");
  document.getElementById("hienThiTangDan").classList.add("text-white");
};

//Bài tập 2: Chương trình “Chào hỏi” các thành viên trong gia đình
document.getElementById("btnXinChao").onclick = function () {
  var name_family = document.getElementById("name_family").value;
  var output = "";
  switch (name_family) {
    case "B":
      output = "Bố";
      break;
    case "M":
      output = "Mẹ";
      break;
    case "A":
      output = "Anh trai";
      break;
    default:
      output = "Em gái";
      break;
  }
  output = "Xin chào: " + output + "!";
  document.getElementById("hienThiLoiChao").innerHTML = output;
  document.getElementById("hienThiLoiChao").classList.add("bg-success");
  document.getElementById("hienThiLoiChao").classList.add("text-white");
};

// Bài tập 3: Chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn
function demSoChan(num1, num2, num3) {
  var soSoChan = 0;
  if (num1 % 2 == 0) {
    soSoChan++;
  }
  if (num2 % 2 == 0) {
    soSoChan++;
  }
  if (num3 % 2 == 0) {
    soSoChan++;
  }
  return soSoChan;
}
document.getElementById("btnDemChanLe").onclick = function () {
  var num1 = document.getElementById("number1").value * 1;
  var num2 = document.getElementById("number2").value * 1;
  var num3 = document.getElementById("number3").value * 1;

  var soSoChan = demSoChan(num1, num2, num3);
  var soSoLe = 3 - soSoChan;

  var output = "Số só chẵn: " + soSoChan + " - " + "Số số lẻ: " + soSoLe;

  document.getElementById("hienChanLe").innerHTML = output;
  document.getElementById("hienChanLe").classList.add("bg-success");
  document.getElementById("hienChanLe").classList.add("text-white");
};

// Bài tập 4: chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì?
document.getElementById("btnXacDinhTamGiac").onclick = function () {
  var canh1 = document.getElementById("canh1").value * 1;
  var canh2 = document.getElementById("canh2").value * 1;
  var canh3 = document.getElementById("canh3").value * 1;

  var output = "";

  if (canh1 == canh2 && canh1 == canh3) {
    output = "Tam giác đều";
  }
  if (
    (canh1 == canh2 && canh1 != canh3) ||
    (canh1 == canh3 && canh1 != canh2) ||
    (canh2 == canh3 && canh2 != canh1)
  ) {
    output = "Tam giác cân";
  }
  if (canh1 != canh2 && canh1 != canh3 && canh2 != canh3) {
    if (canh1 > canh2 && canh1 > canh3) {
      if (canh1 * canh1 == canh2 * canh2 + canh3 * canh3) {
        output = "Tam giác vuông";
      }
    } else if (canh2 > canh1 && canh2 > canh3) {
      if (canh2 * canh2 == canh1 * canh1 + canh3 * canh3) {
        output = "Tam giác vuông";
      }
    } else {
      if (canh3 * canh3 == canh2 * canh2 + canh1 * canh1) {
        output = "Tam giác vuông";
      }
    }
  }
  if (output == "") {
    output = "Tam giác thường";
  }

  document.getElementById("hienTenTamGiac").innerHTML = output;
  document.getElementById("hienTenTamGiac").classList.add("bg-success");
  document.getElementById("hienTenTamGiac").classList.add("text-white");
};
