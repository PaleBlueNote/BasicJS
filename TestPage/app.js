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

$("#login-btn, #close").on("click", function () {
  $(".black-bg").toggleClass("modal-show");
});

$("#login-modal-form").on("submit", function (e) {
  if (document.getElementById("exampleInputEmail1").value == "") {
    alert("email 공백");
    e.preventDefault();
  }
});

$("#darkMode-btn").on("click", function () {
  var mode = document.getElementById("darkMode-btn").innerHTML;
  console.log(mode);
  if (document.getElementById("darkMode-btn").innerHTML === "Dark") {
    document.getElementById("darkMode-btn").innerHTML = "Light";
  } else {
    document.getElementById("darkMode-btn").innerHTML = "Dark";
  }
});
