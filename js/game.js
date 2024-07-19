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

    this.botones = {
      piedra: document.getElementById("piedra"),
      papel: document.getElementById("papel"),
      tijera: document.getElementById("tijera"),
    };

    this.botones.piedra.addEventListener("click", () => this.jugarRonda("piedra"));
    this.botones.papel.addEventListener("click", () => this.jugarRonda("papel"));
    this.botones.tijera.addEventListener("click", () => this.jugarRonda("tijera"));
    document.getElementById("reiniciar").addEventListener("click", () => this.reiniciarJuego());
    document.getElementById("iniciar").addEventListener("click", () => this.iniciarJuego());

    this.actualizarRondas();
    this.actualizarPuntaje();
  }

  iniciarJuego() {
    const maxRondasInput = document.getElementById("maxRondas");
    this.maxRondas = parseInt(maxRondasInput.value, 10) || 3;
    this.reiniciarJuego();
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
    this.rondasElemento.textContent = `Ronda ${this.rondaActual + 1} de ${this.maxRondas}`;
  }

  jugarRonda(jugador1) {
    if (this.rondaActual >= this.maxRondas) {
      this.resultadoElemento.textContent = "El juego ha terminado. Presiona 'Reiniciar Juego' para jugar de nuevo.";
      return;
    }

    this.resultadoElemento.textContent = "Eligiendo...";

    setTimeout(() => {
      const computadora = this.obtenerEleccionComputadora();
      const resultado = this.determinarGanador(jugador1, computadora);
      this.resultadoElemento.textContent = `Jugador elige: ${jugador1}, Computadora elige: ${computadora}. ${resultado}`;
      this.rondaActual++;
      this.actualizarPuntaje();
      this.actualizarRondas();

      if (this.rondaActual >= this.maxRondas) {
        this.mostrarResultadoFinal();
        this.deshabilitarBotones();
      }
    }, 1000);
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

  deshabilitarBotones() {
    this.botones.piedra.disabled = true;
    this.botones.papel.disabled  = true;
    this.botones.tijera.disabled = true;
  }

  habilitarBotones() {
    this.botones.piedra.disabled = false;
    this.botones.papel.disabled = false;
    this.botones.tijera.disabled = false;
  }

  reiniciarJuego() {
    this.puntajeJugador = 0;
    this.puntajeComputadora = 0;
    this.empate = 0;
    this.rondaActual = 0;
    this.resultadoElemento.textContent = "";
    this.actualizarPuntaje();
    this.actualizarRondas();
    this.habilitarBotones();
  }
}

const juego = new JuegoPiedraPapelTijera();