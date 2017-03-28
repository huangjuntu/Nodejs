var pet= {
	words:'...',
	speak:function(say){
		console.log(say+''+this.words);
	}
}
//pet.speak('hjt');

var dog={
	words:"nihao"
}

pet.speak.call(dog,'Say');
