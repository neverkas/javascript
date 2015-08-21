function Recipe(name, type){
	this.name = name;
	this.type = type;
}

function goodComment(){
	console.log('Good comment..! :)');
}

function badComment(){
	console.log('Bad comment..! :(');
}

Recipe.prototype.addCommentRecipe = function(options){

	var newComment = null;


	if(options.type == 'good'){
		newComment = goodComment;
	}

	if(options.type == 'bad'){
		newComment = badComment;
	}

	new newComment();

	if(options.message){
		console.log(options.client + " commented: The " + this.name  + ", " + options.message);	
	}
}

MyRecipe = new Recipe('Cookie Avena');
MyRecipe.addCommentRecipe({
	client: 'Carlos',
	type: 'good',
	message: 'very good'
});

MyRecipe.addCommentRecipe({
	client: 'Mariano',
	type: 'bad',
	message: 'it\'s horrible'
});

