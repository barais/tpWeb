
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.rect(this.x_haut_g, this.y_haut_gauche, this.largeur,   this.hauteur);
    ctx.lineWidth = this.epaisseur
    ctx.strokeStyle=this.couleur;
    ctx.stroke();
  };
  
  Line.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.lineWidth = this.epaisseur
    ctx.strokeStyle=this.couleur;
    ctx.moveTo(this.x_1, this.y_1);
    ctx.lineTo(this.x_2, this.y_2);
    ctx.stroke();
  };
  
  Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.formes.forEach(function (eltDuTableau) {
      // now fill the canvas
      eltDuTableau.paint(ctx);
    });
  };
  
