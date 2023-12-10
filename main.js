let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  //Eso de "Typewriter" es lo q le da el estilo al texto de irse escribiendo 
  loop: true,
  delay: 75,
 cursor: "<span style='color: #a9437e;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #a9437e;">Trotamundos que programa</span>') //El mini texto q va debajo de mi fotiux
  //Tmb ahí podemos cambiar el color del mismo texto
  .pauseFor(200)
  .deleteChars(10)
  .start();
