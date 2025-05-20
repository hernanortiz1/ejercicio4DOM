const obtenerReloj = () => {
  const fecha = new Date();

  const semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const mes = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const detalleFecha = document.querySelector(`h2`);
  detalleFecha.textContent = `${semana[fecha.getDay()]} ${fecha.getDate()} de ${
    mes[fecha.getMonth()]
  } del  ${fecha.getFullYear()}`;



//   horas
 
  let horas = fecha.getHours();
  const minutos = fecha.getMinutes();
  const segundos = fecha.getSeconds();
  const ampm = horas >= 12 ? "PM" : "AM";


  horas = horas % 12;
  horas = horas ? horas : 12; 

  const horasStr = horas.toString().padStart(2, "0");
  const minutosStr = minutos.toString().padStart(2, "0");
  const segundosStr = segundos.toString().padStart(2, "0");


   const spanHoraMinuto = document.querySelector(".display-1");
  spanHoraMinuto.textContent = `${horasStr} : ${minutosStr} :`;

 
  const spansFs4 = document.querySelectorAll(".fs-4");
  spansFs4[0].textContent = ampm;         
  spansFs4[1].textContent = segundosStr;  
};

setInterval(obtenerReloj);
