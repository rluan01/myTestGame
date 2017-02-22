$(function($){
	$("h1").addClass("text-center").css({"text-shadow":"1px 1px 10px black","box-shadow":"inset 1px 1px 10px #707070","font-weight":"700"});
});

function start(){
	$("#idMsg").hide();
	$("body").append("<img src='http://wiki.astrolords.com/images/8/8b/Asteroid3.png' class='player' />");	

	var jogo = {}

	jogo.timer  = setInterval(loop,5);
	function loop(){
		mvPlayer();
	}
	jogo.pressionou = [];

	$(document).keyup(function(e){
		jogo.pressionou[e.which] = true;
	});
	$(document).keydown(function(e){
		jogo.pressionou[e.which] = false;
	});

	var TECLAS  = {
		W:87,
		S:83,
		D:68
	}

	
	function mvPlayer(){
		if(jogo.pressionou[TECLAS.W]){
			alert("teste");
		}
	}
}
