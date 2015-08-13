var Recipe = (function(){
	this.ingredients, this.steps = {};

	function message(value){
		console.log(value);
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

	return {
		ingredients: setIngredients,
		showIngredients: getIngredients,

		steps: setSteps,
		showSteps: getSteps,

		message: message,
	}
})();

Recipe.ingredients(['Carrots', 'Eggs']);
Recipe.steps(['peel', 'chop', 'cook']);

Recipe.message('The ingredients are: ');
Recipe.showIngredients();

Recipe.message('The steps are: ');
Recipe.showSteps();


