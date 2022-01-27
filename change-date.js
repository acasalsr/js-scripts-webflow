let currentDate = new Date();
let startPromo = new Date("2022/01/27 10:40:00")
let finishPromo = new Date("2022/01/27 11:00:00")

if (currentDate > startPromo && currentDate < finishPromo){
  window.location.replace("http://stackoverflow.com");
}