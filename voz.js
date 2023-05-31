window.contador=0;          
window.contadorcubogrande=0;
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

      var arreglovoz = [  'hola t rex',
    'gracias t rex',
    'eso es todo por ahora',
    't rex ¿cuando te descubrieron?',
    't rex ¿en que año existias?',
    't rex quien te descubrio',
    't rex cuenta tu historia',
    'gracias t rex',
    'eso es todo por ahora',
    't rex ataca',
    't rex quieto',];

var grammar = '#JSGF V1.0; grammar arreglovoz; public <arreglovoz> = ' + arreglovoz.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;           
recognition.lang = 'es-MX';        
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('#text');  
//var hints = document.querySelector('.hints');  
var vozHTML= '';
arreglovoz.forEach(function(v, i, a){
console.log(v, i);

});
document.onkeydown = function() {
recognition.start();
console.log('Estoy listo para escuchar.');

}       

recognition.onresult = function(event) {            
var voz = event.results[0][0].transcript;
//diagnostic.textContent = 'Dijiste: ' + voz + '.';           
diagnostic.setAttribute("value", "Dijiste: " + voz + ".");
//diagnostic.textContent = 'Dijiste: ' + voz + '.';
bg = voz;
var bg = document.querySelector('text');


//VISUALIZO EN CONSOLA
console.log(bg);
console.log(voz);

function randD(array){
var rand= Math.random()*array.length|0;
var result=array[rand];
return result;
}

// Interacciones iniciales
if (voz === 'hola t rex') 
{
      console.log("Hola, estas saludando!");
      let utterance = new SpeechSynthesisUtterance('Hola amigo, bienvenido. Estoy listo. Te escucho...')
      utterance.lang = 'es-MX'
      speechSynthesis.speak(utterance)
}


if (voz === 'gracias t rex')
{
      console.log("Estas dando las gracias");
      let utterance = new SpeechSynthesisUtterance('De nada amigo, quieres que te ayude con algo mas?')
      utterance.lang = 'es-MX'
      speechSynthesis.speak(utterance)
}



if (voz === 'eso es todo por ahora') 
{
      console.log("Hola, estas saludando!");
      let utterance = new SpeechSynthesisUtterance('De nada amigo, siempre es un placer ayudarte.')
      utterance.lang = 'es-MX'
      speechSynthesis.speak(utterance)
}

if (voz === 't rex ¿cuando te descubrieron?')
{
      console.log("t rex cuenta su descubrimento!");
      let utterance = new SpeechSynthesisUtterance('El primer descubrimiento de T. Rex registrado fue en 1902, justamente en Montana, por el paleontólogo Barnum Brown.');
      utterance.lang = 'es-MX'
      speechSynthesis.speak(utterance)
}

if (voz === 't rex ¿en que año existias?') 
{
      console.log("t rex, cuenta su existencia");
      let utterance = new SpeechSynthesisUtterance('El Tiranosaurio Rex vivió hace 68 y 66 millones de años en las últimas etapas del período Cretácico distribuidos por Norteamérica occidental.');
      utterance.lang = 'es-MX'
      speechSynthesis.speak(utterance)
}

if (voz === 't rex cuenta tu historia')
{
      console.log("t rex, cuenta su historia");
      let utterance = new SpeechSynthesisUtterance('Yo existia durante el primer perioso jurasico, hace unos 170 millones de años, era solo un poco mas grande que los seres homanos y tarde unos 100 millones de años en desarrollar mi forma final con la cual fui nombrado como el poderoso t rex')
      utterance.lang = 'es-MX'
      speechSynthesis.speak(utterance)
}

//interaccion con RA         
if (voz === 't rex ataca') 
{
      console.log("¡Cuidado el t rex esta atacando!");
      var es = document.querySelector('#avatar');
      es.setAttribute("src", 'https://cdn.glitch.global/16b440ad-e892-4085-9aee-0cf4887d328f/LUNA.glb?v=1653087819401');
      es.setAttribute("scale", '.10 .10 .10');
      el.setAttribute("position", '0 0 0');
      el.setAttribute(animation, {'property': position,'to': {x: 1, y: 1, z: 1}, 'startEvents': 'startanim001'});
}

if (voz === 't rex quieto') 
    {
      console.log("T rex esta trnaquilizandoce");
      var el = document.querySelector('#avatar');
      el.setAttribute("src", 'https://cdn.glitch.global/16b440ad-e892-4085-9aee-0cf4887d328f/octocatgit.glb?v=1648149096491');
      el.setAttribute("scale", '0.1 0.1 0.1');
      el.setAttribute("position", '0 -0.25 0');
      el.setAttribute("rotation", '0 0 0');
      el.setAttribute("visible", 'true');

      let utterance = new SpeechSynthesisUtterance('Enseguida amigo. aunque ya me estoy cansando.')
      utterance.lang = 'es-MX'
      speechSynthesis.speak(utterance)
    }


console.log('Confidence: ' + event.results[0][0].confidence);
}


recognition.onspeechend = function() {
recognition.stop();
}

recognition.onnomatch = function(event) {
diagnostic.textContent = "No puedo escucharte claramente, por favor repiteme.";
//diagnostic.textContent = "No puedo escucharte claramente, por favor repiteme.";
}

recognition.onerror = function(event) {
diagnostic.textContent = 'Ocurrio un error al escucharte: ' + event.error;
//diagnostic.textContent = 'Ocurrio un error al escucharte: ' + event.error;
}
//fin
