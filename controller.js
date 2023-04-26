
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);
	document.getElementById('butRect').onclick=()=>{
		this.currEditingMode=editingMode.rect;
	}
	document.getElementById('butLine').onclick=()=>{
		this.currEditingMode=editingMode.line;
	}
	document.getElementById('spinnerWidth').onchange=(e)=>{
		this.currLineWidth=e.target.value;
	}
	document.getElementById('colour').onchange=(e)=>{
		this.currColour=e.target.value;
	}

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart=function(){
		
		
	}.bind(this);
	this.onInteractionUpdate=function(dnd){
		if(this.currEditingMode===editingMode.line){
			this.currentShape = new Line(dnd.x_init,dnd.y_init,dnd.x_fin,dnd.y_fin,this.currLineWidth,this.currColour);
		}
		else{
			this.currentShape = new Rectangle(dnd.x_init,dnd.y_init,dnd.x_fin-dnd.x_init,dnd.y_fin-dnd.y_init,this.currLineWidth,this.currColour);
		}
		drawing.paint(ctx,canvas)
		this.currentShape.paint(ctx);
		console.log(this);
	}.bind(this);

	this.onInteractionEnd=function(){
		drawing.formes.push(this.currentShape);
		drawing.paint(ctx,canvas)
		this.currentShape.paint(ctx);
	}.bind(this);
};


