$(document).ready(function(){
	var images_array=['konigsegg.jpg','lambo1.jpg','p1.jpg','porschegt3.jpeg','ferrari.jpg','bugatti.jpg'];
		var current=0;
		$("#next_btn").on("click", function(){
			if(current<images_array.length-1){
			current++;
			var img_display = images_array[current]; //storing images in a variable
	
			$("#displayImage").attr("src","img/"+img_display); //to replace the image
	
			}
		});

		$("#prev_btn").on("click",function(){

			if(current>0){
			current--;
			var img_display = images_array[current];
	
			$("#displayImage").attr("src","img/"+img_display);
			}


		} );

});