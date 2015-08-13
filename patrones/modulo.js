var Receta = (function(){
	this.mensaje = '';
	this.alimentos, this.pasos = {};

	function getAlimentos(){
		return this.alimentos;		
	}

	function setAlimentos(value){
		this.alimentos = value;		
	}

	function getPasos(){
		return this.pasos;		
	}

	function setPasos(value){
		this.pasos = value;		
	}

	function getPasos(){
		this.mensaje = 'Los ingredientes son ';
		this.mensaje += this.alimentos.join(",");
		
		this.mensaje += '';

		this.mensaje += 'Los pasos a seguir seran ';
		this.mensaje += this.pasos.join(",");

		console.log(this.mensaje)
	}

	return {
		alimentos: setAlimentos,
		pasos: setPasos,
		mostrar: getPasos,
	}
})();

Receta.alimentos(['Zanahorias', 'Huevos']);
Receta.pasos(['Lavar', 'Pelar', 'Cocinar', 'Servir']);
Receta.mostrar();

