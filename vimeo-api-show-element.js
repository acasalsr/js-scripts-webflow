//Posar després de </body>

<script src="https://player.vimeo.com/api/player.js"></script>;
//<script>
const iframe = document.querySelector('iframe'); //.vimeo-cc-desktop -> modificar nom classe del embed de vimeo
const player = new Vimeo.Player(iframe);
var refreshIntervalId = setInterval(function () {
  player
    .getCurrentTime()
    .then(function (seconds) {
      if (seconds > 2270) {
        // segons a modificar 10s, per exemple
        $("#show-button").css("display", "inline"); // display: inline; -> s'ha d'ocultar el element que volem mostrar a None.
        $("#show-button").show();
        clearInterval(refreshIntervalId);
      }
    })
    .catch(function (error) {});
}, 1000);
//</script>