$(document).ready(function () {
    $(".number").on("click", function () {
      $("#result").val($("#result").val() + $(this).html());
    });

    $("#calculate").on("click", function () {
      $("#finalresult").val(eval($("#result").val()));
    });

    $("#clear").on("click", function () {
      $("#result,#finalresult").val("");
    });

    $(".back").on("click", function () {
      del = $("#result").val();
      $("#result").val(del.substring(0, del.length - 1));
    });
  });