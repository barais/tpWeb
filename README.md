# SIR

## Objectif

1. Construire une application Web en utilisant le principe MVC avec JavaScript

## La réalisation de TP

L’objectif de ce TP consiste à créer une application Web pour faire un dessin vectoriel:dessiner des rectangles, des lignes avec leurs couleurs et épaisseurs. La figure ci-dessous montre l’état de l’application et donc l’objectif à atteindre.

![model3](https://cloud.githubusercontent.com/assets/15005875/25064216/1549a5b4-21f6-11e7-81ef-6a2db26452e7.png)

## La partie MVC

MVC (Modèle-Vue-Contrôleur) est un patron d'architecture IHM.La figure ci-dessous nous montre le modéle de ce parton.

![model4](https://cloud.githubusercontent.com/assets/15005875/25064249/d7f55d38-21f6-11e7-85fc-8ec9a2cfd9de.png)


## La partie Javascript

Javascript est actuellement le langage de programmation de scripts utilisé pour apporter du comportement à des pages Web.

## Interaction : le glisser-déposer (Drag-n-Drop)

Pour La création d'un Dnd nous avons utilisé un canvas et un interacteur.

1. Nous avons defini 4 variables pour les coordonnées initiales et finals.
```
 this.initialX= 0; // Coordonnées x initiale
  this.initialY= 0;// Coordonnée y initiale
  this.endX= 0;// Coordonnée x de fin
  this.endY= 0;// Coordonnée y de fin
  ```

2. On a déclaré 3 fonction.

```	
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
  .
  .
  .
```
3. Nous avons liés ces fonctions à des evenements(listener)
```
  canvas.addEventListener('mousedown', this.mouseDown);
  canvas.addEventListener('mousemove', this.mouseMove);
  canvas.addEventListener('mouseup', this.mouseUp);
  ```
4. On a appelé dans chacune de ces 3 fonctions console.log pour afficher dans la console Javascript de notre navigateur les coordonnées de chaque événement lors de l'exécution de l'interaction.

Example :
```
 console.log("Mouse down : " + this.initialX + " " + this.initialY);
 console.log("Mouse move : " + this.endX + " " + this.endY);
 console.log("Mouse up : " + this.initialX + " " + this.initialY + " "+ this.endX +" "+this.endY);
```

## Le modèle

Nous avons défini 5 classes;
1. Line
2. Rectangle
3. Form
4. Drawing
5. Circle(qu'on à nous même ajouté)


Puis qu'une forme possède une couleur et une épaisseur de trait.
```
function Form( color,thickness) {

    //Initialisation des propriétées
    this.thickness=thickness;
    this.color=color;

    //Fonction qui retourne l'epaisseur de la forme
    this.getThickness=function (){
        return this.thickness;
    }.bind(this);
    // Fonction qui retourne la couleur de la forme
    this.getColor =function (){
        return this.color;
    }.bind(this);
```

Un rectangle possède des coordonnées de son point haut-gauche, une largeur et une hauteur ensuite une couleur et une épaisseur de trait.
```
// classe Rectangle extends Form
function Rectangle(x, y, width, height, thickness, color) {

    Form.call(this, thickness, color);// Héritage

    //Initialisation des propriétées
    this.x=x; // Coordonée x du point haut-gauche
    this.y=y; // Coordonnée y du point haut-gauche
    this.width = width; // Largeur du rectangle
    this.height = height; // Hauteur du rectangle

    this.thickness = thickness; // épaisseur
    this.color = color; // couleur de la forme

    //Fonction qui retourne la coordonnée de x
    this.getX = function (){
        return this.x;
    }.bind(this);

    //Fonction qui retourne la coordonnée de y
    this.getY = function (){
        return this.y;
    }.bind(this);

    //Fonction qui retourne la largeur
    this.getWidth=function (){
        return this.width;
    }.bind(this);

    //Fonction qui retourne la hauteur
    this.getHeight = function (){
        return this.height;
    }.bind(this);
};
```
Une ligne possède les coordonnées de ses deux points ensuite une couleur et une épaisseur de trait.
```
//Classe Line
// classe Line extends Form
function Line(x1, y1, x2, y2, thickness, color) {
    Form.call(this, thickness, color); // Héritage

    //Initialisation des propriétées
    this.x1=x1; // Coordonnée x du premier point
    this.y1=y1; // Coordonnée y du premier point
    this.x2=x2; // Coordonnée x du deuxième point
    this.y2=y2; // Coordonnée y du deuxième point
   this.thickness = thickness;
    this.color = color;

    //Fonction qui retourne la coordonnée de x
    this.getX1 = function (){
        return this.x1;
    }.bind(this);

    //Fonction qui retourne la coordonnée de y
    this.getY1 = function (){
        return this.y1;
    }.bind(this);

    //Fonction qui retourne la coordonnée de x final
    this.getX2 = function (){
        return this.x2;
    }.bind(this);

    //Fonction qui retourne la coordonnée de y final
    this.getY2 = function (){
        return this.y2;
    }.bind(this);
};
```

La classe Drawing nous permet de créer ou enlever une form.
```
//Classe Drawing
function Drawing() {
    //creer un array forms
    this.forms = new Array();

    //Méthode pour l'ajout dune forme dans le tableau
    this.addForm = function(form) {
        this.forms.push(form);
    }.bind(this);

    // enlever une forme de la liste de formes
    this.removeForm = function(index) {
        this.forms.splice(index,1);
    }.bind(this);

    //Fonction qui retourne la liste des formes
    this.getForms = function(){
        return this.forms;
    }.bind(this);
};
```

## La vue

On a fait l'implementation de 4 fonctions dans le fichier de view.js pour ajouter les fonctions d'affichage (fonction paint) dans chacune des classes.

```
Form.prototype.paint=function (ctx){
    ctx.beginPath();
    ctx.lineWidth = this.getThickness();
    ctx.strokeStyle=this.getColor();
};

Rectangle.prototype.paint = function(ctx) {
    Form.prototype.paint.call(this,ctx);
    ctx.rect(this.getX(), this.getY(), this.getWidth(), this.getHeight());
    ctx.stroke();
};
.
.
.
```
## Le contrôleur

Pour la partie contrôleur nous avons fait;
1. L'implementation de la classe l'interacteur qui sera un crayon et pour notifier l'interacteur d'une modification de l'interaction.

```
var editingMode = {
	rect : 0,
	line : 1,
	circle: 2
};

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColor = '#000000';
	this.currentShape = 0;
  .
  .
  .
//Début du dessin
	this.onInteractionStart = function(){
		this.currLineWidth = document.getElementById('spinnerWidth').value;
		this.currColor = document.getElementById('colour').value;
		if(document.getElementById('butRect').checked){
			this.currEditingMode = editingMode.rect;
		}
		if(document.getElementById('butLine').checked){
			this.currEditingMode = editingMode.line;
		}
    .
    .
    .
```

2. Pour la creation des differents formes
```
		//Switch sur une ligne ou un rectangle et affectation à la forme courante
		switch(this.currEditingMode){
			case editingMode.rect:
				console.log("Un rectangle");
				this.currentShape = new Rectangle(this.DnD.initialX, this.DnD.initialY,
					0, 0, this.currLineWidth, this.currColor);
				break;
			case editingMode.line:
				console.log("Une ligne");
				this.currentShape = new Line(this.DnD.initialX, this.DnD.initialY,
					this.DnD.initialX, this.DnD.initialY, this.currLineWidth, this.currColor);
				break;

			case editingMode.circle:
				console.log("Un cercle");
				var abPow = Math.pow(Math.abs(this.DnD.initialX-this.DnD.endX),2);
				var acPow = Math.pow(Math.abs(this.DnD.initialY-this.DnD.endY),2);
				var rad = Math.sqrt(abPow + acPow);
				this.currentShape = new Circle(this.DnD.initialX, this.DnD.initialY,
					rad, this.currLineWidth, this.currColor);
				break;
		}

		this.currentShape.paint(ctx, canvas);

	}.bind(this);
	.
	.
	.
```


3. Pour reinitialiser le canvas
```
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawing.paint(ctx, canvas);
	this.currentShape.paint(ctx, canvas);
```

## Liste des modifications

1. Nous avons rajouté la fonction "updateShapeList" dans le fichier de view.js

```
 Drawing.prototype.updateShapeList = function(){

    var shapeList = document.getElementById('shapeList');
.
.
.
```

