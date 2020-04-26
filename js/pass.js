function Accept() {
      var pass = prompt("Введите менторский пароль:", "");
      if (pass == null)  
            window.location = "main.html";
      else if (pass.toLowerCase() == "1234")  
            window.location = "masters.html";
      else  
            window.location = "main.html";
}