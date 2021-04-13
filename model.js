
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !


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
}

//Classe Rectangle

// classe Rectangle extends Form
function Rectangle(x, y, width, height, thickness, color) {

    Form.call(this, thickness, color);// Héritage

    //Initialisation des propriétées
    this.x=x; // Coordonée x du point haut-gauche
    this.y=y; // Coordonnée y du point haut-gauche
    this.width = width; // Largeur du rectangle
    this.height = height; // Hauteur du rectangle
   /* this.thickness = thickness; // épaisseur
    this.color = color; // couleur de la forme*/

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
}


//Classe Line
// classe Line extends Form
function Line(x1, y1, x2, y2, thickness, color) {
    Form.call(this, thickness, color); // Héritage

    //Initialisation des propriétées
    this.x1=x1; // Coordonnée x du premier point
    this.y1=y1; // Coordonnée y du premier point
    this.x2=x2; // Coordonnée x du deuxième point
    this.y2=y2; // Coordonnée y du deuxième point
   /* this.thickness = thickness;
    this.color = color;*/

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
}


//Classe Form
function Form(thickness, color) {

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

}

// Classe Circle extends Form

function Circle (x,y,radius,thickness,color){
    Form.call(this,thickness,color); // heritage

    //Initialisation des propriétées
    this.x =x; // Coordonnée x du point central
    this.y=y; // Coordonnée y du point central
    this.radius=radius; // rayon du cercle

   /* this.thickness =thickness;
    this.color =color;*/

    //Fonction qui retourne la coordonnée de X
    this.getX=function (){
        return this.x;
    }.bind(this);


    //Fonction qui retourne la coordonnée de Y
    this.getY = function (){
        return this.y;
    }.bind(this);

    //Fonction qui retourne le rayon
    this.getRadius = function (){
        return this.radius;
    }.bind(this);
}


