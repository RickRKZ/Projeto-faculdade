// login
function logar(){

    var login = document.getElementById(`login`).value;
    var senha = document.getElementById(`senha`).value;

    if(login == "admin" && senha == "jabuti24@"){
        location.href = "index.html";
    }else{
        alert(`Usuario ou senha incorreta`);
     }
 }