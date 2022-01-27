let currentDate = new Date();
let startPromo = new Date("2022/01/27 12:23:00")
let finishPromo = new Date("2022/01/27 12:40:00")
let redirectionUrl = "https://fundacion-kunphen.webflow.io/proyectos";

if (currentDate > startPromo && currentDate < finishPromo){
  console.log("redirectionUrl");
  window.location.replace(redirectionUrl);
}