//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
  var opciones = document.querySelectorAll("#links  a");
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  opciones[4].className = "";
  link.className = "seleccionado";

  //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
  //en modo responsive
  var x = document.getElementById("nav");
  x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
  var x = document.getElementById("nav");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    document.getElementById("html").classList.add("barra-progreso1");
    document.getElementById("react").classList.add("barra-progreso2");
    document.getElementById("java").classList.add("barra-progreso3");
    document.getElementById("Net").classList.add("barra-progreso4");
  }
}

window.addEventListener("scroll", efectoHabilidades);

function toggleInfo(element) {
  var info = element.querySelector(".info");
  if (info.style.opacity === "1") {
    info.style.opacity = "0";
  } else {
    info.style.opacity = "1";
  }
}

const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");
const titleModal = document.getElementById("title-modal");
const descriptionModal = document.getElementById("description-modal");
const imgModal = document.getElementById("img-modal");
const stackModal = document.getElementById("modal-stack");
const repoModal = document.getElementById("modal-repo");
const demoModal = document.getElementById("modal-demo");
const testModal = document.getElementById("test-stack");
const deployModal = document.getElementById("deploy-stack");

const projects = [
  {
    id: "1",
    name: "Wiki Breaking Bad",
    description:
      "Este proyecto consume el api gratuito con información de los personajes de breaking bad. La idea es ofrecer al usuario distintos filtros para seleccionar su personaje favorito y al dar click en un personaje mostrar información detallada. Hecho con Vanilla Js y consumiendo un api podemos demostrar que no siempre es necesario una libreria o framework para manipular el DOM y crear una aplicación web.",
    img: "assets/img/breaking.PNG",
    repositorio: "https://github.com/MarFueGit/DEV010-data-lovers",
    demo: "https://marfuegit.github.io/DEV010-data-lovers/",
    tecnologias: "HTML5, CSS3, JS",
    deploy: "Github Pages",
    test: "Jest y Testing Library"
  },
  {
    id: "2",
    name: "Analizador de texto",
    description:
      "Este proyecto consiste en manipular los textos que sean ingresados en la cajita de texto. Proporcionando información importante como la cantidad de palabras o los números encontrados en el texto. El punto importante es que se utiliza 100% Javascript, lógica de programación y el uso de funciones, métodos de los string o los arrays.",
    img: "assets/img/analizador-texto.png",
    repositorio: "https://github.com/MarFueGit/DEV010-text-analyzer",
    demo: "https://marfuegit.github.io/DEV010-text-analyzer/",
    tecnologias: "HTML5, CSS3, Vanilla Javascript",
    deploy: "Github Pages",
    test: "Jest"
  },
  {
    id: "3",
    name: "Sistema de pedidos para restaurante",
    description:
      "Este proyecto es más robusto en términos de stack técnologico. Utiliza el patrón de diseño enfocado en componentes reutilizables, para construir componentes web. También el consumo de un backend/API para la autenticación e interacciones. El punto clave es ser una plataforma web usada en restaurantes para tomar pedidos pero también para el uso en cocina y la administración de los empleados.",
    img: "assets/img/burguer2.PNG",
    repositorio: "https://github.com/MarFueGit/burger-queen-api-client",
    demo: "https://burger-queen-mary.netlify.app/",
    tecnologias: "React, Typescript",
    deploy: "Github Pages",
    test: "Jest y React Testing Library"
  },
  {
    id: "4",
    name: "CineMovies",
    description:
      "Este proyecto consume un api gratuita de peliculas y series, para mostrar información importante de cada una. Asi como filtros y búsqueda de lo que al usuario le interese, igual aplica el uso de componentes reutilizables con React, así como tener una capa extra al entorno JS usando Typescript.",
    img: "assets/img/web-movies.PNG",
    repositorio: "https://github.com/MarFueGit/CineMagic-Laboratoria",
    demo: "https://cinemary.netlify.app/",
    tecnologias: "React, Typescript",
    deploy: "Netlify",
    test: "Jest y React Testing Library"
  },
  {
    id: "5",
    name: "Social-Network",
    description:
      "Este proyecto es una SPA, que consiste en tener un único punto de entrada js y sacar todo el potencial de Vanilla JS. También se uso para las interacciones Firestore de Firebase y asi poder manejar una base de datos, así como distintos inicios de sesión como Google, Facebook. La aplicación consiste en compartir post en tu feed relacionados a una vida saludable e interactuar con tus amigos.",
    img: "assets/img/home.png",
    repositorio: "https://github.com/MarFueGit/DEV010-social-network",
    demo: "https://vital-hub.netlify.app/",
    tecnologias: "HTML5, CSS3, Vanilla Javascript",
    deploy: "Netlify",
    test: "Jest y Testing Library"
  },
  {
    id: "6",
    name: "Ecommerce de Vinos",
    description:
      "Este proyecto es una plataforma que provee una interfaz para navegar conociendo de los distintos tipos de vino, de distintos países y su compra con evio gratuito. Esta construido con React y Typescript, utiliza un backend realizado en node js. Maneja varias rutas con React Router Dom y también la idea de utilizar patrones de diseño compuestos por componentes reutilizables.",
    img: "assets/img/vinoCaptura.PNG",
    repositorio:
      "https://github.com/MarFueGit/Un_viaje_unico_por_el_mundo_del_vino",
    demo: "https://un-viaje-unico-por-el-mundo-del-vino-eqjliay4c.vercel.app/",
    tecnologias: "React, Typescript",
    deploy: "Vercel",
    test: "Jest y React Testing Library"
  },
  {
    id: "7",
    name: "Web de Pulseras",
    description:
      "Esta SPA o single page application fue realizada para un local de ventas de pulseras artesanales en Madrid, para que las personas puedan escoger y diseñar sus propias pulseras escogiendo la combinación preferida de piedras naturales. De esta manera el pedido llega como se debe construir y las personas solo pasan a recogerlo de forma presencial. Esta hecho 100% con Vanilla Js.",
    img: "assets/img/webPulseras.PNG",
    repositorio: "https://github.com/MarFueGit/Web-de-Pulseras",
    demo: "https://web-de-pulseras.vercel.app/",
    tecnologias: "HTML5, CSS3, Vanilla Javascript",
    deploy: "Vercel",
    test: "Jest y Testing Library"
  },
  {
    id: "8",
    name: "Guess The Number",
    description:
      "Este programa de consola, es simplemente un juego que nos permite tratar de adivinar un numero aleatorio jugando contra la misma computadora. Esta hecho 100% en C#, sin embargo a la IA que se uso como proyecto base, se le proveen validaciones que nos permiten hacerla más inteligente como tomar en cuenta supocisiones pasadas.",
    img: "assets/img/GuessTheNumber.png",
    repositorio: "https://github.com/MarFueGit/CSP001-guess-the-number",
    demo: "",
    tecnologias: "C#",
    deploy: "Programa de consola, NA",
    test: "XUnit / MSTest"
  },
  {
    id: "9",
    name: "Fleet Management API",
    description:
      "Este proyecto es un servicio REST API, que provee diversos endpoints para obtener información de una flota de taxis y sus ubicaciones. Así como la oportunidad de poder recibir esta información en forma excel por email. Esta documentada en Swagger y utiliza la última versión de Spring Boot.",
    img: "assets/img/FleetManagament.PNG",
    repositorio:
      "https://github.com/MarFueGit/UPSK-JAVA-003-fleet-management-api",
    demo: "",
    tecnologias: "Java, Spring Boot, JPA y PosgreSQL",
    deploy: "Swagger Docs",
    test: "Junit y Mockito"
  }
];

function toggleInfo(element) {
  var info = element.querySelector(".info");
  if (info.style.opacity === "1") {
    info.style.opacity = "0";
  } else {
    info.style.opacity = "1";
  }

  const dataProject = projects.find(
    (project) => project.id === element.dataset.id
  );
  titleModal.innerHTML = dataProject.name;
  descriptionModal.innerHTML = dataProject.description;
  imgModal.setAttribute("src", dataProject.img);
  stackModal.innerHTML = `<strong>Tecnologías: </strong> ${dataProject.tecnologias}`;
  deployModal.innerHTML = `<strong>Deployado en: </strong> ${dataProject.deploy}`;
  testModal.innerHTML = `<strong>Test: </strong> ${dataProject.test}`;
  repoModal.setAttribute("href", dataProject.repositorio);
  demoModal.setAttribute("href", dataProject.demo);
  if (dataProject.demo === "") {
    demoModal.innerHTML = "Demo: NA";
    demoModal.setAttribute("href", "");
  } else {
    demoModal.innerHTML = "Ir al demo";
  }
  modal.classList.add("modal--show");
}

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal--show");
});
