
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
    this.formes=new Array();
}

function Forme(epaisseur,couleur){
    this.couleur=couleur;
    this.epaisseur=epaisseur;

}

function Rectangle(x_haut_g,y_haut_gauche,largeur,hauteur,epaisseur,couleur){
    Forme.call(this,epaisseur,couleur);
    this.x_haut_g=x_haut_g;
    this.y_haut_gauche=y_haut_gauche;
    this.largeur=largeur;
    this.hauteur=hauteur;

}

function Line(x_1,y_1,x_2,y_2,epaisseur,couleur){
    Forme.call(this,epaisseur,couleur);
    this.x_1=x_1;    this.y_1=y_1;
    this.x_2=x_2;
    this.y_2=y_2;
}
