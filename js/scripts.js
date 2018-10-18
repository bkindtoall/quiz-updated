$(document).ready(function() {
  $("#blanks form").submit(function() {
    event.preventDefault();
    var name = $("input#name").val();
    var gender = $("#gender").val();
    var interest = $("#interest").val();
    if (name) {
      $(".name").text(name);
      $(".story").show();
      if (gender==0 && interest==0) {
        $(".niki").show();
      } else if (gender==0 && interest==1){
        $(".charlize").show();
      } else if (gender==0 && interest==2){
        $(".maria").show();
      } else if (gender==1 && interest==0){
        $(".adam").show();
      } else if (gender==1 && interest==1){
        $(".chris").show();
      } else if (gender==1 && interest==2){
        $(".lebron").show();
      }
    } else {
      alert("Please enter a name")
    }
  });
});
