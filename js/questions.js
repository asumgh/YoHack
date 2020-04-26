$.ajax({
    url: 'KROC.html',
    dataType: 'text',
  }).done(new_qua);
function new_qua() {
    var text = document.getElementById("fName").value;
    var name = String(document.getElementById("RowPlaceholder2").value);
    name += ".html";
    var button = <a href={name} class="left"><button type="button" class="btn btn-warning btn-lg">;
    button += {text}</button></a>;
    $('table').append(button);
  }