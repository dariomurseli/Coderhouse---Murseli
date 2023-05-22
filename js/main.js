const obrasSociales = [
  new ObraSocial(1, "Swizz Metrical"),
  new ObraSocial(2, "OXDE"),
  new ObraSocial(3, "Mortem lentum Salut"),
  new ObraSocial(4, "Amigos de la Salud"),
];
let obrasSocialList = document.getElementById("obraSocialSelect");

obrasSociales.forEach((unaObraSocial) => {
  let item = document.createElement("option");
  item.value = unaObraSocial.id.toString();
  item.innerText = unaObraSocial.nombre;
  obrasSocialList.append(item);
});


let misPacientes = [];

const form = document.getElementById("cargaForm");
const inputs = form.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  cargarPaciente();
  cargarTablaPacientes();
});

const cargarPaciente = () => {
  let nombresInput = document.getElementById("nombresInput").value;
  let apellidosInput = document.getElementById("apellidosInput").value;
  let telefonoInput = document.getElementById("telefonoInput").value;
  let edadInput = document.getElementById("edadInput").value;
  let diaInput = document.getElementById("diaInput").value;
  let horaInput = document.getElementById("horaInput").value;
  let emailInput = document.getElementById("emailInput").value;
  let obraSocialSelect = document.getElementById("obraSocialSelect").item;

  const nuevoPaciente = new Paciente(
    nombresInput,
    apellidosInput,
    telefonoInput,
    edadInput,
    diaInput,
    horaInput,
    emailInput,
    obraSocialSelect
  );

  // Obtener los pacientes ya existentes en el localStorage
  const pacientesEnLocalStorage =
    JSON.parse(localStorage.getItem("datos")) || [];

  // Agregar el nuevo paciente a la lista de pacientes
  pacientesEnLocalStorage.push(nuevoPaciente);

  // Guardar la lista actualizada de pacientes en localStorage
  localStorage.setItem("datos", JSON.stringify(pacientesEnLocalStorage));

  // Cargar la tabla actualizada de pacientes
  cargarTablaPacientes();
};

const cargarTablaPacientes = () => {
  const pacientesEnLocalStorage = JSON.parse(localStorage.getItem("datos"));
  const tablaPacientes = document.getElementById("tabla-pacientes");
  misPacientes = JSON.parse(localStorage.getItem("datos"));
  // Limpiar la tabla antes de agregar nuevos datos
  tablaPacientes.innerHTML = "";

  // Agregar cada paciente a la tabla
  pacientesEnLocalStorage.forEach((paciente) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${paciente.nombre}</td>
      <td>${paciente.apellido}</td>
      <td>${paciente.telefono}</td>
      <td>${paciente.edad}</td>
      <td>${paciente.email}</td>
      <td>${paciente.obraSocial}</td>
      <td>${paciente.diaAsignado}</td>
      <td>${paciente.horaAsignada}</td>
      
    `;
    tablaPacientes.appendChild(fila);
  });
  Swal.fire("Se a cargado correctamente el nuevo paciente");
};

//Accedo al boton por su ID
const botonBorrarStorage = document.getElementById("borrar-storage");
botonBorrarStorage.addEventListener("click", borrarStorage);

function borrarStorage() {
  localStorage.clear();
  location.reload();
}

// const botonBorrarCampos = document.getElementById("borrar-storage");
// botonBorrarCampos.addEventListener("click", borrarCampos);
function borrarCampos() {
  misPacientes.forEach((valor.values = " "));
}
misPacientes.forEach((element) => {
  console.log(element);
});

borrarCampos();
