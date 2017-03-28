var globalVariable = "this is globa  variable"

function globaFunction(){
	var localVariable =  "this is local  variable"
	console.log('xxx')
	console.log(globalVariable);
	console.log(localVariable);
	var globalVariable1 = "this is change  variable"
	console.log(globalVariable1);
	
	
}
globaFunction();
