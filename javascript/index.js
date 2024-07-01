class JuegoPiedraPapelTijera {
  constructor() {
    this.elejir = ["piedra", "papel", "tijera"];
    this.puntajeJugador = 0;
    this.puntajeComputadora = 0;
    this.empate = 0;
    this.rondaActual = 0;
    this.maxRondas = 3;

    this.resultadoElemento = document.getElementById("resultado");
    this.puntajeElemento = document.getElementById("puntaje");
    this.rondasElemento = document.getElementById("rondas");

    document
      .getElementById("piedra")
      .addEventListener("click", () => this.jugarRonda("piedra"));
    document
      .getElementById("papel")
      .addEventListener("click", () => this.jugarRonda("papel"));
    document
      .getElementById("tijera")
      .addEventListener("click", () => this.jugarRonda("tijera"));

    this.actualizarRondas();
    this.actualizarPuntaje();
  }

  obtenerEleccionComputadora() {
    return this.elejir[Math.floor(Math.random() * this.elejir.length)];
  }

  determinarGanador(jugador1, computadora) {
    if (jugador1 === computadora) {
      this.empate++;
      return "Empate en esta ronda.";
    } else if (
      (jugador1 === "piedra" && computadora === "tijera") ||
      (jugador1 === "papel" && computadora === "piedra") ||
      (jugador1 === "tijera" && computadora === "papel")
    ) {
      this.puntajeJugador++;
      return "El jugador gana esta ronda.";
    } else {
      this.puntajeComputadora++;
      return "La computadora gana esta ronda.";
    }
  }

  actualizarPuntaje() {
    this.puntajeElemento.textContent = `Puntaje - Jugador: ${this.puntajeJugador}, Computadora: ${this.puntajeComputadora}, Empates: ${this.empate}`;
  }

  actualizarRondas() {
    this.rondasElemento.textContent = `Ronda ${this.rondaActual + 0} de ${
      this.maxRondas
    }`;
  }

  jugarRonda(jugador1) {
    if (this.rondaActual >= this.maxRondas) {
      this.resultadoElemento.textContent =
        "El juego ha terminado. Refresca la página para jugar de nuevo.";
      return;
    }

    const computadora = this.obtenerEleccionComputadora();
    const resultado = this.determinarGanador(jugador1, computadora);
    this.resultadoElemento.textContent = `Jugador elige: ${jugador1}, Computadora elige: ${computadora}. ${resultado}`;
    this.rondaActual++;
    this.actualizarPuntaje();
    this.actualizarRondas();

    if (this.rondaActual >= this.maxRondas) {
      this.mostrarResultadoFinal();
    }
  }

  mostrarResultadoFinal() {
    if (this.puntajeJugador > this.puntajeComputadora) {
      this.resultadoElemento.textContent += " ¡El jugador gana el juego!";
    } else if (this.puntajeJugador < this.puntajeComputadora) {
      this.resultadoElemento.textContent += " ¡La computadora gana el juego!";
    } else {
      this.resultadoElemento.textContent += " ¡El juego termina en empate!";
    }
  }
}

const juego = new JuegoPiedraPapelTijera();


const toggleModeButton = document.getElementById("toggleModeButton");

toggleModeButton.addEventListener("click", function() {
    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")) {
        toggleModeButton.textContent = "modo claro";
    } else {
        toggleModeButton.textContent = "modo oscuro";
    }
});
