
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.

function DnD(canvas, interactor) {

  // Définir ici les attributs de la 'classe'
  this.initialX= 0; // Coordonnées x initiale
  this.initialY= 0;// Coordonnée y initiale
  this.endX= 0;// Coordonnée x de fin
  this.endY= 0;// Coordonnée y de fin
  this.pressed = false; // Variable qui sert à savoir si on a pressé ou pas. Q3


	// Developper les 3 fonctions gérant les événements

  // Fonction qui gère la pression du bouton gauche de la souris
   this.mouseDown = function (evt) {
     // Q3
     this.initialX = getMousePosition(canvas,evt).x;
     this.initialY = getMousePosition(canvas,evt).y;
     this.endX = getMousePosition(canvas,evt).x;
     this.endY = getMousePosition(canvas,evt).y;
     this.pressed = true;

     //Q9
     interactor.onInteractionStart(this);

     // Q5
    console.log("Mouse down : " + this.initialX + " " + this.initialY);

  }.bind(this);

  // Fonction qui gère le mouvement du pointeur de la souris
   this.mouseMove=function(evt) {

     if (this.pressed){
     this.endX = getMousePosition(canvas,evt).x;
     this.endY = getMousePosition(canvas,evt).y;

       //Q9
       interactor.onInteractionUpdate(this);

       // Q5
    console.log("Mouse move : " + this.endX + " " + this.endY);
     }

  }.bind(this);


  // Fonction qui gère le relâchement du bouton gauche de la souris
  this.mouseUp = function(evt) {

    if (this.pressed){

      // Q3
      this.pressed=false;

      //Q9
      interactor.onInteractionEnd(this);

      // Q5
      console.log("Mouse up : " + this.initialX + " " + this.initialY + " "+ this.endX +" "+this.endY);
    }

   }.bind(this);

  // Associer les fonctions précédentes aux évènements du canvas.
  //Q4
  canvas.addEventListener('mousedown', this.mouseDown);
  canvas.addEventListener('mousemove', this.mouseMove);
  canvas.addEventListener('mouseup', this.mouseUp);

}


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}









