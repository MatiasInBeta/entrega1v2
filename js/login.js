document.getElementById("formulario").addEventListener("submit", login)

 function login(event){
    event.preventDefault();
    let usuario= document.getElementById("usuario").value
    let contra= document.getElementById("clave").value
    if (validarPassword(contra) && validarUsuario(usuario)) {
      localStorage.setItem("llamalaComoQuieras", true)
      window.location.href = "./index.html";
    } 

 }


 function validarPassword(password){
   let regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/;
   let flag = true;
   if(password == ""){
      flag = false;
      alert("La contraseña no puede estar vacia");
   }
   else if(password.lenght < 6){
      flag = false;
      alert("La contraseña debe tener mas de 6 caracteres");
   }
   else if(!regex.test(password)){
      flag = false;
      alert("La password debe tener letras y numeros");
   }

   return flag;
 }

 function validarUsuario(usuario){
   let regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/;
   let flag = true;
   if(usuario == ""){
      flag = false;
      alert("El usuario no debe estar vacio");
   }
   else if(!regex.test(usuario)){
      flag = false;
      alert("El usuario debe tener letras y numeros");
   }

   return flag;
    
 }