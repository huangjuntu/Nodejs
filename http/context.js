//var pet={
//	words:"...",
//	speak: function(){
//		console.log(this);
//		console.log(this.words);
//		console.log(this===pet);
//	}
//}
//pet.speak();

//function test(str){
//	this.str=str;
//	console.log(this === global);
//	console.log(this.str);
//}
//test("1111");

function Pet(words){
	this.words=words;
	this.speak=function(){
		console.log(this);
		console.log(this.words);
	}
}

var cat = new Pet("huangjuntu");

cat.speak();
