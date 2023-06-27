let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #f18aa4;"> Desarrollo sitios web y me gusta la tecnología.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
