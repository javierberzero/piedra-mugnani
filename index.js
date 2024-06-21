
class JuegoPiedraPapelTijera {
  constructor() {
    this.elejir = ["piedra", "papel", "tijera"];
    this.puntajeJugador = 0;
    this.puntajeComputadora = 0;
    this.empate = 0;
  }

  mostrarOpciones() {
    console.log("Opciones disponibles:");
    for (let opciones in this.elejir) {
      console.log(`${opciones}: ${this.elejir[opciones]}`);
    }
  }

  obtenerEleccionJugador() {
    let jugador1 = prompt("Ingrese piedra, papel o tijera").toLowerCase();

    while (!this.elejir.includes(jugador1)) {
      jugador1 = prompt(
        "Entrada inválida. Por favor ingrese piedra, papel o tijera"
      ).toLowerCase();
    }

    return jugador1;
  }

  obtenerEleccionComputadora() {
    return this.elejir[Math.floor(Math.random() * this.elejir.length)];
  }

  determinarGanador(jugador1, computadora) {
    if (jugador1 === computadora) {
      this.empate++;
      console.log("Empate en esta ronda.");
    } else if (
      (jugador1 === 'piedra' && computadora === 'tijera') ||
      (jugador1 === 'papel' && computadora === 'piedra') ||
      (jugador1 === 'tijera' && computadora === 'papel')
    ) {
      this.puntajeJugador++;
      console.log("El jugador gana esta ronda.");
    } else {
      this.puntajeComputadora++;
      console.log("La computadora gana esta ronda.");
    }
  }

  jugarRonda() {
    const jugador1 = this.obtenerEleccionJugador();
    const computadora = this.obtenerEleccionComputadora();

    console.log(`Jugador elige: ${jugador1}`);
    console.log(`La computadora elige: ${computadora}`);

    this.determinarGanador(jugador1, computadora);

    console.log(`Puntaje actual - Jugador: ${this.puntajeJugador}, Computadora: ${this.puntajeComputadora}, Empates: ${this.empate}`);
  }

  jugarJuego() {
    for (let ronda = 1; ronda <= 3; ronda++) {
      console.log(`Ronda ${ronda}`);
      this.jugarRonda();
    }

    if (this.puntajeJugador > this.puntajeComputadora) {
      console.log("¡El jugador gana el juego!");
    } else if (this.puntajeJugador < this.puntajeComputadora) {
      console.log("¡La computadora gana el juego!");
    } else {
      console.log("El juego termina en empate!");
    }
  }
}

const juego = new JuegoPiedraPapelTijera();
juego.mostrarOpciones();
juego.jugarJuego();