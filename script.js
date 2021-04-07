
const prender = () => {
  let foco = document.getElementById("foco");
  if (foco.src.match('focoOff')) {
    foco.src = "./img/focoOn.png"
  } else {
    foco.src = "./img/focoOff.png"
  }


}
