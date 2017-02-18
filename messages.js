$('document').ready(function (){

	$("textarea").keypress(function(event){

		if (event.which == 13){

			//console.log ("enter pressed");
			$(".send").click();
			event.preventDefault();
		}

	});// END OF KEYPRESS

	/*$("input").keyup(function () {

		var getuser = $(this).val();

		$("span").text(getuser);

	}).keyup();*/

	$(".send").click(function(){

		
		var username = "<span class='username'> You: </span>"// + getuser;

		var userMessage = $("textarea").val();

		$("textarea").val("");

		var prevState = $(".container").html();

		//console.log(prevState.length);
		if (prevState.length > 0){
			prevState = prevState + "<br>";
		}

		$(".container").html(prevState + username + userMessage);

		$(".container").scrollTop($(".container").prop("scrollHeight"));

	});// END OF CLICK
});