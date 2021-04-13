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

	// Liez ici les widgets à la classe pour modifier les attributs présents
	// ci-dessus.

	this.DnD = new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate
	// et onInteractionEnd

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
		if(document.getElementById('butCircle').checked){
			this.currEditingMode = editingMode.circle;
		}

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

	//Dessiner le mouvement
	this.onInteractionUpdate = function(){

		if (this.currEditingMode == editingMode.rect){
			var width = this.DnD.endX - this.DnD.initialX;
			var height = this.DnD.endY - this.DnD.initialY;
			this.currentShape = new Rectangle(this.DnD.initialX, this.DnD.initialY, width, height, this.currLineWidth, this.currColor);
		}
		if (this.currEditingMode == editingMode.line){
			this.currentShape = new Line(this.DnD.initialX, this.DnD.initialY, this.DnD.endX, this.DnD.endY, this.currLineWidth, this.currColor);
		}
		if (this.currEditingMode == editingMode.circle){
			var abPow = Math.pow(Math.abs(this.DnD.initialX-this.DnD.endX),2);
			var acPow = Math.pow(Math.abs(this.DnD.initialY-this.DnD.endY),2);
			var rayon = Math.sqrt(abPow + acPow);
			this.currentShape = new Circle(this.DnD.initialX, this.DnD.initialY, rayon, this.currLineWidth, this.currColor);
		}
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawing.paint(ctx, canvas);
		this.currentShape.paint(ctx, canvas);

	}.bind(this);

	//Fin du dessin
	this.onInteractionEnd = function(){
		if (this.currEditingMode == editingMode.rect){
			var width = this.DnD.endX - this.DnD.initialX;
			var height = this.DnD.endY - this.DnD.initialY;
			this.currentShape = new Rectangle(this.DnD.initialX, this.DnD.initialY, width, height, this.currLineWidth, this.currColor);
		}
		if (this.currEditingMode == editingMode.line){
			this.currentShape = new Line(this.DnD.initialX, this.DnD.initialY, this.DnD.endX, this.DnD.endY, this.currLineWidth, this.currColor);
		}
		if (this.currEditingMode == editingMode.circle){
			var abPow = Math.pow(Math.abs(this.DnD.initialX-this.DnD.endX),2);
			var acPow = Math.pow(Math.abs(this.DnD.initialY-this.DnD.endY),2);
			var rayon = Math.sqrt(abPow + acPow);
			this.currentShape = new Circle(this.DnD.initialX, this.DnD.initialY, rayon, this.currLineWidth, this.currColor);
		}
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawing.addForm(this.currentShape);
		drawing.paint(ctx, canvas);
		drawing.updateShapeList(this.currentShape);
		this.currentShape = null;

	}.bind(this);

};

