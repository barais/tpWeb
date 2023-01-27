
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
    this.press=true;
    x_init=this.getMousePosition(this.canvas,evt).x;
    y_init=this.getMousePosition(this.canvas,evt).y;
  }.bind(this)
  
  this.relacher=function(evt){
    this.press=false;
    x_fin=this.getMousePosition(this.canvas,evt).x;
    y_fin=this.getMousePosition(this.canvas,evt).y;
  }.bind(this)

  this.deplacer=function(evt){
    if(this.press){
      x_fin=this.getMousePosition(this.canvas,evt).x;
      y_fin=this.getMousePosition(this.canvas,evt).y;
    }
   
  }.bind(this)

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.presser, false);
  canvas.addEventListener('mouseup', this.relacher, false);
  canvas.addEventListener('mousemove', this.presser, false);
};



// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



