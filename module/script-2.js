var MyRecipe = (function(){
  this.ingredients = {};

  getIngredients = function(){
  	console.log(this.ingredients);
  };

  return {
  	ingredients: getIngredients,
  };

});

MyRecipe.prototype.ingredient = function(getName, getAmount){  
  this.name 	= getName;
  this.amount 	= getAmount;
  
	add = function(){
		this.ingredients.push({name: this.name, amount: this.amount});
	};

	return {
		add: add,
	};
};

var RecipeOne = new MyRecipe();

RecipeOne.ingredient('Carrots', 5).add();
RecipeOne.ingredients();

