

const citas = [];


// Función para agregar una nueva cita

function agregarCita() {
    const nombre = prompt("Ingrese el nombre del paciente:");
    const fecha = prompt("Ingrese la fecha de la cita (DD-MM-YYYY):");
    const hora = prompt("Ingrese la hora de la cita (HH:MM):");

    if (nombre && fecha && hora) {
        citas.push({ nombre, fecha, hora });
        alert(`Cita agendada para ${nombre}  para el ${fecha} a las ${hora}.`);
    } else {
        alert("Todos los campos son obligatorios.");
    }
}

// Función para mostrar cita
function mostrarCitas() {
    if (citas.length === 0) {
      alert("No hay citas agendadas.");
      return;
    }
  
    let mensaje = "Citas agendadas:\n";
    for (const cita of citas) {
      mensaje += `- ${cita.nombre} para el ${cita.fecha} a las ${cita.hora}.\n`;
    }
    alert(mensaje);
  }

while (true) {
    const opcion = prompt(`
      Menú de agenda:
  
      1. Ingresar cita
      2. Mostrar citas
      3. Salir
  
      Ingrese la opción deseada:
    `);
  
    switch (opcion) {
      case "1":
        agregarCita();
        break;
      case "2":
        mostrarCitas();
        break;
      case "3":
        alert("Saliendo del simulador...");
        break;
      default:
        alert("Opción inválida. Intente nuevamente.");
    }
  
    if (opcion === "3") {
      break; 
    }
  }