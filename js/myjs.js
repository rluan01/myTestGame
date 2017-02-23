$(function($){
	$("h1").addClass("text-center").css({"text-shadow":"1px 1px 10px black","box-shadow":"inset 1px 1px 10px #707070","font-weight":"700"});
});

function start(){
	$("#idMsg").hide();
	$("body").append("<img src='http://wiki.astrolords.com/images/8/8b/Asteroid3.png' id='idPlayer1' class='player' />");	


	var jogo = {}
	var podeAtirar  = true;
	jogo.timer  = setInterval(loop,5);
	function loop(){
		mvPlayer();
	}
	jogo.pressionou = [];

	$(document).keydown(function(e){
		jogo.pressionou[e.which] = true;
	});
	$(document).keyup(function(e){
		jogo.pressionou[e.which] = false;
	});

	var TECLAS  = {
		W:87,
		S:83,
		D:68,
		A:65,
		F:70
	}

	
	function mvPlayer(){
		if(jogo.pressionou[TECLAS.W]){
			var cima = parseInt($("#idPlayer1").css("top"));
			$("#idPlayer1").css("top",cima-1);
			console.log(cima);
			if(cima<=404){
				$("#idPlayer1").css("top",cima+1);
			}
		}
		if(jogo.pressionou[TECLAS.S]){
			var baixo = parseInt($("#idPlayer1").css("top"));
			$("#idPlayer1").css("top",baixo+1);
			if(baixo>=430){
				$("#idPlayer1").css("top",baixo-1);
			}
		}
		if(jogo.pressionou[TECLAS.D]){
			var direito = parseInt($("#idPlayer1").css("left"));
			$("#idPlayer1").css("left",direito+1);
			if(direito>=922){
				$("#idPlayer1").css("left",direito-1);
			}
		}
		if(jogo.pressionou[TECLAS.A]){
			var esquerdo = parseInt($("#idPlayer1").css("left"));
			$("#idPlayer1").css("left",esquerdo-1);
			if(esquerdo<=110){
				$("#idPlayer1").css("left",esquerdo+1);
			}
		}
		if(jogo.pressionou[TECLAS.F]){
			soltaDisparo();
		}
	}
		
		function soltaDisparo(){
			if(podeAtirar){
				podeAtirar  = false;
				topJogador1  = parseInt($("#idPlayer1").css("top"));
				posicaoX 		= parseInt($("#idPlayer1").css("left"));
				tiroX  = posicaoX-30;
				topoTiro  = topJogador1-75;
				console.log(tiroX);
				$("body").append("<img src='http://1.bp.blogspot.com/-qejur_csU6s/ThSOfSd0yQI/AAAAAAAAApw/TuSD3GFTZlY/s1600/bala.png' id='fogo' width='100px' height='100px' style='position:absolute;left:453px' class='c_fogo' />");
				$("#fogo").css({"left":tiroX,"top":topoTiro});
				tempoDisparo  = window.setInterval(executaDisparo,30);

			}
		}
		function executaDisparo(){
		posicaoX 		= parseInt($("#fogo").css("top"));
		$("#fogo").css("top",posicaoX-80);
		if(posicaoX<=95){
			window.clearInterval(tempoDisparo);
			tempoDisparo  = null;
			$("#fogo").remove();
			podeAtirar=true;
		}
	}
	
}
