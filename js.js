document.addEventListener("DOMContentLoaded", function () {
  var buscarPeople = document.getElementById("buscarPeople");

  buscarPeople.addEventListener("click", function () {
    var idPeople = $("#idPeople").val();

    var myHEADER = "https://swapi.dev/api/people/" + idPeople + "";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        var res = JSON.parse(this.response);
        document.getElementById("name").value = res.name;
        document.getElementById("height").value = res.height;
        document.getElementById("birth_year").value = res.birth_year;
      }
    };

    xmlhttp.open("GET", myHEADER);

    xmlhttp.send();
    console.log("acabou");
  });
});
