
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // attributs
  this.iPx = 0;
  this.iPy = 0;
  this.fPx = 0;
  this.fPy = 0;
  this.currentPoint = 0;

  // fonctions gérant les événements
  this.mouseDown = function(evt){
    this.currentPoint = getMousePosition(canvas, evt);
    this.iPx = this.currentPoint.x;
    this.iPy = this.currentPoint.y;
    console.log("md" + evt.x);
    console.log("md" + evt.y);
  }.bind(this);

  this.mouseMove = function(evt){
    this.mouseDown(evt.x, evt.y);
    console.log("mm" + evt.x);
    console.log("mm" + evt.y);
  }.bind(this);

  this.mouseUp = function(evt){
      this.currentPoint = getMousePosition(canvas, evt);
      this.fPx = this.currentPoint.x - this.iPx;
      this.fPy = this.currentPoint.y - this.iPy;
      console.log("mu" + evt.x);
      console.log("mu" + evt.y);
  }.bind(this);

  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.mouseDown, false);
  canvas.addEventListener('mousemove', this.mouseMove, false);
  canvas.addEventListener('mouseup', this.mouseUp, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



