
let boton = document.querySelector("#boton")

let modo = localStorage.getItem("modo")

if (modo){
  document.body.className = modo
}

boton.onclick = ()=>{
if(document.body.className == "modo-oscuro"){
    document.body.className = "modo-claro"
}else{
  document.body.className = "modo-oscuro"
}
let modo = document.body.className
localStorage.setItem("modo", modo)
}
