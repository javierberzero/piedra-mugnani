document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");
  
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("regEmail").value;
        const password = document.getElementById("regPassword").value;

        
        const passwordHash = btoa(password); 


        
        localStorage.setItem("email", email);
        localStorage.setItem("passwordHash", passwordHash);
        Swal.fire({
            title: "Good job!",
            text: "Registro exitoso. Ahora puedes iniciar sesión.!",
            icon: "success"
          });
   
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

    
        const passwordHash = btoa(password); 


        const storedEmail = localStorage.getItem("email");
        const storedPasswordHash = localStorage.getItem("passwordHash");

        if (storedEmail && storedPasswordHash) {
            
            if (email === storedEmail && passwordHash === storedPasswordHash) {
                alert("Inicio de sesión exitoso");
              
                 window.location.href = "../index.html";
            } else {
                alert("Correo electrónico o contraseña incorrectos");
            }
        } else {
            alert("Correo electrónico o contraseña no registrados");
        }
    });
});