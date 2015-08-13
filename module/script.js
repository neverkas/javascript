var Receta = (function(){
	this.ingredientes, this.pasos = {};

	function message(value){
		console.log(value);
	}

	function setIngredientes(value){
		this.ingredientes = value;		
	}

	function getIngredientes(){
		message(this.ingredientes.join(", "));
	}

	function setPasos(value){
		this.pasos = value;		
	}

	function getPasos(){
		message(this.pasos.join(", "));
	}

	return {
		ingredientes: setIngredientes,
		verIngredientes: getIngredientes,

		pasos: setPasos,
		verPasos: getPasos,

		mensaje: message,
	}
})();

Receta.ingredientes(['Zanahorias', 'Huevos']);
Receta.pasos(['Lavar', 'Pelar', 'Cocinar', 'Servir']);

Receta.mensaje('Los ingredientes son: ');
Receta.verIngredientes();

Receta.mensaje('Los pasos a seguir son: ');
Receta.verPasos();


