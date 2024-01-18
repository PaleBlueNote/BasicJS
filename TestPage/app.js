//네비게이션 바 애니메이션
$(".navbar-toggler").on("click", function () {
  if ($(".list-group").hasClass("show")) {
    $(".list-group-item").slideToggle(() => {
      $(".list-group").toggleClass("show");
    });
  } else {
    $(".list-group").toggleClass("show");
    $(".list-group-item").slideToggle();
  }
});

//모달창 열고 닫기
$("#login-btn, #close").on("click", function () {
  $(".black-bg").toggleClass("modal-show");
});

//로그인 모달 내 이메일과 비밀번호 유효 알람 발생
$("#login-modal-form").on("submit", function (e) {
  let emailInput = document.getElementById("exampleInputEmail1").value;
  let emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  let pwInput = document.getElementById("exampleInputPassword1").value;
  let pwRegex = /[A-Z]/;
  if (emailInput.trim() === "") {
    alert("email 주소를 입력하세요.");
    e.preventDefault();
  } else if (!emailRegex.test(emailInput)) {
    alert("올바른 email 형식이 아닙니다.");
    e.preventDefault();
  }
  if (pwInput.trim() === "") {
    alert("비밀번호를 입력하세요.");
    e.preventDefault();
  } else if (!pwRegex.test(pwInput)) {
    alert("비밀번호에 대문자 포함해주세요");
    e.preventDefault();
  }
});

//다크모드 버튼 색깔과 내용바꾸기
$("#darkMode-btn").on("click", function () {
  var mode = document.getElementById("darkMode-btn").innerHTML;
  console.log(mode);
  if (document.getElementById("darkMode-btn").innerHTML === "Dark") {
    document.getElementById("darkMode-btn").innerHTML = "Light";
  } else {
    document.getElementById("darkMode-btn").innerHTML = "Dark";
  }
});

//setTimeout 실습
let count = 5;
let timmer = setInterval(function () {
  console.log(count);
  if (count >= 0) {
    count--;
    document.getElementById("timmer").innerHTML = count;
  }
  if (count === 0) {
    $(".alert").hide();
    clearTimeout(timmer);
  }
}, 1000);

//slide box
$(".slide-button-01").on("click", function () {
  $(".slide-contianer").css("transform", "translateX(0vw)");
});
$(".slide-button-02").on("click", function () {
  $(".slide-contianer").css("transform", "translateX(-100vw)");
});
$(".slide-button-03").on("click", function () {
  $(".slide-contianer").css("transform", "translateX(-200vw)");
});

//이미지 슬라이드
$(document).ready(function () {
  var currentValue = 0; // 초기 위치 값 설정

  // "slide-button-04" 클래스를 가진 버튼에 이벤트 리스너를 추가
  $(".slide-button-04").on("click", function () {
    // 현재 위치에서 100vw 만큼 왼쪽으로 이동
    currentValue -= 100;

    console.log(currentValue);
    // 새로운 값에 다시 vw 단위를 붙여서 transform 속성에 할당
    $(".slide-container").css(
      "transform",
      "translateX(" + currentValue + "vw)"
    );
  });

  // "slide-button-05" 클래스를 가진 버튼에 이벤트 리스너를 추가
  $(".slide-button-05").on("click", function () {
    // 현재 위치에서 100vw 만큼 오른쪽으로 이동
    currentValue += 100;

    console.log(currentValue);
    // 새로운 값에 다시 vw 단위를 붙여서 transform 속성에 할당
    $(".slide-container").css(
      "transform",
      "translateX(" + currentValue + "vw)"
    );
  });
});
