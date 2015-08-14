var Recipe = (function(){
	this.ingredients, this.steps = {};

	function message(value, getTag){
		tag = (getTag) ? getTag : "p";

		if(value){
			document.write("<"+ tag +">"+ value + "</"+ tag +">");
		}
	}

	function setIngredients(value){
		this.ingredients = value;		
	}

	function getIngredients(){
		message(this.ingredients.join(", "));
	}

	function setSteps(value){
		this.steps = value;		
	}

	function getSteps(){
		message(this.steps.join(", "));
	}

	function getJSON(){
		message(JSON.stringify(this));
	}

	return {
		ingredients: setIngredients,
		showIngredients: getIngredients,

		steps: setSteps,
		showSteps: getSteps,

		json: getJSON,

		message: message,
	}
})();

Recipe.ingredients(['Carrots', 'Eggs']);
Recipe.steps(['peel', 'chop', 'cook']);

Recipe.message('The ingredients are: ', 'h3');
Recipe.showIngredients();
Recipe.message('The steps are: ', 'h3');
Recipe.showSteps();

Recipe.message('JSON: ', 'h3');
Recipe.message(Recipe.json());



