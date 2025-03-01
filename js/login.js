let usuariosRegistrados = [];
fetch("db.json")
    .then(response => response.json())
    .then(datos => {
        usuariosRegistrados = datos;

        
        const localStorageUsers = JSON.parse(localStorage.getItem("users"));
        if (localStorageUsers) {
            usuariosRegistrados = usuariosRegistrados.concat(localStorageUsers);
        }
    });

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("regEmail").value;
        const password = document.getElementById("regPassword").value;

        const passwordHash = btoa(password);

        const user = {
            email: email,
            passwordHash: passwordHash
        };

        usuariosRegistrados.push(user);
        localStorage.setItem("users", JSON.stringify(usuariosRegistrados));
    });
}

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

     
        const passwordHash = btoa(password);

        let usuarioEncontrado = usuariosRegistrados.find(usuario => usuario.email === email);
        if (usuarioEncontrado) {
            if (usuarioEncontrado.passwordHash === passwordHash) {
                Swal.fire({
                    title: "Ingreso Exitoso!",
                    text: "Puedes jugar!",
                    icon: "success",
                   
                  });
                  setTimeout(() => {
                    window.location.href = "../pages/game.html";

                  }, 3000);
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Wrong Password!",
                    icon: "error"
                  });
            }
        } else {
            Swal.fire({
                title: "Error!",
                text: "Wrong Email!",
                icon: "error"
              });
        }
    });
}