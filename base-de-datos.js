
  let baseDePreguntas = [
    {
      pregunta: "¿Qué utilidad tienen los cinturones de seguridad?",
      respuesta: "Evitan y/o dismunuyen los daños físicos a las personas en caso de accidentes.",
      distractores: [
       "Son utiles sólo para las altas velocidades.",
       "Sirven para proteger a los menores."
      ],
    },
    {
      pregunta: "Ante la presencia de bancos de niebla y a fin de reducir riesgos ¿qué es lo que se recomienda?",
      respuesta: "Conducir con ambas manos en el volante. Reducir la velocidad.Aumentar la distancia entre vehículos y utilizar las luces del vehículo correspondiente.",
      distractores: [
        "Utilizar las luces rompeniebla. Lo cual es suficiente porque permite ampliar la visibilidad del conductor",
        "Detener se en la banquina hasta que levante el banco de niebla."
      ],
    },
    {
      pregunta: "Segun el manual del conductor , cuando la  luz naranja del semáforo peatonal se torna intermitente ¿qué conducta debe tomar el peatón que espera para cruzar?",
      respuesta: "No comenzar a cruzar la calzada.",
      distractores: ["Si está cruzando, finalizar el cruce con mucha precaución","Ambas respuestas (A y B) son correctas."],
    },
    {
      pregunta: "¿Que significa que el conductor es considerado resposable por impericia?",
      respuesta: "Que no ha respondido adecuadamente a una circuntancia del transito por falta de conocimiento opractica en  la conducción.",
      distractores: [
        "Que ha realizado un acto con su vehïculo que las reglas de prudencia indican no hacer, o sea, que ha actuado peligrosamente.", 
        "Que ha tenido una conducta negligente al circular con un vehiculo en mal estado"],
    },
    {
      pregunta: "El alcohol produce en el conductor",
      respuesta: "Un estado de euforia y de falsa seguridad en el mismo",
      distractores: [
          "Un aumento del campo visual", 
          "Una reducción del tiempo de reacción"],
    },
    {
      pregunta: "En cualquier circunstancia o situación posible. Durante la circulación ¿a qué le prestaría atención Ud. a fin de aumentar su seguridad y la de otros?",
      respuesta: "Las condiciones en que se encuentra el automóvil. Las condiciones relativas a infraestructura vial. Las condiciones climáticas y el estado del conductor",
      distractores: [
          "El estado del pavimento. Del auto y el clima.", 
          "Las condiciones en que se encuentra el conductor.Caudal de tránsito y  tipo de cubiertas"],
    },
    {
      pregunta: "¿Le está permitido penetrar en un paso a nivel cuando las barreras están en movimiento?",
      respuesta: "No",
      distractores: [
          "Sólo si me cercioro que puedo pasar con seguridad", 
          "Si, cuando están levantándose"],
    },
    {
      pregunta: "Como norma de carácter general ¿quién tiene prioridad de paso en una encrucijada o bocacalle?",
      respuesta: "El vehículo que se presenta por el lado derecho",
      distractores: [
          "Los vehículos de transporte de pasajero", 
          "El vehiculo de menor tamaño"],
    },
    {
      pregunta: "En una autopista esta prohibido:",
      respuesta: "Circular marcha atras",
      distractores: [
          "Sobrepasar a otros vehiculos", 
          "Detener por causa de fuerza mayor"],
    },
    {
      pregunta: "La negativa a realizar una prueba de alcoholemia ¿contituye una falta?",
      respuesta: "Siempre",
      distractores: [
          "Solo si se ha incurrido en una infraccion o participado en un accidente", 
          "No"],
    },
    {
      pregunta: "¿Que le indica esta señal?",
      imagen:'/fotos/puente angosto.png',
      respuesta: "Puente angosto",
      distractores: [
          "Calzada estrecha", 
          "Calzada sin banquina"],
    },
    {
      pregunta: "¿Que le indica esta señal?",
      imagen:'/fotos/estrechamiento en las dos manos.jpg',
      respuesta: "Estrechamiento de las dos manos",
      distractores: [
          "Puente angosto", 
          "Curva y contracurva"],
    },
    {
      pregunta: "¿Que le indica esta señal?",
      imagen:'/fotos/animales sueltos 1.jpg',
      respuesta: "Animales sueltos",
      distractores: [
          "Zona de caza", 
          "Zoologico"],
    },
    {
      pregunta: "¿Cual es la velocidad minima para circular en una calle?",
      respuesta: "20 KM/H",
      distractores: [
          "30 KM/H", 
          "40 kM/H"],
    },
    {
      pregunta: "¿Cual es la velocidad maxima para circular en zona rural?",
      respuesta: "110 KM/H",
      distractores: [
          "130 KM/H", 
          "120 kM/H"],
    },
    {
      pregunta: "¿Por cuanto tiempo es principiante el conductor que obtiene primera vez su licencia de conducir?",
      respuesta: "6 Meses",
      distractores: [
          "1 Año", 
          "5 Años"],
    },
    {
      pregunta: "¿En que caso la ley de transito autoriza el uso de la bocina?",
      respuesta: "En caso de peligro, o en zona rural",
      distractores: [
          "En el momento de atravezar un cruce.", 
          "En todo momento que el conductor lo crea necesario"],
    },
    {
      pregunta: "¿Que le indica esta señal?",
      imagen:'fotos/sentido de circulacion unico.jpg',
      respuesta: "Sentido de circulacion unico.",
      distractores: [
          "Giro obligatorio.", 
          "Sentido de circulacion permitido."],
    },
    {
      pregunta: "¿Que le indica esta señal?",
      imagen:'fotos/fin de autopista.jpg',
      respuesta: "Fin de autopista.",
      distractores: [
          "Calle cerrada", 
          "Prohibido subir a la autopista"],
    },
    {
      pregunta: "¿Que indican las lineas blancas discontinuas?",
      respuesta: "Es una demarcación que me permite hacer maniobras de adelantamiento",
      distractores: [
          "Es una demarcacion que divide carriles de circulación.", 
          "Es una demarcación que no me permite hacer maniobras de adelantamiento."],
    },
    {
      pregunta: "¿Cual es la forma correcta de adelantarse a otro vehículo?",
      respuesta: "Por la izquierda, haciendo las señales respectivas.",
      distractores: [
          "Por la derecha.", 
          "Por la banquina."],
    },
    {
      pregunta: "La instalación del airbag en un vehículo ¿sustituye la obligación de utilizar el cinturon de seguridad?",
      respuesta: "No, porque actúa complementando la protección que ofrece el cinturón de seguridad.",
      distractores: [
          "Si, porque evita el impacto del conductor y pasajeros contra los elementos del vehiculo.", 
          "Si, porque evita lesiones en la cabeza y cuello."],
    },
    {
      pregunta: "Con carácter general ¿está prohibido en zona urbana el uso de bocina en los vehiculos?",
      respuesta: "Está prohibido el uso indebido de la bocina.",
      distractores: [
          "No, está permitido.", 
          "Si, está prohibido."],
    },
    {
      pregunta: "Usted observa que una ambulancia se aproxima con las luces especiales encendidas ¿debe facilitar el paso?",
      respuesta: "No, porque sólo advierten de su presencia, pero no significa que estén realizando un servicio urgente.",
      distractores: [
          "Si, porque debo entender que circula en servicio.", 
          "Si, sólo cuando se advierta que está trasladando pacientes."],
    },
    {
      pregunta: "En la ciudad ¿está permitido usar la bocina del vehículo para advertir al conductor del vehículo que circula delante que va a ser adelantado?",
      respuesta: "No, porque no es uno de los usos admitidos.",
      distractores: [
          "Si, siempre que sea a intervalos cortos y el sonido emitido no sea estridente.", 
          "Si, salvo prohibición expresa mediante la correspondiente señal."],
    },
    {
      pregunta: "Con carácter general. Cuando nos encontramos con una señal de prohibido estacionar ¿está permitido parar para subir o bajar pasajeros de un automóvil?",
      respuesta: "Si.",
      distractores: [
          "No.", 
          "Según la hora."],
    },
    {
      pregunta: "¿Que le indica esta señal?",
      imagen:'/fotos/circulacion exclusiva-transporte publico.jpg',
      respuesta: "Circulación exclusiva (transporte público).",
      distractores: [
          "Limitación de largo vehículo", 
          "Tránsito pesado a la derecha"],
    },
    {
      pregunta: "En materia de responsabilidad penal ¿puede esta transferirse de una persona (por ejemplo, el conductor del vehículo que provoca el accidente) a otra (por ejemplo, el dueño del vehículo)",
      respuesta: "No, porque la responsabilidad penal es intransferible.",
      distractores: [
          "Si, y de este último también puede transferirse a la compañía de seguros.", 
          "El juez resolverá en función de la gravedad del accidente y sus consecuencias."],
    },
    {
      pregunta: "¿Qué vehículo puede realizar el remolque de otro vehículo averiado en la vía publica?",
      respuesta: "Solo los vehículos destinados a ese fin.",
      distractores: [
          "Cualquier vehículo que posea potencia suficiente para remolcar a otro vehículo y un elemento para asirlo firmemente sin riesgo alguno.", 
          "Cualquier vehículo que posea al menos algún elemento para asirlo firmemente sin riesgo."],
    },
    {
      pregunta: "Los vehículos de emergencia ¿Cuándo tiene prioridad de paso?",
      respuesta: "Cuando están en situación de emergencia.",
      distractores: [
          "Siempre.", 
          "Cuando están en una situación de emergencia y circulan por una avenida."],
    },
    {
      pregunta: "Determine que indica la señal que a continuación se presenta:",
      imagen:'/fotos/animales sueltos 2.jpg',
      respuesta: "Animales sueltos.",
      distractores: [
          "Zona rural.", 
          "Zoologico."],
    },
    {
      pregunta: "Circula detrás de otros vehículos por una vía urbana. Si al llegar a una intersección prevé que va quedar detenido en la misma obstruyendo la circulación transversal ¿Qué debe hacer? ",
      respuesta: "No penetrar en la intersección hasta estar seguro de que voy a poder franquearla sin ser un obstáculo.",
      distractores: [
          "Pasar si tengo preferencia de paso.", 
          "Intentar atravesar la intersección en el caso de que la luz este en verde."],
    },
    {
      pregunta: "Determine que indica la señal que a continuación se presenta:",
      imagen:'/fotos/No avanzar.jpg',
      respuesta: "No avanzar.",
      distractores: [
          "No girar en U(no retomar).", 
          "Puesto de control."],
    },
    {
      pregunta: "En materia de tránsito. Entre lo que establece la reglamentación. Lo que dicen las señales de tránsito y lo que indica la autoridad ¿qué debemos cumplir?",
      respuesta: "Lo que indica la autoridad. Lo que dicen las señales de tránsito y/o lo que establecen las reglamentaciones. En este orden.",
      distractores: [
          "Lo que indica la ley, lo que dicen las señales de tránsito y lo que indica la autoridad. En ese orden.", 
          "Lo que dicen las señales de tránsito, lo que indica la autoridad y los que establecen las reglamentaciones. En ese orden."],
    },
    {
      pregunta: "Si al aproximarse a una bocacalle sin semáforo, usted advierte que un peatón pretende efectuar el cruce desde su izquierda hacia su derecha ¿Qué debe hacer?",
      respuesta: "Cederle el paso, pues el peatón tiene prioridad.",
      distractores: [
          "Avanzar a velocidad precautoria, pues sólo tiene prioridad aquel que viene por la derecha.", 
          "La prioridad de paso es del vehículo ya que su marcha es más difícil de controlar."],
    },
    {
      pregunta: "En caso de niebla ¿es mejor parar en la banquina?",
      respuesta: "Nunca, si no hay otra posibilidad, debe alejarse lo más posible de la calzada y de la banquina.",
      distractores: [
          "Cuando la niebla es muy cerrada, sí.", 
          "Cuando la niebla no es muy cerrada, sí."],
    },
    {
      pregunta: "¿Que le indica esta señal?",
      imagen:'/fotos/corredor aereo.jpg',
      respuesta: "Corredor aereo.",
      distractores: [
          "Aeropuerto", 
          "Aeroparque"],
    },
    {
      pregunta: "¿Que le indica esta señal?",
      imagen:'/fotos/Limite de ancho.jpg',
      respuesta: "Limite de ancho.",
      distractores: [
          "Distancia de frenado", 
          "Limite de peso"],
    },
    {
      pregunta: "¿Cual es la velocidad minima para circular en una autopista?",
      respuesta: "65 KM/H",
      distractores: [
          "55 KM/H", 
          "70 kM/H"],
    },
    {
      pregunta: "¿Cual es la velocidad maxima para circular en una autopista?",
      respuesta: "130 KM/H",
      distractores: [
          "110 KM/H", 
          "120 kM/H"],
    },
    {
      pregunta: "¿Por donde no deben circular los conductores principiantes?",
      respuesta: "Zona centricas, rutas, autopistas ni semiautopistas",
      distractores: [
          "Calles, avenidad y autopistas", 
          "rutas y avenidas"],
    },
    {
      pregunta: "¿Cual es la velocidad precautoria que indica la ley de transito para cruzar una encrucijada urbana sin semáforo?",
      respuesta: "30 KM/H",
      distractores: [
          "40 KM/H", 
          "20 kM/H"],
    },
    {
      pregunta: "¿Cual es la velocidad maxima para circular en semiautopista?",
      respuesta: "120 KM/H",
      distractores: [
          "130 KM/H", 
          "110 kM/H"],
    },
    {
      pregunta: "Si usted visualiza un vehículo con calcos rectangulares a cuadros rojos y amarillos ¿Qué interpreta?",
      respuesta: "Que es un vehículo conducido por una persona discapacitada.",
      distractores: [
          "Que es un vehículo de servicio de emergencia.", 
          "Que es un vehículo destinado al auxilio mecánico."],
    },
    {
      pregunta: "Usted a adelantado a otro vehículo en una intersección ¿es correcto su comportamiento?",
      respuesta: "No, porque en las intersecciones siempre está prohibido adelantar.",
      distractores: [
          "Si, porque en este caso tengo prioridad de paso en la intersección.", 
          "No, porque solo está permitido adelantar en las intersecciones con rotondas."],
    },
    {
      pregunta: "Por norma general, las luces traseras de los vehículos deben ser de color rojo (de posición y freno) y amarillas (giros), ¿Por qué la luz de marcha atrás debe ser blanca?",
      respuesta: "Porque indica el sentido de circulación. La luz blanca indica que un vehículo circula en sentido contrario al nuestro.",
      distractores: [
          "Porque así se las diferencias de las luces de freno, de posición y de las luces de giro.", 
          "Porque por su color blanco se obtiene mejor visión cuando la maniobra de retroceso se debe realizar de noche o en condiciones de poca visibilidad."],
    },
    {
      pregunta: "¿Qué debe entenderse por bocacalle?",
      respuesta: "La zona de la calzada común a dos o más arterias. Incluidas las sendas peatonales.",
      distractores: [
          "El lugar donde se cruzar una calle con una avenida.", 
          "El lugar donde se cruzan dos autopistas."],
    },
    {
      pregunta: "En un automóvil ¿Cuál es el dibujo mínimo que debe tener el dibujo de la cubierta?",
      respuesta: "1.5mm.",
      distractores: [
          "0.5mm.",
          "1.0mm."],
    },
    {
      pregunta: "¿Qué requisito debe reunir una vía de circulación para ser considerada una autopista?",
      respuesta: "No tener cruces a nivel con otras vías de circulación.",
      distractores: [
          "Tener muchos carriles para circular.",
          "Tener que pagar peaje para circular."],
    },
    {
      pregunta: "¿Que le indica esta señal?",
      imagen:'/fotos/Esquema de recorrido.jpg',
      respuesta: "Esquema de recorrido.",
      distractores: [
          "Doble mano de circulación", 
          "Ceda el paso"],
    },
    {
      pregunta: "Usted viene circulando por una autopista y advierte que su vehículo presenta una falla o varia que puede afectar gravemente su capacidad de circulación ¿Qué se recomienda hacer en esos casos?",
      respuesta: "A) Por el carril de desaceleración, en la próxima salida abandonar la autopista para llamar a su auxilio.",
      distractores: [
          "B) En el primer cruce con otra vía abandonar la autopista girando hacia a la derecha para llamar a un auxilio.",
          "Ambas respuestas (A y B) son correctas."],
    },
    {
      pregunta: "Cuando vemos las luces rojas de un vehículo ¿Qué significado tienen en cuanto al sentido de dirección de marcha del mismo?",
      respuesta: "Que circula en la misma dirección que nosotros.",
      distractores: [
          "Que viene hacia nosotros.",
          "Que está descompuesto."],
    },
    {
      pregunta: "El vehículo que circule por el carril obligatorio para transito lento ¿puede abandonarlo para adelantar a otro vehículo más lento?",
      respuesta: "Si, siempre que se respete la velocidad establecida en las señales.",
      distractores: [
          "No, nunca.",
          "Es indistinto."],
    },
    {
      pregunta: "El consumo de bebidas alcohólicas incluso en cantidades pequeñas, entre otros ¿Qué efectos produce?",
      respuesta: "Aumenta el tiempo de reacción.",
      distractores: [
          "Mejora la precisión en el manejo del vehículo.",
          "Disminuye el tiempo de reacción."],
    },
    {
      pregunta: "¿Cuál de estas sustancias pueden afectar negativamente la capacidad de conducir?",
      respuesta: "Las bebidas alcohólicas.",
      distractores: [
          "Cualquier medicamento.",
          "Los refrescos azucarados."],
    },
    {
      pregunta: "En la ciudad ¿Está permitido circular marcha atrás?",
      respuesta: "Solo para estacionar, entrar o salir de un garaje (cuando no hay otra posibilidad) o salvar un obstáculo.",
      distractores: [
          "Cuando es por pocos metros.",
          "Solamente de día."],
    },
    {
      pregunta: "Si usted sale de un estacionamiento paralelo al cordón, previamente debe:",
      respuesta: "Salir con precaución cuando no haya transito pasante y colocar la luz de giro.",
      distractores: [
          "Tocar bocina e incorporarme al tránsito pasante.",
          "Salir lo más rápido posible porque tiene prioridad."],
    },
    {
      pregunta: "¿Cuál es la velocidad máxima permitida en las avenidas, salvo señalación que indique lo contrario?",
      respuesta: "60 KM/H.",
      distractores: [
          "80 KM/H.",
          "40 KM/H."],
    },
    {
      pregunta: "Determine que indica la señal que a continuación se presenta:",
      imagen:'/fotos/cruce de peatones.jpg',
      respuesta: "Cruce de peatones.",
      distractores: [
          "Peatones a la izquierda.", 
          "Prohibición de circular."],
    },
    {
      pregunta: "Determine que indica la señal que a continuación se presenta:",
      imagen:'/fotos/atencion.jpg',
      respuesta: "Atención.",
      distractores: [
          "Vientos fuertes laterales.", 
          "Estrechamiento."],
    },
    {
      pregunta: "Cuando no hay senda peatonal marcada en el piso ¿Por dónde debemos cruzar las calles?",
      respuesta: "En la esquina, por la prolongación de vereda sobre la calle.",
      distractores: [
          "A mitad de cuadra.",
          "En coincidencia con las paradas de transporte."],
    },
    {
      pregunta: "Usted está llegando a un cruce de calles sin semáforos ni policía, una persona está cruzando por la senda peatonal, Usted debe:",
      respuesta: "Parar y cederle el paso al peatón.",
      distractores: [
          "Disminuir la marcha y tener cuidado.",
          "Seguir y atravesar el cruce, porque tiene prioridad."],
    },
    {
      pregunta: "Durante la circulación. El uso de teléfono celular está prohibido en el conductor porque:",
      respuesta: "Ambas respuestas (A y B) son correctas.",
      distractores: [
          "A) Disminuye su capacidad de atencional y limita el sentido de la audición, aumentando el tiempo de reacción.",
          "B) Debido a que el conductor debe mantener ambas manos comprometidas en la acción de conducir, el equipo celular reduciría la capacidad de maniobra."],
    },
    {
      pregunta: "Un vehículo que no está destinado al servicio de emergencia. En caso de extrema necesidad ¿puede realizar un servicio similar al que efectúan estos últimos?",
      respuesta: "Si, debiendo advertirlo encendiendo las luces, empleando la bocina de forma intermitente y agitando un paño.",
      distractores: [
          "Si, el conductor de dicho vehículo deberá sacar un brazo por la ventanilla y agitarlo reiteradamente para indicarle al resto de los usuarios de la vía la situación en la que se encuentra.",
          "No, los servicios de emergencia solo pueden ser efectuados por los vehículos habilitados para su fin."],
    },
    {
      pregunta: "De acuerdo a lo que establece la ley N 24.449 y su reglamentación con respecto al vehículo ¿Qué documentación debe llevar?",
      respuesta: "Recibo de pago de patente, comprobante de pago del seguro, cedula verde, y cuando correspondiera comprobante de verificación técnica del vehículo.",
      distractores: [
          "Recibo de pago de patente y la cédula verde.",
          "Recibo de pago de patente y comprobante de pago del seguro."],
    },
    {
      pregunta: "Se considera a la niebla un factor de riesgo porque:",
      respuesta: "A) Reduce el alcance de la visibilidad, produce condiciones resbaladizas en la calzada e induce a calcular mal las distancias.",
      distractores: [
          "B) Aumenta la percepción de objetos, pero se modifica la percepción de la distancia.",
          "Ambas respuestas (A y B) son correctas."],
    },
    {
      pregunta: "La niebla como factor de riesgo produce modificaciones en:",
      respuesta: "El campo visual del conductor y su percepción del entorno, la capacidad lumínica del vehículo como la adherencia de sus cubiertas y la respuesta del pavimento.",
      distractores: [
          "El campo visual del conductor y el estado del pavimento.",
          "Solo afecta la capacidad lumínica del vehículo y la respuesta de sus cubiertas en el avance."],
    },
    {
      pregunta: "Determine que indica la señal que a continuación se presenta:",
      imagen:'/fotos/contramano.jpg',
      respuesta: "Contramano.",
      distractores: [
          "Rotonda.", 
          "Puesto de control."],
    },
    {
      pregunta: "En algunas vías de transito podemos encontrar marcas en el piso o bien carteles con signos similares a una V invertida ¿Qué significados tienen estos signos o marcas?",
      respuesta: "Que estamos en una zona donde frecuentemente hay niebla.",
      distractores: [
          "Que estamos en una zona de velocidad controlada (radar).",
          "Que estamos en una zona que se inunda."],
    },
    {
      pregunta: "Cuando un vehículo circula por una arteria ubicada al costado de una vía férrea ¿Es obligatorio ceder el paso a otro que sale del paso a nivel?",
      respuesta: "Debe cedérsele el paso, venga de la izquierda o de la derecha.",
      distractores: [
          "Si, si viene desde la derecha.",
          "No, si viene desde la izquierda."],
    },
    {
      pregunta: "¿Que le indica esta señal?",
      imagen:'/fotos/curva en s.jpg',
      respuesta: "Curva en S.",
      distractores: [
          "Curva", 
          "Calzada resbaladiza"],
    },
    {
      pregunta: "¿Que le indica esta señal?",
      imagen:'/fotos/peatones por la izquierda.jpg',
      respuesta: "Peatones por la izquierda.",
      distractores: [
          "Salida peatonal", 
          "Cruce de peatones"],
    },
    {
      pregunta: "¿Por qué periodo puedo dejar estacionado un vehículo en la vía publica?",
      respuesta: "Por un periodo de 5 días o lo que fije la autoridad.",
      distractores: [
          "Por un periodo de 30 días o lo que fije la autoridad.",
          "No hay plazos determinados para dejar un vehículo estacionado."],
    },
    {
      pregunta: "¿Cuál es la velocidad mínima para circula en semiautopistas?",
      respuesta: "40 KM/H.",
      distractores: [
          "60 KM/H.",
          "50 KM/H."],
    },
    {
      pregunta: "¿Que le indica esta señal?",
      imagen:'/fotos/curva cerrada.jpg',
      respuesta: "Curva cerrada.",
      distractores: [
          "Giro obligatorio", 
          "Giro permitido"],
    },
    {
      pregunta: "¿Quién tiene prioridad de paso en una avenida?",
      respuesta: "El que circula por la avenida.",
      distractores: [
          "El que viene por la derecha.",
          "Es indistinto."],
    },
    {
      pregunta: "El que conduce ¿Qué documentación personal debe llevar consigo?",
      respuesta: "La licencia de conducir y su documento de identidad.",
      distractores: [
          "La licencia de conducir es suficiente.",
          "La licencia de conducir, su documento de identidad y la cedula verde."],
    },
    {
      pregunta: "Antes de iniciar un giro ¿A qué distancia mínima del cruce debe estar ubicado el vehículo sobre el carril más próximo al cordón del lado que va a doblar?",
      respuesta: "30 metros.",
      distractores: [
          "10 metros.",
          "20 metros."],
    },
    {
      pregunta: "¿Qué significa el termino hidroplaneo (acuaplaning)?",
      respuesta: "Que las cubiertas comienzan a desplazarse únicamente sobre una película de agua.",
      distractores: [
          "Que las cubiertas comienzan a desplazarse únicamente sobre una película de aceite.",
          "Que es el plazo de vida útil del vehículo."],
    },
    {
      pregunta: "En el vehículo que usted conduce va a viajar como pasajero su hijo de 8 años ¿está permitido que lo haga en el asiento delantero del mismo?",
      respuesta: "No, en ningún caso.",
      distractores: [
          "No, salvo que utilice asientos de seguridad o dispositivos homologados para este fin.",
          "Si, en todos los casos."],
    },
    {
      pregunta: "En caso de doble línea, compuesta una por un trazo continuo y otro por un trazo discontinuo ¿Cuál es la conducta a seguir?",
      respuesta: "Debemos respetar lo que rige con respecto a la línea que esta de nuestro lado (si es continua no cruzarla, si es discontinua está permitido cruzarla).",
      distractores: [
          "Podemos cruzarlas o no, siempre que lo hagamos con precauciones.",
          "No está permitido transponerla."],
    },
    {
      pregunta: "Todos los cristales de un vehículo deben garantizar visibilidad:",
      respuesta: "De dentro hacia afuera y de afuera hacia adentro (ambas direcciones).",
      distractores: [
          "Solamente desde dentro del automóvil hacia afuera.",
          "El único cristal que debe garantizar plena y total visibilidad es el parabrisas."],
    },
    {
      pregunta: "Cuando un conductor realiza la maniobra de circulación en reversa (marcha atrás) ¿Cuál es la distancia establecida que puede recorrer en la realización de dicha maniobra?",
      respuesta: "El recorrido mínimo e indispensable.",
      distractores: [
          "Mínimamente 20 metros.",
          "No más de 20 metros."],
    },
    {
      pregunta: "En caso de barrera baja ¿a qué distancia de ella se debe detener el vehículo si no hay línea de pare que lo indique",
      respuesta: "2 metros.",
      distractores: [
          "7 metros.",
          "5 metros."],
    },
    {
      pregunta: "Es recomendable comer abundantemente antes de conducir?",
      respuesta: "No, porque puede producir sueño.",
      distractores: [
          "Si, porque contribuye a la relajación.",
          "No, es mejor conducir con mucha hambre."],
    },
    {
      pregunta: "En una autopista ¿está permitido remolcar con su vehículo a otro que se encuentra descompuesto?",
      respuesta: "No, porque está prohibido.",
      distractores: [
          "Si, pero solo hasta el lugar más próximo donde pueda quedar inmovilizado.",
          "Si, pero solo si soy titular de un permiso que autoriza a conducir vehículos con remolque."],
    },
    {
      pregunta: "En zona urbana, cuando es obligatorio llevar encendidas las luces de un vehículo ¿Cuáles debemos utilizar?",
      respuesta: "Las luces de posición y las bajas.",
      distractores: [
          "Las luces de posición y altas.",
          "Las del interior del vehículo."],
    },
    {
      pregunta: "¿Quién tiene la prioridad de paso en una rotonda?",
      respuesta: "El vehículo que circula por la rotonda sobre el que intenta ingresar y el vehículo que egresa sobre el que intenta ingresar o continúa circulando.",
      distractores: [
          "El vehículo que quiere ingresar a la rotonda por sobre el que quiere egresar de la misma.",
          "El vehículo que quiere ingresar a la rotonda sobre el que está circulando en la misma."],
    },
    {
      pregunta: "Determine que indica la señal que a continuación se presenta:",
      imagen:'/fotos/Inicio de doble circulacion.jpg',
      respuesta: "Inicio de doble circulación.",
      distractores: [
          "Calzada dividida.", 
          "Camino sinuoso."],
    },
    {
      pregunta: "Los vehículos destinados al servicio de emergencia, en cumplimiento de su función, tienen la prioridad de paso sobre todos los demás vehículos. Además de esta ¿Están exentos de cumplir otras normas?",
      respuesta: "Si están exentos de cumplir otras normas excepto las indicaciones de los agentes de control al tránsito.",
      distractores: [
          "Si, al ser vehículos destinados al servicio de emergencia la ley los exceptúa del cumplimiento de otras normas.",
          "No, aun siendo vehículos destinados al servicio de emergencia, al circular por la vía publica están obligados a respetar las normas como el resto de los vehículos."],
    },
    {
      pregunta: "Al efectuar un giro en una bocacalle estando encendida la luz verde del semáforo, entre conductor y el peatón ¿Quién tiene prioridad de paso?",
      respuesta: "El peatón.",
      distractores: [
          "El conductor.",
          "Es indistinto."],
    },
    {
      pregunta: "¿Cuál es la velocidad mínima permitida en avenidas, salvo señalización en contrario",
      respuesta: "30 KM/H.",
      distractores: [
          "40 KM/H.",
          "20 KM/H."],
    },
    {
      pregunta: "¿Cuál es la velocidad máxima permitida en calles?",
      respuesta: "40 KM/H.",
      distractores: [
          "30 KM/H.",
          "50 KM/H."],
    },
    {
      pregunta: "Entre los efectos que produce el alcohol en el conductor se encuentra la:",
      respuesta: "Incorrecta apreciación de distancias y velocidades.",
      distractores: [
          "Ampliación del campo visual.",
          "Disminución de la distancia de frenado."],
    },
    {
      pregunta: "¿Que le indica esta señal?",
      imagen:'/fotos/limite de altura.jpg',
      respuesta: "Limite de altura.",
      distractores: [
          "Puente", 
          "Prohibido camiones de mas de 4.10M de largo"],
    },
    {
      pregunta: "¿Que le indica esta señal?",
      imagen:'/fotos/No girar.jpg',
      respuesta: "No girar.",
      distractores: [
          "Prohibido girar en U", 
          "Prohibido avanzar"],
    },
    {
      pregunta: "Una línea de trazo descontinuo demarcada sobre la calzada en forma paralela a su eje (a lo largo) ¿Qué nos indica?",
      respuesta: "Indica que puede ser traspasada para adelantar a otro vehículo.",
      distractores: [
          "Indica que la misma no puede ser traspasada. Debiendo conservar el vehículo que circula contiguo a ella.",
          "Que el asfalto se encuentra en mal estado de conservación."],
    },
    {
      pregunta: "¿Cómo se debe dejar un vehículo durante el estacionamiento, en un terreno sin pendiente?",
      respuesta: "Con el motor detenido y sin cambio.",
      distractores: [
          "Con el motor detenido.",
          "Con el motor detenido y las ruedas delanteras transversales a la acera(vereda)."],
    },
    {
      pregunta: "¿Debe usted ceder el paso a una fila de escolares que circula por la calzada(calle)?",
      respuesta: "Si.",
      distractores: [
          "No.",
          "Solo si advierte la existencia de un colegio cercano."],
    },
    {
      pregunta: "¿Qué nos indica en un semáforo. El encendido solamente de la luz roja de manera intermitente?",
      respuesta: "Que el semáforo está funcionando parcialmente y que nos aproximamos a un cruce peligroso debiendo detener la marcha y reiniciándola solo cuando se observe que no hay riesgo de continuar.",
      distractores: [
          "Que el semáforo funciona mal.",
          "Que va a cambiar a verde."],
    },
    {
      pregunta: "¿Que le indica esta señal?",
      imagen:'/fotos/bifurcacion.jpg',
      respuesta: "Bifurcacion(Encrucijada).",
      distractores: [
          "Estrechamiento", 
        "Inicio de doble mano"],
    },
    {
      pregunta: "En materia de responsabilidad civil ¿Qué es lo que se considera como factor determinante para dar inicio a una demanda",
      respuesta: "La existencia de un daño real que afecte a un particular. Provocando como consecuencia del accidente.",
      distractores: [
          "La intención de la conducta dañosa.",
          "La edad de la persona que provoca el daño."],
    },
    {
      pregunta: "¿Qué vehículo tiene prioridad para adelantarse cuando circulan encolumnados?",
      respuesta: "El que circula primero detrás del vehículo que se desea adelantar.",
      distractores: [
          "El que lo intente primero.",
          "El último en la fila."],
    },
    {
      pregunta: "Determine que indica la señal que a continuación se presenta:",
      imagen:'/fotos/No estacionar ni detenerse.jpg',
      respuesta: "No estacionar ni detenerse.",
      distractores: [
          "Prohibición de estacionar.", 
          "Estacionamiento exclusivo."],
    },
    {
      pregunta: "¿Está permitido detener un vehículo sobre una senda peatonal?",
      respuesta: "No.",
      distractores: [
          "Si.",
          "Según los casos."],
    },
    {
      pregunta: "Determine que indica la señal que a continuación se presenta:",
      imagen:'/fotos/Prohibido adelantarse.jpg',
      respuesta: "Prohibido adelantarse.",
      distractores: [
          "Prohibición de circular.", 
          "Circulación exclusiva de bicicletas."],
    },
    {
      pregunta: "Determine que indica la señal que a continuación se presenta:",
      imagen:'/fotos/no girar en U.jpg',
      respuesta: "No girar en U.",
      distractores: [ 
          "Prohibido girar a la izquierda.",
          "Giro a la izquierda."],
    },
    {
      pregunta: "Los vehículos afectados al control de tránsito ¿Pueden detenerse en cualquier parte de la vía pública?",
      respuesta: "Si, cuando realicen tareas de control, siempre que no constituyan un obstáculo peligroso para otros vehículos.",
      distractores: [
          "No, solo pueden hacerlo en los lugares en donde esté permitido detenerse.",
          "Si, porque al ser un vehículo de emergencia las restricciones en cuanto a la detención en la vía publica no lo abarcan."],
    },
    {
      pregunta: "Usted viene circulando por una avenida de doble mano, y al llegar a la bocacalle precisa efectuar un giro a su izquierda de acuerdo a la ley N 24449 ¿en qué condiciones puede efectuar esa maniobra?",
      respuesta: "Solo si hay semáforo de giro que me habilite.",
      distractores: [
          "Si mi semáforo de circulación está en verde, tomando las debidas precauciones y mirando atentamente a ambos lados.",
          "Es absolutamente indispensable que no venga ningún vehículo por la mano de circulación contraria a la de mi avance."],
    },
    {
      pregunta: "¿Cuáles son los números de emergencia que todo usuario de la vía publica debe conocer con el objeto de poder llamar y pedir ayuda ante un accidente de cualquier índole?",
      respuesta: "911/107.",
      distractores: [
          "211/108.",
          "112/110."],
    },
    {
      pregunta: "¿Cuál es la velocidad mínima para circular en zona rural?",
      respuesta: "40 KM/H.",
      distractores: [
          "50 KM/H.",
          "60 KM/H."],
    },
    {
      pregunta: "¿Qué debemos hacer frente a la luz roja intermitente del semáforo?",
      respuesta: "Detener la marcha, y reiniciar al comprobar que no hay riesgo alguno.",
      distractores: [
          "No avanzar.",
          "Detenerse."],
    },
    {
      pregunta: "¿Cuál es el carril de aceleración de una autopista?",
      respuesta: "El izquierdo.",
      distractores: [
          "El derecho.",
          "En las autopistas no hay carril de aceleración."],
    },
    {
      pregunta: "¿Se puede circular con la bocha de enganche en cualquier circunstancia?",
      respuesta: "No, si no estoy llevando el enganche debo sacar la bocha.",
      distractores: [
          "Si, si estoy autorizado a conducir vehículos con acoplados.",
          "Ambas respuestas son correctas."],
    },
    {
      pregunta: "Para adelantar a otro vehículo debe invadir un carril exclusivo para colectivos y taxis ¿Le está permitido realizar la maniobra?",
      respuesta: "No, porque está prohibido utilizar dicho carril.",
      distractores: [
          "Si cuando la línea longitudinal del otro lado exterior de este carril sea discontinua.",
          "Si, porque solo se permite su utilización para realizar alguna maniobra."],
    },
    {
      pregunta: "¿Cuándo está permitido estacionar en ángulo (45°) con el cordón de la vereda derecha y/o izquierda?",
      respuesta: "Solo cuando el señalamiento lo indica.",
      distractores: [
          "Solo cuando la calle es ancha.",
          "Solo cuando es de un lado solamente."],
    },
    {
      pregunta: "¿Qué es una arteria de doble mano?",
      respuesta: "Una vía de circulación donde se circula en ambos sentidos de tránsito.",
      distractores: [
          "Una vía de circulación ancha que se cruza con otra vía de circulación.",
          "Una vía de circulación reservada al uso de transporte público."],
    },
    {
      pregunta: "Cuando un semáforo cambia de luz roja a verde, nos habilita a reiniciar la marcha, no obstante, de ello ¿Qué precauciones o limitaciones debemos adoptar?",
      respuesta: "Por lo menos, lo indicado en A y B.",
      distractores: [
          "A) No iniciar el cruce si no hay espacio para acomodar el vehículo del otro lado sin obstruir la circulación transversal.",
          "B) Permitir antes de avanzar que complete el cruce otro vehículo o peatón que lo está haciendo."],
    },
    {
      pregunta: "¿Qué requisitos debe reunir una vía de circulación (a diferencia de una autopista) para ser considerada una semiautopista (autovía)",
      respuesta: "Tener cruces a nivel.",
      distractores: [
          "Tener semáforos y peaje.",
          "Ser elevados y con dos carriles por mano."],
    },
    {
      pregunta: "¿Que le indica esta señal?",
      imagen:'/fotos/desvio por cambio de sentido.jpg',
      respuesta: "Desvío por cambio de sentido.",
      distractores: [
          "Calzada dividida", 
          "Cruce peligroso"],
    },
    {
      pregunta: "Usted ha sufrido un desperfecto en su vehículo y lo ha dejado inmovilizado en la banquina ¿debe señalizarlo?",
      respuesta: "Si, con las balizas encendidas, los triángulos de señalización de peligro y con las luces de posición.",
      distractores: [
          "No, porque el vehículo no está en la calzada.",
          "Si, con los triángulos de señalación de vehículo."],
    },
    {
      pregunta: "Determine que indica la señal que a continuación se presenta:",
      imagen:'/fotos/rotonda.jpg',
      respuesta: "Rotonda.",
      distractores: [
          "Girar a la derecha.", 
          "Proximidad de obstaculo."],
    },
    {
      pregunta: "¿Cuándo se considera que un vehículo esta detenido?",
      respuesta: "Lo indicado en A y B.",
      distractores: [
          "A) Se considera detención a la permanencia en un sector de la vía publica de un vehículo por circunstancias de la circulación o por causas de fuerza mayor.",
          "B) Se considera detención a la permanencia de un vehículo justo a la acera por un tiempo estrictamente necesario para los casos de control de tránsito realizado por autoridad competente."],
    },
    {
      pregunta: "En caso de niebla si el conductor reduce la velocidad de circulación de su vehículo ¿disminuiría la posibilidad de causar un accidente de tránsito?",
      respuesta: "Siempre, ya que la velocidad es de factor esencial por sí mismo en la producción de accidentes de tránsito.",
      distractores: [
          "Solo en la medida en que el conductor no conserve su derecha.",
          "Siempre y cuando la densidad del banco de niebla sea excesivamente intensa."],
    },
    {
      pregunta: "¿Qué debe realizar el conductor frente a la luz amarilla intermitente del semáforo?",
      respuesta: "Avanzar con precaución.",
      distractores: [
          "Detenerse.",
          "Avanzar."],
    },
    {
      pregunta: "¿Que le indica esta señal?",
      imagen:'/fotos/estacionamiento exclusivo.jpg',
      respuesta: "Estacionamiento exclusivo.",
      distractores: [
          "Estacionamiento permitido", 
          "Entrada de garage"],
    },
    {
      pregunta: "¿Que le indica esta señal?",
      imagen:'/fotos/Hospital.jpg',
      respuesta: "Hospital.",
      distractores: [
          "Cruce", 
          "Estacionamiento de ambulancias"],
    },
    {
      pregunta: "Adelantarse en una curva está permitido",
      respuesta: "No, está prohibido.",
      distractores: [
          "Solo si en la curva no es muy cerrada.",
          "Solo sino viene un vehículo en sentido contrario."],
    },
    {
      pregunta: "¿Dónde deben llevarse las balizas portátiles?",
      respuesta: "En un lugar accesible debidamente sujetas.",
      distractores: [
          "En la guantera.",
          "En el interior del habitáculo, debidamente sujetas."],
    },
    {
      pregunta: "La ubicación y posición de las placas de identificación del vehículo (chapas patente) pueden sufrir algún tipo de modificación o cambio",
      respuesta: "De ninguna manera, deben estar colocadas en posición y forma normal en los lugares reglamentarios.",
      distractores: [
          "Solo eventualmente pueden amplificarse para mejorar la visibilidad.",
          "Solo esta prohibido modificar la placa de identificación delantera, No así la posterior."],
    },
    {
      pregunta: "¿Qué señales verticales (carteles) nos indican que no tenemos prioridad de paso en un cruce o bocacalle sin semáforo?",
      respuesta: "Señal de pare o ceda el paso.",
      distractores: [
          "Señal de prohibido retomar.",
          "Señal de contramano o dirección obligatoria."],
    },
    {
      pregunta: "¿Está permitido en los vehículos agregar en los paragolpes aditamentos (defensas, etc.) de cualquier naturaleza, que puedan considerarse peligrosos para personas u otros vehículos? ",
      respuesta: "No está permitido modificar paragolpes originales de fábrica agregándoles elementos que puedan considerarse peligrosos o agresivos.",
      distractores: [
          "Pueden agregarse defensas en los vehículos pequeños.",
          "Depende de la zona donde se circule."],
    },
    {
      pregunta: "Si el conductor de un vehículo circula con las balizas encendidas, toca repetidamente la bocina y el acompañante saca el brazo agitando un pañuelo ¿Qué están indicando?",
      respuesta: "Que transportan a una persona grave a un hospital.",
      distractores: [
          "Que el vehículo tiene un desperfecto.",
          "Al exceso de velocidad y a la violación de luz roja."],
    },
    {
      pregunta: "¿Qué significa la doble línea continua amarilla?",
      respuesta: " Indica, para ambos sentidos de circulación, que no debe ser traspasada ni se puede circular sobre ella.",
      distractores: [
          "Es una señalización que se utiliza únicamente para dividir los sentidos de circulación.",
          "Significa que solo pueden circular vehículos particulares."],
    },
    {
      pregunta: "Determine que indica la siguiente señal:",
      imagen:'/fotos/Velocidad minima.jpg',
      respuesta: "Velocidad minima.",
      distractores: [
          "Velocidad maxima.", 
          "Velocidad controlada por radar."],
    },
    {
      pregunta: "¿Qué debe hacer cuando el automóvil que esta adelante suyo está esperando para doblar a la izquierda?",
      respuesta: "Realizar el sobrepaso por la derecha colocando luz de giro y observando por los espejos.",
      distractores: [
          "Realizar el sobrepaso con cuidado por la izquierda.",
          "Tocar bocina para indicarle que siga."],
    },
    {
      pregunta: "¿Cuántos tipos de semáforos existen?",
      respuesta: "Vehicular, giro y peatonal.",
      distractores: [
          "Vehicular.",
          "Precaución, detención y avance."],
    },
    {
      pregunta: "¿Que le indica esta señal?",
      imagen:'/fotos/Proximidad de señál restrictivo(paso).jpg',
      respuesta: "Proximidad de señal restrictiva(paso).",
      distractores: [
          "Proximidad de atencion", 
          "Proximidad se señal restrictiva(pare)"],
    },
    {
      pregunta: "¿Qué distintivo deben llevar colocado en la parte interior del parabrisas y luneta del vehículo, los conductores principiantes?",
      respuesta: "Están obligados a llevar durante un periodo de 6 meses un distintivo con la palabra principiante en color blanco sobre fondo verde.",
      distractores: [
          "Están obligados a llevar durante un periodo de 3 meses un distintivo con la palabra principiante en color blanco con fondo verde.",
          "Están obligados a llevar durante un periodo de 12 meses un distintivo con la palabra principiante en color blanco sobre fondo verde."],
    },
    {
      pregunta: "¿Que le indica esta señal?",
      imagen:'/fotos/encrucijada en T.jpg',
      respuesta: "Bifurcación en T (entrecrucijada). ",
      distractores: [
          "Inicio de doble mano", 
          "Estrechamiento en una sola mano"],
    },
    {
      pregunta: "La luz verde del semáforo nos da paso en un cruce de calles y por la transversal aun avanza algún vehículo ¿Qué debemos hacer?",
      respuesta: "No iniciar el cruce hasta que los demás vehículos hayan completado el suyo.",
      distractores: [
          "Avanzar, la prioridad es nuestra porque tenemos luz verde.",
          "Esperar hasta que se reinicia el verde."],
    },












    



   







    








    






























































    
  ];
  