// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Form.prototype.paint=function (ctx){
    ctx.beginPath();
    ctx.lineWidth = this.getThickness;
    ctx.strokeStyle=this.getColor;
};

Rectangle.prototype.paint = function(ctx) {
    Form.prototype.paint.call(this,ctx);
    ctx.rect(this.getX, this.getY, this.getWidth, this.getHeight);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    Form.prototype.paint.call(this,ctx);

    ctx.beginPath();
    ctx.moveTo(this.getX1, this.getY1);
    ctx.lineTo(this.getX2, this.getY2);
    ctx.stroke();

};
Circle.prototype.paint = function (ctx){
    Form.prototype.paint.call(this,ctx);
    ctx.beginPath();
    ctx.arc(this.getX,this.getY,this.getRadius,0,2*Math.PI,false);
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

Drawing.prototype.updateShapeList = function(){

    var shapeList = document.getElementById('shapeList');

    //Création du bouton
    var li = document.createElement('li');
    var button = document.createElement('button');
    var span = document.createElement('span');


    span.setAttribute('class','glyphicon glyphicon-remove-sign');
    // Liste
    li.setAttribute('class', 'list-group-item');
    li.setAttribute('id', 'form-'+(this.forms.length-1));
    // Button
    button.setAttribute('class', 'btn btn-default');
    button.setAttribute('id', 'button_'+(this.forms.length-1));
    button.setAttribute('onClick', 'drawing.deleteShape('+(this.forms.length-1)+')');

    button.appendChild(span);
    li.appendChild(button);

    var newForm = this.forms[(this.forms.length-1)];

    if(newForm instanceof Rectangle){
        li.appendChild(document.createTextNode("Rectangle(" + newForm.getY + ","
            + newForm.getY() + "," + newForm.getWidth() + "," + newForm.getHeight() + ")"));
    }
    if(newForm instanceof Line){
        li.appendChild(document.createTextNode("Line(" + newForm.getX1() + "," + newForm.getY1()
            + "," + newForm.getX2() + "," + newForm.getY2() + ")"));
    }
    if(newForm instanceof Circle){
        li.appendChild(document.createTextNode("Circle(" + newForm.getX() + "," + newForm.getY()
            + "," + newForm.getRadius() + ")"));
    }

    //On ajoute le button de suppression
    shapeList.appendChild(li);
};

Drawing.prototype.deleteShape = function(id){
    var li = document.getElementById('form-'+id);
    var index = $(li).index();
    //Delete liste
    li.remove();
    //Suppression formes
    this.removeForm(index);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.paint(ctx, canvas);
};
