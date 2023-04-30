let INDEX_PREGUNTA = 0;
let puntaje = 0;

function empezar(){
  Swal.fire({
    title: 'Preguntas aleatorias de examen vial categoria B La Matanza',
    html: '<p>¿Listo para empezar?</p>',
    showDenyButton: true,
    confirmButtonText: 'Empezar',
    denyButtonText: `Aun no`,
    icon: 'question',
  }).then((result) => {
    if (result.isConfirmed) {
      let timerInterval
      Swal.fire({
        imageUrl: 'https://media.tenor.com/0K54Q8lCe1YAAAAC/mucha-suerte-gato.gif',
        title: '¡Mucha Suerte!',
        html: 'Empezando en <b>3...2..1...</b>',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            const timeLeft = Swal.getTimerLeft() / 1000 // convertir a segundos
            b.textContent = `${timeLeft.toFixed()}` // mostrar segundos con una decimal
          }, 10)
        },
        willClose: () => {
          clearInterval(timerInterval)
        },
      });
      cargarPregunta(INDEX_PREGUNTA)
    }
    else if (result.isDenied) {
      Swal.fire({
        text:'Recuerda que puedes empezar el examen las veces que quieras',
        hideClass: {
          popup: 'animate__animated animate__hinge'
        },
      })
      cargarPregunta(undefined)
    }
  })
  
}

function presentacion(){
  Swal.fire({
    title: 'Simulador de examen teórico | Educación vial ',
    html: '<p>Simulador hecho con fines didacticos con preguntas del examen (clase B) del municipio de La Matanza. <br> <strong>Sin limite de tiempo</strong>. <br> Las preguntas son las mismas que se encuentran en la pagina del municipio de La Matanza.</p>',
    imageUrl: 'https://media.tenor.com/hob0Ow4ZoakAAAAC/traffic-light.gif',
    imageHeight: 270,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass:{
      popup:'animate__animated animate__backOutDown'
    }
    
  })
}

function cargarPregunta(index) {
  baseDePreguntas.sort(() => Math.random() -0.5);
  objetoPregunta = baseDePreguntas[index];
  opciones = [...objetoPregunta.distractores];
  opciones.push(objetoPregunta.respuesta);
  for (let i = 0; i < 3; i++) {
    opciones.sort(() => Math.random() - 0.5);
  }

  document.getElementById("preguntaNum").innerHTML = `Pregunta N° ${index + 1} `;
  document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;
  if (objetoPregunta.imagen) {
    document.getElementById("imagen").src = objetoPregunta.imagen;
    document.getElementById("imagen").style.display = "";
  } else {
    document.getElementById("imagen").style.display = "none";
  }

  

  document.getElementById("opcion-1").innerHTML = opciones[0];
  document.getElementById("opcion-2").innerHTML = opciones[1];
  document.getElementById("opcion-3").innerHTML = opciones[2];
  document.getElementById("opcion-4").innerHTML = opciones[3];
}

async function seleccionarOpción(index) {
  let validezRespuesta = opciones[index] == objetoPregunta.respuesta;
  if (validezRespuesta) {
    await Swal.fire({
      title: "Respuesta correcta",
      confirmButtonText: 'Siguiente',
      showClass: {
        popup: 'animate__animated animate__zoomIn'
      },
      text: "La respuesta ha sido correcta",
      icon: "success",
    });
    puntaje++;
  } else {
    await Swal.fire({
      title: "Respuesta Incorrecta",
      html: `<p class="resIncorrecta">La respuesta correcta es: <br>  <strong>${objetoPregunta.respuesta}</strong></p>`,
      confirmButtonText: 'Siguiente',
      showClass: {
        popup: 'animate__animated animate__shakeX'
      },
      icon: "error",
    });
  }
  INDEX_PREGUNTA++;
  if (INDEX_PREGUNTA >= 40) {
    if(puntaje >= 34){
      await Swal.fire({
        title: "APROBADO",
        text: `Tu puntaje fue de: ${puntaje}/${40}`,
        icon: "success"
      });
      empezar()
    }
    
    else{
      await Swal.fire({
        title: "DESAPROBADO",
        html: `Tu puntaje fue de: ${puntaje}/${40} <br> <strong>RECUERDA QUE SE NECESITA 34 PUNTOS O MAS PARA APROBAR</strong>`,
        icon: "error"
      });
      empezar();
      
    }
    INDEX_PREGUNTA = 0;
    puntaje = 0;
  }
  
  cargarPregunta(INDEX_PREGUNTA);
}


