document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");
    
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("regEmail").value;
        const password = document.getElementById("regPassword").value;

     
        const passwordHash = btoa(password);

        
        const user = {
            email: email,
            passwordHash: passwordHash
        };

       
        localStorage.setItem("user", JSON.stringify(user));

        alert("Registro exitoso. Ahora puedes iniciar sesión.");
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

       
        const passwordHash = btoa(password); 
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser) {
            if (email === storedUser.email && passwordHash === storedUser.passwordHash) {
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