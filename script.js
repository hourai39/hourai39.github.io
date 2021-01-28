
// for (let i = 0; i < 14; i++) {
//   let holder = "";
//   holder += "\t\t\t<audio id=\"" + i + "\">\n"
//   holder += "\t\t\t\t<source src=\"./audio/Haruna-" + (i < 10 ? ("0" + i) : i) + ".ogg\" type=\"audio/ogg\">\n"
//   holder += "\t\t\t</audio>\n"
//   audio_handler.innerHTML += holder;
// }
let haruna = document.getElementById("haruna");
let voice = document.getElementById("voice");
var flag = false;
setInterval(function () {
  const clock = document.querySelector(".display");
  let time = new Date();
  let sec = time.getSeconds();
  let min = time.getMinutes();
  let hr = time.getHours();

  if (sec === 0 && min === 0 && flag === false) {
    console.log("run")
    flag = true;
    let vcode = hr;
    vcode = String(vcode < 10 ? ("0" + vcode) : vcode);
    voice.setAttribute("src", "./audio/Haruna-" + vcode + ".ogg");
    voice.play();
    haruna.style.animationName = "rotate";
    haruna.style.animationDuration = "0.5s";
  }

  if (voice.ended) {
    haruna.style.animationName = "idle";
    haruna.style.animationDuration = "4s";
  }

  if (sec === 1 && min === 0) {
    flag = true;
  }

  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (hr < 10) {
    hr = "0" + hr;
  }
  clock.textContent = hr + ":" + min + ":" + sec;
});
