var message = function(getName, callback){
	if(typeof callback === 'function'){
		callback(getName);
	}else{
		return getName;
	}
}

message("Carlos", function(getValue){
	var string;
		string = 'Bienvenido ' + getValue;

	console.log(string);
})

message("Probando", function(getValue){
	console.log(getValue);
})

