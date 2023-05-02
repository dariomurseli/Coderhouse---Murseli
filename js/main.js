// La tercera pre-entrega consiste en:
// Definir eventos a manejar y su función de respuesta: el manejo de DOM y eventos, deben permitir dar
// notificaciones al usuario, del resultado de las funciones de procesos (funcionalidades simuladas para el circuito escogido).
// Modificar el DOM, ya sea para definir elementos al cargar la página o para realizar salidas de un procesamiento. Como lo
// vimos en las clases 10 y 11 donde interactuamos con el DOM para listar elementos o mostrar datos de un objeto (entidad de nuestro
// contexto) en alguna sección de nuestro HTML.
// Deberán agregar y entregar uso de JSON y Storage: almacenar datos (mediante clave-valor) en el Storage y recuperarlos, permitirá
// un almacenamiento y gestión de la información más apropiada para conseguir el flujo de la simulación deseada (como lo vimos en la
// clase 11 cuando creamos carreras y le añadimos cátedras o cuando matriculamos estudiantes a una carrera).
// En relación con la primera y segunda pre-entregas: ya no usamos alert() como salida y promt() como entrada,
// ahora modificamos el DOM para las salidas y capturamos los eventos del usuario sobre inputs y botones para las entradas.
// No dejar código comentado, descartarlo.


class Paciente {
  constructor(
    nombre,
    apellido,
    telefono,
    edad,
    obraSocial,
    diaAsignado,
    horaAsignada

  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.edad = edad;
    this.obraSocial = obraSocial;
    this.diaAsignado = diaAsignado;
    this.horaAsignada = horaAsignada;
  }
}

let misPacientes = [];

const form = document.getElementById("cargaForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  cargarPaciente();
});


const cargarPaciente = () => {
  let nombresInput = document.getElementById("nombresInput").value;
  let apellidosInput = document.getElementById("apellidosInput").value;
  let telefonoInput = document.getElementById("telefonoInput").value;
  let edadInput = document.getElementById("edadInput").value;
  let inicioInput = document.getElementById("inicioInput").value;
  let diaInput = document.getElementById("diaInput").value;
  let horaInput = document.getElementById("horaInput").value;
  let emailInput = document.getElementById("emailInput").value;
  let obraSocialSelect = document.getElementById("obraSocialSelect").value;


  const nuevoPaciente = new Paciente(
    nombresInput,
    apellidosInput,
    telefonoInput,
    edadInput,
    inicioInput,
    diaInput,
    horaInput,
    emailInput
  );

  misPacientes.push(nuevoPaciente);
  localStorage.setItem("datos", JSON.stringify(misPacientes));
  const pacientesEnLocalStorage = JSON.parse(localStorage.getItem("datos"));
  console.log(pacientesEnLocalStorage);
};
