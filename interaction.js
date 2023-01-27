
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.x_init=0;
  this.x_fin=0;
  this.y_init=0;
  this.y_fin=0;
  this.canvas=canvas;
  this.interactor=interactor;
  this.press=false;

	// Developper les 3 fonctions gérant les événements
  this.presser=function(evt){
    this.press=true
    this.x_init=getMousePosition(this.canvas,evt).x;
    this.y_init=getMousePosition(this.canvas,evt).y;
    console.log("Toucher l'écran ("+this.x_init+","+this.y_init+")");
  }.bind(this)
  
  this.relacher=function(evt){
    this.press=false;
    this.x_fin=getMousePosition(this.canvas,evt).x;
    this.y_fin=getMousePosition(this.canvas,evt).y;
    console.log("Relâcher la souris ("+this.x_fin+","+this.y_fin+")");    
  }.bind(this)

  this.deplacer=function(evt){
    if(this.press){
      this.x_fin=getMousePosition(this.canvas,evt).x;
      this.y_fin=getMousePosition(this.canvas,evt).y;
      console.log("Déplacer la souris ("+this.x_fin+","+this.y_fin+")");
    }
   
  }.bind(this)

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.presser, this.press);
  canvas.addEventListener('mouseup', this.relacher, this.press);
  canvas.addEventListener('mousemove', this.deplacer, this.press);
};



// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



