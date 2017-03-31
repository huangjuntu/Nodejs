var http = require('http');//把http模块require进来
var url = 'http://www.imooc.com/learn/348';
var cheerio = require('cheerio');//把下面的模块require进来
function filterChapters(html){
	var $ = cheerio.load(html);//在控制台安装cheerio模块，npm install cheerio
	var chapters = $('.chapter');
	var courseDate = [];
	chapters.each(function(item){//遍历拿到单独的每一章
		var chapter = $(this);
		var chapterTitle = chapter.find('strong').text();//找到标签里面的内容
		var videos = chapter.find('.video').find('li');//内容里面的li
		var chapterDate = {
			chapterTitle : chapterTitle,
			videos : []
		}
		videos.each(function(item){//video遍历
			var video = $(this).find('.J-media-item');
			var videoTitle = video.text();
			var videoId = video.attr('href').split('video/')[1];
			chapterDate.videos.push({
				title : videoTitle,
				id : videoId
			})
 		})
 		courseDate.push(chapterDate);
	})
	return courseDate;
}
function printCourseDate(courseDate){
	courseDate.forEach(function(item){
		console.log(item.chapterTitle);
		item.videos.forEach(function(video){
				console.log('[' + video.id + ']' + video.title);	
		})
	})
}
//

http.get(url,function(res){

	var html='';
	res.on('data',function(data){
		html+=data;
	})

	res.on('end',function(){
		
	var courseDate = filterChapters(html);
	printCourseDate(courseDate);
	// console.log(courseDate);
		
	})
}).on('error',function(){
	console.log('出错了');
});